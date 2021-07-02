# **Analytics Taxonomy for NAV applikasjoner**

- [**Analytics Taxonomy for NAV applikasjoner**](#analytics-taxonomy-for-nav-applikasjoner)
  - [**Hvordan kan jeg bruke taksonomien?**](#hvordan-kan-jeg-bruke-taksonomien)
  - [**Hvordan kan jeg bidra til taksonomien?**](#hvordan-kan-jeg-bidra-til-taksonomien)
    - [**Språk og casing**](#språk-og-casing)
    - [**Påkrevd og valgfrihet**](#påkrevd-og-valgfrihet)
  - [**Versjonering**](#versjonering)

NAV skal lage gode tjenester for innbyggere. Derfor trenger vi å vite hvordan de brukes. For at det skal være enkelt for team å forstå bruken av tjenestene de lager og forstå bruksmønster på tvers av tjenester så behøver vi et språk for målinger. Det oppnår vi med en navnkonvensjon, også kalt en taksonomi. Denne skal brukes i webstatistikken vår som samles i Amplitude.

For at taksonomien skal lykkes så er vi avhengig av at team bidrar med forslag og i diskusjoner om hva taksonomien bør inneholde.

Verktøyene vi bruker har også tekniske begrensninger som vi må forholde oss til. Amplitude kan vise opptil 2.000 eventnavn per prosjekt og 2.000 attributtnavn. Merk at attributt*verdier* ikke har en slik begrensningen. Taksonomien bidrar derfor også til at alle får utbytte av Amplitude uten at vi går over disse tekniske begrensningene. 

> <sup>1</sup> Overskrider man grensene lagres fortsatt dataen, men den er kun tilgjengelig ved eksport.

Vi ønsker at produkt-team hos NAV leser og bidrar til taksonomien ved å lage en Pull Request. Alle kan bruke dette repoet i henhold til vår [lisens](/LICENSE).

**Hvordan hånheves taksonomien?**

Tanken er at taksonomien skal fungere i vår [amplitude-proxy|https://github.com/navikt/amplitude-proxy], og merke alle events som sendes inn til Amplitude slik at vi kan ha oversikt på om taksonomien blir brukt, og unngå at vi nærmer oss maksgrensen på unike events per prosjekt i Amplitude.

Fra taksonomien lages det JSON schema. Disse brukes til å validere at dataene som samles inn via nettlesere til brukere er i henhold til vår taksonomi. Taksonomien følger målet om innebygd personvern og krav i loven som Personopplysningsloven og vår personvernerklæring på https://www.nav.no.

## **Hvordan kan jeg bruke taksonomien?**

Utviklere kan bruke taksonomien som et kodeverktøy i tillegg til å være oppslagsverk. Vi lager en pakke som du kan importere i frontend-prosjekter som gir deg innebygd dokumentasjon som beskriver event-typer og hva de passer til å måle på våre nettsider.

## **Hvordan kan jeg bidra til taksonomien?**

Start en tråd i vår Slack-kanal for [#Amplitude](https://nav-it.slack.com/archives/CMK1SCBP1)

Vi tar gjerne imot både forslag å legge til nye ting og å endre eksisterende ting i taksonomien.

Hvis du foreslår en ny event-type, fortell oss hva du mener det hjelper deg og ditt team å måle. 

Foreslå gjerne attributter som kan brukes til å filtrere på dataene også, slik at ditt team kan gruppere og filtrere på dataene som samles inn. 

### **Språk og casing**

Bruk naturlig språk for å beskrive en event. Det burde kunne brukes i en setning og beskrive en handling som brukeren gjorde.

For eksempel "**Skjemaet ble åpnet** av bruker".

Andre eksempler 
* `skjema åpnet`
* `skjema startet`
* `skjemaspørsmål besvart`
* `skjemasteg fullført`
* `skjemavalidering feilet`
* `skjemainnsending feilet`
* `skjema fullført`


### **Påkrevd og valgfrihet**

Noen attributter er påkrevd, men mesteparten er valgfrie. Vi bruker allowlist for å håndheve taksonomien og for å forsikre at ingen personopplysninger sendes til tredjeparten Amplitude. Over tid så vil taksonomien vokse og støtte flere events som bidrar til allow listen.

For å forstå dette nærmere så ta en titt på noen eksempler i taksonomien som [sidevisning](events/sidevisning/README.md) og [navigere](/events/navigere/README.md).

## **Versjonering**

Når repoet oppdateres så vil en github action gå inn å sjekke om endringen 
skal være en PATCH eller en MINOR(breaking change) og automatisk bumpe versjon og
kjøre en oppdatering til NPM.

Hvis du gjør en endring på andre ting, altså utenfor event-mappen, så kan koden 
bumpes med å skrive `[MAJOR]`, `[MINOR]` eller `[PATCH]` i commit-meldingen.