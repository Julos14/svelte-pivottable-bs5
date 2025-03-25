<script>
    import Draggable from "./Draggable.svelte";
    import FilterBox from "./FilterBox.svelte";
    import { is_empty } from "svelte/internal";

    export let valueFilter;
    export let name;
    export let attrValues;
    export let menuLimit;
    export let updateValuesInFilter;
    export let locales;

    let open = false;

    const toggleOpen = () => (open = !open);
</script>

<!-- <li data-id={name}>
    <span class={`pvtAttr ${is_empty(valueFilter) ? "" : "pvtFilteredAttribute"}`}>
        {name}
        <span class="pvtTriangle" on:click={toggleOpen} on:keypress={toggleOpen}>
            {" "}
            ▾
        </span>
    </span>

    {#if open}
        <Draggable handle=".pvtDragHandle" close=".pvtCloseX" on:click={toggleOpen} on:close={toggleOpen}>
            <FilterBox
                {name}
                {valueFilter}
                values={attrValues}
                {menuLimit}
                locales={locales}
                on:change={(ev) => updateValuesInFilter(name, ev.detail)}
            />
        </Draggable>
    {/if}
</li> -->

<li data-id={name}>
    <div class="dropdown">
        <button class={`btn btn-sm dropdown-toggle ${is_empty(valueFilter) ? "btn-outline-secondary" : "btn-secondary"}`} type="button" id="dropdownMenuFilter" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {name}
        </button>
        <div class="dropdown-menu" style="width: 500px !important" aria-labelledby="dropdownMenuFilter">
            <FilterBox
                {name}
                {valueFilter}
                values={attrValues}
                {menuLimit}
                locales={locales}
                on:change={(ev) => updateValuesInFilter(name, ev.detail)}
            />
        </div>
    </div>
</li>