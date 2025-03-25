/** @typedef {typeof __propDef.props}  PivotTableProps */
/** @typedef {typeof __propDef.events}  PivotTableEvents */
/** @typedef {typeof __propDef.slots}  PivotTableSlots */
export default class PivotTable extends SvelteComponentTyped<{
    [x: string]: any;
    renderer?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PivotTableProps = typeof __propDef.props;
export type PivotTableEvents = typeof __propDef.events;
export type PivotTableSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        renderer?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
