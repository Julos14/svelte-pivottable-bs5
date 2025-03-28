/** @typedef {typeof __propDef.props}  DraggableAttributeProps */
/** @typedef {typeof __propDef.events}  DraggableAttributeEvents */
/** @typedef {typeof __propDef.slots}  DraggableAttributeSlots */
export default class DraggableAttribute extends SvelteComponentTyped<{
    valueFilter: any;
    name: any;
    attrValues: any;
    menuLimit: any;
    updateValuesInFilter: any;
    locales: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DraggableAttributeProps = typeof __propDef.props;
export type DraggableAttributeEvents = typeof __propDef.events;
export type DraggableAttributeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        valueFilter: any;
        name: any;
        attrValues: any;
        menuLimit: any;
        updateValuesInFilter: any;
        locales: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
