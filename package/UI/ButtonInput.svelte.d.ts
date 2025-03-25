/** @typedef {typeof __propDef.props}  ButtonInputProps */
/** @typedef {typeof __propDef.events}  ButtonInputEvents */
/** @typedef {typeof __propDef.slots}  ButtonInputSlots */
export default class ButtonInput extends SvelteComponentTyped<{
    valueFilter: any;
    locales: any;
    onUpdate: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ButtonInputProps = typeof __propDef.props;
export type ButtonInputEvents = typeof __propDef.events;
export type ButtonInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        valueFilter: any;
        locales: any;
        onUpdate: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
