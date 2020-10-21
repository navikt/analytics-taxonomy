# Sidevisning

Når en bruker har besøkt en side. Inneholder URL brukeren besøkte.

Denne følger med [dekoratøren](https://github.com/navikt/nav-dekoratoren) så team som bruker den trenger ikke logge denne hendelsen i Amplitude eller Google Analytics.

I [Amplitude proxy](https://github.com/navikt/amplitude-proxy) berikes alle events med URL brukeren er på når event logges. Du trenger ikke sende inn URL som et attributt.

## Attributter

* `status` HTTP status på siden for å se om den finnes (200) eller om brukeren får en feil (404, 500)