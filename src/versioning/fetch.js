const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const os = require('os');
const path = require('path');


async function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

function getTmpFile(filename, folder) {
  const dir = path.join(os.tmpdir(), folder);
  !fs.existsSync(dir) && fs.mkdirSync(dir);
  return path.join(dir, filename);
}

function fileAge(filename) {
  const stats = fs.statSync(filename);
  return (new Date().getTime() - stats.mtime.getTime()) / 1000;
}

async function fetchCached(url, ttlSeconds, folder) {
  const filename = crypto.createHash('md5').update(url).digest('hex');
  const cacheFilepath = getTmpFile(filename, folder);
  if (!fs.existsSync(cacheFilepath) || fileAge(cacheFilepath) > ttlSeconds) {
    console.log(filename + ' not cached, fetching a new file.');
    const data = await fetch(url);
    fs.writeFileSync(cacheFilepath, data, 'utf-8');
  }
  return fs.readFileSync(cacheFilepath, 'utf-8');
}

module.exports = {
  fetch,
  getTmpFile,
  fileAge,
  fetchCached,
}
