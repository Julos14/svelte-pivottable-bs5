export namespace aggregatorTemplates {
    export function countUnique(f: any): ([attr]: [any]) => () => {
        uniq: any[];
        push(record: any): void;
        value(): any;
        format: (x: any) => string;
        numInputs: number;
    };
    export function listUnique(s: any): ([attr]: [any]) => () => {
        uniq: any[];
        push(record: any): void;
        value(): any;
        format: (x: any) => string;
        numInputs: number;
    };
    export function max(f: any): ([attr]: [any]) => (data: any) => {
        val: any;
        sorter: any;
        push(record: any): void;
        value(): any;
        format(x: any): any;
        numInputs: number;
    };
    export function min(f: any): ([attr]: [any]) => (data: any) => {
        val: any;
        sorter: any;
        push(record: any): void;
        value(): any;
        format(x: any): any;
        numInputs: number;
    };
    export function first(f: any): ([attr]: [any]) => (data: any) => {
        val: any;
        sorter: any;
        push(record: any): void;
        value(): any;
        format(x: any): any;
        numInputs: number;
    };
    export function last(f: any): ([attr]: [any]) => (data: any) => {
        val: any;
        sorter: any;
        push(record: any): void;
        value(): any;
        format(x: any): any;
        numInputs: number;
    };
    export function median(f: any): ([attr]: [any]) => () => {
        vals: any[];
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    export function average(f: any): ([attr]: [any]) => () => {
        n: number;
        m: number;
        s: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    function _var(ddof: any, f: any): ([attr]: [any]) => () => {
        n: number;
        m: number;
        s: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    export { _var as var };
    export function stdev(ddof: any, f: any): ([attr]: [any]) => () => {
        n: number;
        m: number;
        s: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
}
export const aggregatorsEN: {
    Count: () => () => {
        count: number;
        push(): void;
        value(): number;
        format: (x: any) => string;
    };
    'Count Unique Values': any;
    'List Unique Values': any;
    Sum: ([attr]: [any]) => () => {
        sum: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    'Integer Sum': ([attr]: [any]) => () => {
        sum: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    Average: any;
    Median: any;
    'Sample Variance': any;
    'Sample Standard Deviation': any;
    Minimum: any;
    Maximum: any;
    First: any;
    Last: any;
    'Sum over Sum': ([num, denom]: [any, any]) => () => {
        sumNum: number;
        sumDenom: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    'Sum as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Sum as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Sum as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Count as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Count as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Count as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
};
export const aggregatorsFR: {
    Comptage: () => () => {
        count: number;
        push(): void;
        value(): number;
        format: (x: any) => string;
    };
    'Comptage des valeurs uniques': any;
    'Liste des valeurs uniques': any;
    Somme: ([attr]: [any]) => () => {
        sum: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    'Somme enti\u00E8re': ([attr]: [any]) => () => {
        sum: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    Moyenne: any;
    Médiane: any;
    'Sample Variance': any;
    'Sample Standard Deviation': any;
    Minimum: any;
    Maximum: any;
    Premier: any;
    Dernier: any;
    'Somme sur Somme': ([num, denom]: [any, any]) => () => {
        sumNum: number;
        sumDenom: number;
        push(record: any): void;
        value(): number;
        format: (x: any) => string;
        numInputs: number;
    };
    'Somme en tant que fraction du total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Somme en fraction de lignes': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Somme en tant que fraction de colonnes': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Comptage en tant que fraction du total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Comptage en tant que fraction de lignes': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
    'Comptage en tant que fraction de colonnes': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
        selector: any;
        inner: any;
        push(record: any): void;
        format: (x: any) => string;
        value(): number;
        numInputs: any;
    };
};
export namespace derivers {
    function bin(col: any, binWidth: any): (record: any) => number;
    function dateFormat(col: any, formatString: any, utcOutput?: boolean, mthNames?: string[], dayNames?: string[]): (record: any) => any;
}
export namespace locales {
    namespace en {
        export { aggregatorsEN as aggregators };
        export namespace localeStrings {
            const renderError: string;
            const computeError: string;
            const uiRenderError: string;
            const selectAll: string;
            const select: string;
            const deselect: string;
            const selectNone: string;
            const tooMany: string;
            const filterResults: string;
            const apply: string;
            const cancel: string;
            const totals: string;
            const vs: string;
            const by: string;
            const of: string;
            const all: string;
            const resetfilters: string;
            const only: string;
        }
    }
    namespace gb {
        export { aggregatorsEN as aggregators };
        export namespace localeStrings_1 {
            const renderError_1: string;
            export { renderError_1 as renderError };
            const computeError_1: string;
            export { computeError_1 as computeError };
            const uiRenderError_1: string;
            export { uiRenderError_1 as uiRenderError };
            const selectAll_1: string;
            export { selectAll_1 as selectAll };
            const select_1: string;
            export { select_1 as select };
            const deselect_1: string;
            export { deselect_1 as deselect };
            const selectNone_1: string;
            export { selectNone_1 as selectNone };
            const tooMany_1: string;
            export { tooMany_1 as tooMany };
            const filterResults_1: string;
            export { filterResults_1 as filterResults };
            const apply_1: string;
            export { apply_1 as apply };
            const cancel_1: string;
            export { cancel_1 as cancel };
            const totals_1: string;
            export { totals_1 as totals };
            const vs_1: string;
            export { vs_1 as vs };
            const by_1: string;
            export { by_1 as by };
            const of_1: string;
            export { of_1 as of };
            const all_1: string;
            export { all_1 as all };
            const resetfilters_1: string;
            export { resetfilters_1 as resetfilters };
            const only_1: string;
            export { only_1 as only };
        }
        export { localeStrings_1 as localeStrings };
    }
    namespace fr {
        export { aggregatorsFR as aggregators };
        export namespace localeStrings_2 {
            const renderError_2: string;
            export { renderError_2 as renderError };
            const computeError_2: string;
            export { computeError_2 as computeError };
            const uiRenderError_2: string;
            export { uiRenderError_2 as uiRenderError };
            const selectAll_2: string;
            export { selectAll_2 as selectAll };
            const select_2: string;
            export { select_2 as select };
            const deselect_2: string;
            export { deselect_2 as deselect };
            const selectNone_2: string;
            export { selectNone_2 as selectNone };
            const tooMany_2: string;
            export { tooMany_2 as tooMany };
            const filterResults_2: string;
            export { filterResults_2 as filterResults };
            const apply_2: string;
            export { apply_2 as apply };
            const cancel_2: string;
            export { cancel_2 as cancel };
            const totals_2: string;
            export { totals_2 as totals };
            const vs_2: string;
            export { vs_2 as vs };
            const by_2: string;
            export { by_2 as by };
            const of_2: string;
            export { of_2 as of };
            const all_2: string;
            export { all_2 as all };
            const resetfilters_2: string;
            export { resetfilters_2 as resetfilters };
            const only_2: string;
            export { only_2 as only };
        }
        export { localeStrings_2 as localeStrings };
    }
}
export function naturalSort(as?: any, bs?: any, nulls_first?: boolean): number;
export function numberFormat(opts_in: any): (x: any) => string;
export function getSort(sorters: any, attr: any): any;
export function sortAs(order: any): (a?: any, b?: any, nulls_first?: boolean) => number;
export class PivotData {
    constructor(inputProps?: {});
    props: {
        aggregators: {
            Count: () => () => {
                count: number;
                push(): void;
                value(): number;
                format: (x: any) => string;
            };
            'Count Unique Values': any;
            'List Unique Values': any;
            Sum: ([attr]: [any]) => () => {
                sum: number;
                push(record: any): void;
                value(): number;
                format: (x: any) => string;
                numInputs: number;
            };
            'Integer Sum': ([attr]: [any]) => () => {
                sum: number;
                push(record: any): void;
                value(): number;
                format: (x: any) => string;
                numInputs: number;
            };
            Average: any;
            Median: any;
            'Sample Variance': any;
            'Sample Standard Deviation': any;
            Minimum: any;
            Maximum: any;
            First: any;
            Last: any;
            'Sum over Sum': ([num, denom]: [any, any]) => () => {
                sumNum: number;
                sumDenom: number;
                push(record: any): void;
                value(): number;
                format: (x: any) => string;
                numInputs: number;
            };
            'Sum as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
            'Sum as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
            'Sum as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
            'Count as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
            'Count as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
            'Count as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any) => {
                selector: any;
                inner: any;
                push(record: any): void;
                format: (x: any) => string;
                value(): number;
                numInputs: any;
            };
        };
        cols: any[];
        rows: any[];
        vals: any[];
        aggregatorName: string;
        sorters: {};
        valueFilter: {};
        rowOrder: string;
        colOrder: string;
        derivedAttributes: {};
        grouping: boolean;
        rowGroupBefore: boolean;
        colGroupBefore: boolean;
        lang: string;
    };
    aggregator: any;
    tree: {};
    rowKeys: any[];
    colKeys: any[];
    rowTotals: {};
    colTotals: {};
    allTotal: any;
    sorted: boolean;
    filter(record: any): boolean;
    forEachMatchingRecord(criteria: any, callback: any): any;
    arrSort(attrs: any, nulls_first: any): (a: any, b: any) => any;
    sortKeys(): void;
    getColKeys(all_keys?: boolean): any[];
    getRowKeys(all_keys?: boolean): any[];
    processRecord(record: any): void;
    getAggregator(rowKey: any, colKey: any): any;
    getLocaleStrings(): any;
}
export namespace PivotData {
    function forEachRecord(input: any, derivedAttributes: any, f: any): any;
    namespace defaultProps {
        export { aggregatorsEN as aggregators };
        export const cols: any[];
        export const rows: any[];
        export const vals: any[];
        export const aggregatorName: string;
        export const sorters: {};
        export const valueFilter: {};
        export const rowOrder: string;
        export const colOrder: string;
        export const derivedAttributes: {};
        export const grouping: boolean;
        export const rowGroupBefore: boolean;
        export const colGroupBefore: boolean;
        export const lang: string;
    }
}
