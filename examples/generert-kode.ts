import {logEvent} from "../src-lib/core";
/**
 *
 */
interface logMyEventProps {
    prop1: string | number | boolean;
    prop2: string | number | boolean;
}


export function logMyEvent(props: logMyEventProps): void {
    return logEvent("Some event", props);
}

interface logSkjemaÅpnetProps {
    skjemaId?: string | number | boolean;
    skjemaNavn?: string | number | boolean;
    ytelse?: string | number | boolean;
    context?: string | number | boolean;
    component?: string | number | boolean;
}

export function logSkjemaÅpnet(props: logSkjemaÅpnetProps): void {
    return logEvent("Skjema \u00E5pnet", props);
}


logSkjemaÅpnet({
        skjemaId: 1232
    }
)
