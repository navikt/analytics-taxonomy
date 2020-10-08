import {AmplitudeClient} from "amplitude-js";

let amplitude;

/** @internal */
export function initTaxonomy(client: AmplitudeClient) {
    amplitude = client;
}
/** @internal */
export function initTaxonomyWithGroup(client: AmplitudeClient, groupName, groupId) {
    amplitude = client;
}
/** @internal */
export function logEvent(eventName: string, eventProps: {}) {
    if (!amplitude) {
        console.warn('AmplitudeClient need to be initialized with taxonomy!');
    } else {
        amplitude.getInstance().logEvent(eventName, eventProps);
    }
}
