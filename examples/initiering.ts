import {initTaxonomyAmplitude} from "../src-lib/core";
import {AmplitudeClient} from "amplitude-js";


const amplitudeClient = new AmplitudeClient();

amplitudeClient.init('default', '', {
    apiEndpoint: 'amplitude.nav.no/collect-auto',
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
});

initTaxonomyAmplitude(amplitudeClient);

export default amplitudeClient;
