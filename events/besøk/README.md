# Besøk

Når en bruker har besøkt en side. Inneholder URL brukeren besøkte.

Denne event-typen følger med [dekoratøren](https://github.com/navikt/nav-dekoratoren) så team som bruker dekoratøren trenger ikke logge denne hendelsen i sin app.

I [Amplitude proxy](https://github.com/navikt/amplitude-proxy) berikes denne event-typen med URL og sidetittelen brukeren er på når besøk logges.

| Felt | | Type | Beskrivelse |
| :--- | :--- | :--- | :--- |
| url | påkrevd | string | url på siden som ble besøkt |
| sidetittel | påkrevd | string | tittel på siden som ble besøkt