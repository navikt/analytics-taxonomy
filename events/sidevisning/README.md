# Sidevisning

Når en bruker har besøkt en side. Inneholder URL brukeren besøkte.

Denne følger med [dekoratøren](https://github.com/navikt/nav-dekoratoren) så team som bruker den trenger ikke logge denne hendelsen i Amplitude eller Google Analytics.

I [Amplitude proxy](https://github.com/navikt/amplitude-proxy) berikes denne med URL brukeren er på når sidevisning logges.

## Attributter

* `url` Fullstendig URL på siden uten protokoll, for eksempel `www.nav.no/no/person` uten `https://www.nav.no/no/person`
* `hostname` domenenavn og nivå, for eksempel  `www.nav.no` eller `familie.nav.no`
* `pagePath` stien på siden, for eksempel `/no/person` 
* `status` HTTP status på siden for å se om den finnes (200), om de besøker via redirect (301, 302) eller får en feil (404, 500)
* `app` Navn på appen
* `team` Navn på teamet som eier appen