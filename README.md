# Motivasjon for taksonomi i NAVs applikasjoner

NAV skal lage gode tjenester. Derfor trenger vi å vite hvordan de brukes. For å forsikre at vi får gode data med høye kvalitet og konsistente navnkonvensjonser så skal vi bruke en felles taksonomi for analytics. Ved å følge vår Mesh-arkitektur så skal alle events videresendes til Kafka.

Fra denne taksonomien lages det JSON schema. Disse brukes til å validere at dataene som samles inn via nettlesere til brukere er i henhold til vår taksonomi.

Taksonomien følger målet om innebygd personvern og krav i loven som Personopplysningsloven og vår personvernerklæring på https://nav.no.

## Formål

Navnkonvensjonen følger vårt [design-system](https://aksel.nav.no/designsystem) for å måle bruk av komponenter. 

Formålet med navnkonvensjonen er å sikre at våre data er sammenlignbare, at team kan gjenbruke kode blant sine tjenester og at vi kan lett implementere metrikker for å måle kvalitet i løsningen. For eksempel bruksrate på hvordan innbyggere navigerer og tilpasser innhold på nettstedet.

Et annet aspekt er at Amplitude begrenser<sup>1</sup> et *prosjekt* til maks 2.000 eventnavn og 2.000 attributtnavn. Merk at attributt*verdier* ikke har en slik begrensning. Denne taksonomien bidrar derfor også til at alle bruker Amplitude på en god måte, uavhengig av om man kjenner til Amplitude sine særegenheter.

> <sup>1</sup> Overskrider man grensene lagres fortsatt dataen, men den er kun tilgjengelig ved eksport.

Vi ønsker at utviklere hos NAV leser og bidrar til taksonomien ved å lage en Pull Request. Alle kan bruke dette repoet i henhold til vår [lisens](https://github.com/navikt/analytics-taxonomy/blob/main/LICENSE).

## Kom igang

Før du sender oss et forslag til taksonomien så bør du vurdere forslaget og verdien det tilfører. Hvilket problem løser det? Lar det team forstå bruksmønster, måle om sluttbrukere er selvbetjent eller noe annet?

Ved å svare på dette spørsmålet så blir det enklere å planlegge hva du bør måle og hvordan det bør måles. Taksonomien tar kun for seg digital analyse men dere kan også ha behov for data fra spørreundersøkelser og brukertesting. 

**Språk og casing**

Bruk naturlig språk for å beskrive en event. Det burde kunne brukes i en setning og beskrive en handling som brukeren gjorde.

For eksempel "**Skjemaet ble åpnet** av bruker".

Andre eksempler 

* `accordion åpnet`
* `accordion lukket`
* `modal åpnet`
* `modal lukket`

* `skjema åpnet`
* `skjema startet`
* `skjemaspørsmål besvart`
* `skjemasteg fullført`
* `skjemavalidering feilet`
* `skjemainnsending feilet`
* `skjema fullført`


Bruk camel case i attributter, for eksempel: 

`pagePath` for stien i en URL

**Påkrevd og valgfrihet**

Noen attributter er påkrevd, men mesteparten er valgfrie. Vi bruker allowlist for å håndheve taksonomien og for å forsikre at ingen personopplysninger sendes til tredjeparten Amplitude. Over tid så vil taksonomien vokse og støtte flere events som bidrar til allow listen.

## Utvikling

### Versjonering
Hvis du gjør endringer på eventer vil github action gå inn å sjekke om endringen 
skal være en PATCH eller en MINOR(breaking change) og automatisk bumpe versjon og
kjøre en oppdatering til NPM.

Hvis du gjør en endring på andre ting. Altså utenfor event-folderen, så kan koden 
bumpes med å skrive `[MAJOR]`, `[MINOR]` eller `[PATCH]` i commit-meldingen.


