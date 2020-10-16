const rootDir = require('../utils/root-dir');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

/**
 * Needed for cleaning the distribution directory when working locally.
 */
const clean = () => {
  const distDir = rootDir('dist');
  const pattern = path.join(distDir, '**', '*.ts');
  const files = glob.sync(pattern);
  files.forEach(filename => {
    if (!filename.endsWith('d.ts')) {
      fs.unlinkSync(filename);
    }
  });
};

clean();
