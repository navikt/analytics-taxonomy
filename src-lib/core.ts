import {AmplitudeClient} from "amplitude-js";

type Core = {
    amplitude?: AmplitudeClient;
    groups?: {},
    commonEventProps?: {},
    logEvent: (eventName: string, eventProps: {}) => void,
};
const NOT_INITIALIZED = 'AmplitudeClient need to be initialized with taxonomy!';
const core: Core = {
    amplitude: undefined,
    groups: undefined,
    commonEventProps: {},
    logEvent: (eventName: string, eventProps: {}) => {
        console.warn(NOT_INITIALIZED);
    }
}

/** @internal */
export function initTaxonomy(
    client: AmplitudeClient,
    commonEventProps?: {}
) {
    core.commonEventProps = commonEventProps ? commonEventProps : {};
    core.amplitude = client;
    core.logEvent = (eventType: string, eventProperties: {}) => {
        return new Promise(function (resolve: any, reject: any) {
            if (core.amplitude) {
                const mergedProps = {
                    ...core.commonEventProps,
                    ...eventProperties,
                }
                return core.amplitude.logEvent(eventType, mergedProps, resolve);
            } else {
                console.warn(NOT_INITIALIZED);
                reject(NOT_INITIALIZED)
            }
        });
    }
}

/** @internal */
export function initTaxonomyWithGroup(
    client: AmplitudeClient,
    groups: {},
    commonEventProps?: {}
) {
    core.commonEventProps = commonEventProps ? commonEventProps : {};
    core.amplitude = client;
    core.groups = groups;
    core.logEvent = (eventType: string, eventProperties: {}) => {
        return new Promise(function (resolve: any, reject: any) {
            if (core.amplitude) {
                const mergedProps = {
                    ...core.commonEventProps,
                    ...eventProperties,
                }
                return core.amplitude.logEventWithGroups(eventType, mergedProps, core.groups, resolve);
            } else {
                console.warn(NOT_INITIALIZED);
                reject(NOT_INITIALIZED)
            }
        });
    }
}

/** @internal */
export default core;
