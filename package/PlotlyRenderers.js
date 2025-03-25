import PlotlyComponent from './PlotlyRenderer.svelte';
import ScatterRenerer from './ScatterRenderer.svelte';
import { initPlotly } from './UI/Plotly.svelte';
import { partial } from './UI/utils';

function makeRenderer(Component, traceOptions = {}, layoutOptions = {}, transpose = false) {
    return partial(Component, { traceOptions, layoutOptions, transpose });
}

export default function (Plotly, Lang = 'en') {
    initPlotly(Plotly);

    const locales = {
        en: {
            'Grouped Column Chart': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'group' }),
            'Stacked Column Chart': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'relative' }),
            'Grouped Bar Chart': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'group' },
                true
            ),
            'Stacked Bar Chart': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'relative' },
                true
            ),
            'Line Chart': makeRenderer(PlotlyComponent),
            'Dot Chart': makeRenderer(PlotlyComponent, { mode: 'markers' }, {}, true),
            'Area Chart': makeRenderer(PlotlyComponent, { stackgroup: 1 }),
            'Scatter Chart': ScatterRenerer,
            'Multiple Pie Chart': makeRenderer(
                PlotlyComponent,
                { type: 'pie', scalegroup: 1, hoverinfo: 'label+value', textinfo: 'none' },
                {},
                true
            ),
        },
        gb: {
            'Grouped Column Chart': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'group' }),
            'Stacked Column Chart': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'relative' }),
            'Grouped Bar Chart': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'group' },
                true
            ),
            'Stacked Bar Chart': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'relative' },
                true
            ),
            'Line Chart': makeRenderer(PlotlyComponent),
            'Dot Chart': makeRenderer(PlotlyComponent, { mode: 'markers' }, {}, true),
            'Area Chart': makeRenderer(PlotlyComponent, { stackgroup: 1 }),
            'Scatter Chart': ScatterRenerer,
            'Multiple Pie Chart': makeRenderer(
                PlotlyComponent,
                { type: 'pie', scalegroup: 1, hoverinfo: 'label+value', textinfo: 'none' },
                {},
                true
            ),
        },
        fr: {
            'Graphique à colonnes groupées': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'group' }),
            'Graphique à colonnes empilées': makeRenderer(PlotlyComponent, { type: 'bar' }, { barmode: 'relative' }),
            'Diagramme à barres groupées': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'group' },
                true
            ),
            'Diagramme à barres empilées': makeRenderer(
                PlotlyComponent,
                { type: 'bar', orientation: 'h' },
                { barmode: 'relative' },
                true
            ),
            'Graphique linéaire': makeRenderer(PlotlyComponent),
            'Diagramme à points': makeRenderer(PlotlyComponent, { mode: 'markers' }, {}, true),
            'Graphique de surface': makeRenderer(PlotlyComponent, { stackgroup: 1 }),
            'Diagramme de dispersion': ScatterRenerer,
            'Diagramme en camembert multiple': makeRenderer(
                PlotlyComponent,
                { type: 'pie', scalegroup: 1, hoverinfo: 'label+value', textinfo: 'none' },
                {},
                true
            ),
        }
    }

    return locales[Lang];
}
