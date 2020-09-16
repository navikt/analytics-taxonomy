# Taksonomi for Webanalyse

## Naturlig språk

Vi ønsker å navngi våre events slik man snakker og skriver i dagligdags språk.

Navn er basert på den antatte intensjonen til brukeren.

Det er fordi dette er enklere å forstå og derfor fortolke.

Dette gir oss også konsistent navgivning på events.

**For eksempel**

skjema åpnet av bruker -> skjema åpnet
side åpnet av bruker -> side åpnet
lenke klikket av bruker -> lenke klikk

## Syntaks

Bruk lower case og mellomrom.

# nav-analytics in English
Analytics taxonomy for NAV applications

NAV should create great services, therefore we need to know how they are used. To ensure we get high-quality data and consistent naming conventions we use a shared taxonomy for analytics. Following our Mesh architecture all events shall also be passed onwards to Kafka.

From this taxonomy we generate JSON schema. The schema is used to validate the data we collect is in accordance with our taxonomy, which shall include requirements from the Norwegian laws including Personopplysningsloven and our privacy policy at https://nav.no.

The naming convention is intended to ensure consistency and allowing teams to re-use their code across services and comparing services with success metrics and user experience. 

Developers at NAV are welcome to read and contribute to the taxonomy by making a suggestion as a Pull Request. Everyone is free to use this repository in accordance with our [license]('https://github.com/navikt/nav-analytics/blob/master/LICENSE').

### Getting started

Before contributing your proposals to the taxonomy, consider what is the value proposition of your product?

This will help you answer what to measure and how to measure it. The taxonomy in this repository only includes digital analytics, but you can also benefit from using other data sources such as surveys and usability testing.

**Casing**

Use snake_case to describe a data point, be it an event, pageview or anything else. For example: `page_loaded`, `logged_in`, `security_level: 3`, 

**Naming convention** 

The purpose of our naming convention is to ensure consistency, easy interpretation and a simple method for adding new events. Our proxy will only permit whitelisted events are sent to our analytics providers.

For each interaction you are tracking, describe an object and an action related to it. For example: `form_submitted`, `form_started`, `form_downloaded`.

Following the naming convention makes it easier for developers to understand existing events and give new events a relevant name that matches this style. New events must be approved before they are collected. 

**The taxonomy**

Some data points are **required**, most are *optional*. We use whitelisting to enforce the taxonomy and to ensure no personally identifiable information is sent to a third party. Over time we will grow the taxonomy to include new events.

```
{
    "event_name":
    [
        "application_name": "foreldrepenger",
        "team_name": "foreldrepenger"
    ]
}
```
