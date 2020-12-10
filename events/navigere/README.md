# Navigere

Når en bruker har navigert, for eksempel når de trykker på en lenke eller ekspanderer et panel med mere informasjon.

> **navigere** v2 (fra latin av *navis* 'skip' og *agere* 'bevege framover')  
1 føre, styre et skip eller et fly  
2 bestemme posisjon og kurs  
*-- Bokmålsordboka. Språkrådet og Universitetet i Bergen.*


«Navigering» burde forstås som en bruker- eller interaksjons-hendelse, ikke en teknisk hendelse. Hvordan navigeringen er implementert—om nettleseren sendes til en ny URL, om react routing rendrer helt nytt innhold, eller om man bytter tabs implementert i javascript—er egentlig ikke relevant.

Denne følger med [dekoratøren](https://github.com/navikt/nav-dekoratoren) så alle klikk i dekoratøren er sporet i alle apper som bruker den.
Team må legge til sporing av navigasjonen i sin egen app som de ønsker det. 

Team **bør** legge til disse attributtene for mer verdi i dataene

* destinasjon: target URL brukeren sendes til
* lenketekst: teksten som brukeren trykker på, f.eks. lenketeksten

Dette lar teamene se hvor brukeren var og hvor de gikk, og har historikk på hva som stod i lenketeksten. Dette er nyttig når man eksperimenterer med ulike formuleringer for å gjøre det lettere for brukeren å finne frem og forstå innholdet.
