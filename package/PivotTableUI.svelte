<script>
    import Aggregators from './UI/Aggregators.svelte';
    import DnDCell from './UI/DnDCell.svelte';
    import Dropdown from './UI/Dropdown.svelte';
    import MainTable from './UI/MainTable.svelte';
    import PivotTable from './PivotTable.svelte';
    import TableRenderers from './TableRenderers';
    import { PivotData, sortAs, aggregatorsEN as defaultAggregators, locales } from './Utilities';
    import ButtonInput from './UI/ButtonInput.svelte';

    export let rendererName = 'Table',
        renderers = TableRenderers,
        aggregatorName = 'Count',
        aggregators = defaultAggregators,
        hiddenAttributes = [],
        hiddenFromAggregators = [],
        hiddenFromDragDrop = [],
        unusedOrientationCutoff = 85,
        menuLimit = 500;

    // pivotData props managed by PivotTableUI
    export let { derivedAttributes, cols, rows, vals, sorters, valueFilter } = PivotData.defaultProps;

    export let lang = 'en';

    export let data;

    aggregators = locales[lang]?.aggregators;

    let unusedOrder = [],
        attrValues = {};

    $: {
        attrValues = {};

        let recordsProcessed = 0;

        PivotData.forEachRecord(data, derivedAttributes, function (record) {
            for (const attr of Object.keys(record)) {
                if (!(attr in attrValues)) {
                    attrValues[attr] = {};
                    if (recordsProcessed > 0) {
                        attrValues[attr].null = recordsProcessed;
                    }
                }
            }
            for (const attr in attrValues) {
                const value = attr in record ? record[attr] : 'null';
                if (!(value in attrValues[attr])) {
                    attrValues[attr][value] = 0;
                }
                attrValues[attr][value]++;
            }
            recordsProcessed++;
        });
    }

    function notHidden(e) {
        return !hiddenAttributes.includes(e) && !hiddenFromDragDrop.includes(e);
    }

    let colAttrs, rowAttrs;
    $: colAttrs = cols.filter(notHidden);
    $: rowAttrs = rows.filter(notHidden);

    let unusedAttrs, horizUnused, valAttrs;
    $: {
        unusedAttrs = Object.keys(attrValues)
            .filter((e) => !colAttrs.includes(e) && !rowAttrs.includes(e) && notHidden(e))
            .sort(sortAs(unusedOrder));

        const unusedLength = unusedAttrs.reduce((r, e) => r + e.length, 0);
        horizUnused = unusedLength < unusedOrientationCutoff;

        valAttrs = Object.keys(attrValues).filter(
            (e) => !hiddenAttributes.includes(e) && !hiddenFromAggregators.includes(e)
        );
    }

    let renderer;
    $: {
        rendererName = rendererName in renderers ? rendererName : Object.keys(renderers)[0];
        renderer = renderers[rendererName];
    }
    let aggregator;
    $: {
        aggregatorName = aggregatorName in aggregators ? aggregatorName : Object.keys(aggregators)[0];
        aggregator = aggregators[aggregatorName];
    }
</script>

<MainTable {horizUnused}>

    <ButtonInput 
    slot="btnResetFilters" 
    {valueFilter}
    locales={locales[lang]?.localeStrings}
    onUpdate={(v) => (valueFilter = v)} />

    <Dropdown slot="rendererCell" bind:current={rendererName} values={Object.keys(renderers)} />

    <Aggregators
        slot="aggregatorCell"
        {aggregatorName}
        {aggregators}
        {valAttrs}
        onChange={(v) => (aggregatorName = v)}
        onUpdate={(v) => (vals = v)}
        {vals}
    />

    <DnDCell
        slot="unusedAttrsCell"
        {sorters}
        {valueFilter}
        {attrValues}
        items={unusedAttrs}
        onChange={(order) => (unusedOrder = order)}
        onUpdate={(v) => (valueFilter = v)}
        {menuLimit}
        locales={locales[lang]?.localeStrings}
    />

    <DnDCell
        slot="colAttrsCell"
        {sorters}
        {valueFilter}
        {attrValues}
        items={colAttrs}
        onChange={(v) => (cols = v)}
        onUpdate={(v) => (valueFilter = v)}
        {menuLimit}
        locales={locales[lang]?.localeStrings}
    />

    <DnDCell
        slot="rowAttrsCell"
        {sorters}
        {valueFilter}
        {attrValues}
        items={rowAttrs}
        onChange={(v) => (rows = v)}
        onUpdate={(v) => (valueFilter = v)}
        {menuLimit}
        locales={locales[lang]?.localeStrings}
    />

    <PivotTable
        slot="outputCell"
        {renderer}
        {...$$restProps}
        {cols}
        {rows}
        {vals}
        {derivedAttributes}
        {aggregator}
        {aggregatorName}
        {aggregators}
        {data}
        {sorters}
        {valueFilter}
        {lang}
    />
</MainTable>
