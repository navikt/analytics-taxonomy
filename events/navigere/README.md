# Navigere

Når en bruker har navigert fra en side til en annen, for eksempel når de trykker på en lenke.

Dette lar teamene se hvor brukeren var og hvor de gikk, og har historikk på hva som stod i lenketeksten. Dette er nyttig når man eksperimenterer med ulike formuleringer for å gjøre det lettere for brukeren å finne frem og forstå innholdet.

Denne følger med [dekoratøren](https://github.com/navikt/nav-dekoratoren) så alle klikk i header og footer i globalnavigasjonen er sporet i alle apper som bruker den.

Team må legge til sporing av navigasjonen i sin egen app som de ønsker. 

Vær obs på å ikke inkludere lenketekst dersom det kan inneholde personopplysninger. Da bør dere heller sette en statisk verdi i navnet på komponenten som blir trykket på.

| Felt | Påkrevd eller valgfritt | Type | Beskrivelse |
| :--- | :--- | :--- | :--- |
| destinasjon | påkrevd | string | target URL brukeren sendes til |
| lenketekst | påkrevd | string | teksten på lenken som brukeren trykker på |