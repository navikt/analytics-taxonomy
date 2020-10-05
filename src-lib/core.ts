import {AmplitudeClient} from "amplitude-js";

let amplitude;

export function initTaxonomy(client: AmplitudeClient) {
    amplitude = client;
}

export function initTaxonomyWithGroup(client: AmplitudeClient, groupName, groupId) {
    amplitude = client;
}

export function logEvent(eventName: string, eventProps: {}) {
    if (!amplitude) {
        console.warn('AmplitudeClient need to be initialized with taxonomy!');
    } else {
        amplitude.getInstance().logEvent(eventName, eventProps);
    }
}
