import {AmplitudeClient} from "amplitude-js";

let amplitude;
let logEvent = (eventName: string, eventProps: {}) => {
    console.warn('AmplitudeClient need to be initialized with taxonomy!');
};
/** @internal */
export function initTaxonomy(client: AmplitudeClient) {
    amplitude = client;
    logEvent = (eventType: string, eventProperties: {}) => {
        return amplitude.getInstance().logEvent(eventType, eventProperties);
    }
}
/** @internal */
export function initTaxonomyWithGroup(client: AmplitudeClient, groupName, groupId) {
    amplitude = client;
    logEvent = (eventType: string, eventProperties: {}) => {
        return amplitude.getInstance().logEvent(eventType, eventProperties);
    }
}
/** @internal */
export default logEvent;
