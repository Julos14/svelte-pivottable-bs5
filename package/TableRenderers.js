import TsvExportRenderer from './TSVExportRenderer.svelte';
import TableRenderer from './TableRenderer.svelte';
import { partial } from './UI/utils';

export default function (Lang = 'en') {

    const locales = {
        en: {
            Table: TableRenderer,
            'Table Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'full' } }),
            'Table Col Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'col' } }),
            'Table Row Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'row' } }),
            TsvExport: TsvExportRenderer,
        },
        gb: {
            Table: TableRenderer,
            'Table Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'full' } }),
            'Table Col Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'col' } }),
            'Table Row Heatmap': partial(TableRenderer, { opts: { heatmapMode: 'row' } }),
            TsvExport: TsvExportRenderer,
        },
        fr: {
            'Tableau': TableRenderer,
            'Tableau de chaleur': partial(TableRenderer, { opts: { heatmapMode: 'full' } }),
            'Tableau de chaleur en colonne': partial(TableRenderer, { opts: { heatmapMode: 'col' } }),
            'Tableau de chaleur en ligne': partial(TableRenderer, { opts: { heatmapMode: 'row' } }),
            TsvExport: TsvExportRenderer,
        }
    }

    return locales[Lang];
};
