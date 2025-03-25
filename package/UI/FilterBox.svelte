<script context="module">
    let zIndexGlobal = 1000;
</script>

<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let name;
    export let values;
    export let valueFilter = {};
    export let menuLimit = 500;
    export let locales;

    let selectAll = true;
    
    let filterText = "";

    let shown;
    $: filterText, (shown = values.filter(matchesFilter));

    function toggleValue(value) {
        value in valueFilter ? removeValuesFromFilter([value]) : addValuesToFilter([value]);
        dispatch("change", valueFilter);
    }

    function setValuesInFilter(values) {
        Object.keys(valueFilter).forEach((key) => delete valueFilter[key]);
        addValuesToFilter(values);
        // values.forEach((v) => (valueFilter[v] = true));
    }

    function addValuesToFilter(values) {
        values.forEach((v) => (valueFilter[v] = true));
    }

    function removeValuesFromFilter(values) {
        values.forEach((v) => delete valueFilter[v]);
    }

    function matchesFilter(x) {
        return x.toLowerCase().trim().includes(filterText.toLowerCase().trim());
    }

    function selectOnly(value) {
        setValuesInFilter(values.filter((y) => y !== value));
        dispatch("change", valueFilter);
    }

    function select(all) {
        const func = all ? removeValuesFromFilter : addValuesToFilter;
        return function () {
            func(values.filter(matchesFilter));
            dispatch("change", valueFilter);
        };
    }
    function init(node) {
        node.style.zIndex = "" + zIndexGlobal++;
    }
</script>

<!-- <div
    class="pvtFilterBox"
    style:display="block"
    style:cursor="initial"
    use:init
>
    <span class="pvtCloseX"> × </span>
    <span class="pvtDragHandle">☰</span>
    <h4>{name}</h4>

    {#if values.length < menuLimit}
        <p>
            <input type="text" placeholder="{locales['filterResults']}" class="pvtSearch" bind:value={filterText} />
            <br />
            <button class="btn btn-sm btn-secondary" on:click|stopPropagation={select(true)}>
                {locales['select']} {values.length === shown.length ? locales['all'] : shown.length}
            </button>{" "}
            <button class="btn btn-sm btn-secondary mt-1" on:click|stopPropagation={select(false)}>
                {locales['deselect']} {values.length === shown.length ? locales['all'] : shown.length}
            </button>
        </p>

        <div class="pvtCheckContainer">
            {#each shown as x (x)}
                <p on:click={() => toggleValue(x)} on:keypress class={x in valueFilter ? "" : "selected"}>
                    <a class="pvtOnly" on:click|stopPropagation={() => selectOnly(x)}> {locales['only']} </a>
                    <span class="pvtOnlySpacer">&nbsp;</span>

                    {#if x === ""}<em>null</em>{:else}{x}{/if}
                </p>
            {/each}
        </div>
    {:else}
        <p>{locales['tooMany']}</p>
    {/if}
</div> -->

<h4 class="dropdown-header">{name}</h4>
{#if values.length < menuLimit}
<form class="px-4 py-3">
    <div class="mb-3">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control form-control-sm" id="searchString" bind:value={filterText} placeholder={locales['filterResults']}>
            <div class="input-group-append">
                <button class="btn btn-sm btn-outline-secondary" 
                on:click|stopPropagation={select(true)} type="button"
                data-toggle="tooltip" data-placement="top" title="{locales['select']} {values.length === shown.length ? locales['all'] : shown.length}"><i class="fa-regular fa-square-check"></i></button>
                <button class="btn btn-sm btn-outline-secondary" 
                on:click|stopPropagation={select(false)} type="button"
                data-toggle="tooltip" data-placement="top" title="{locales['deselect']} {values.length === shown.length ? locales['all'] : shown.length}"><i class="fa-regular fa-square"></i></button>
            </div>
        </div>
    </div>
    <!-- <div class="mb-3">
        <button class="btn btn-sm btn-secondary" type="button"
        on:click|stopPropagation={select(true)}>{locales['select']} {values.length === shown.length ? locales['all'] : shown.length}</button>
    </div>
    <div class="mb-3">
        <button class="btn btn-sm btn-secondary" type="button"
        on:click|stopPropagation={select(false)}>{locales['deselect']} {values.length === shown.length ? locales['all'] : shown.length}</button>
    </div> -->
</form>
<div class="dropdown-divider"></div>
{#each shown as x (x)}
<div class="form-check m-1">
    <input class="form-check-input" type="checkbox" 
    id="flexCheckDefault" checked={x in valueFilter ? false : true}
    on:click|stopPropagation={() => selectOnly(x)}>
    <label class="form-check-label" for="flexCheckDefault">
        {#if x === ""}<em>null</em>{:else}{x}{/if}
    </label>
</div>
<!-- <p on:click={() => toggleValue(x)} on:keypress class={x in valueFilter ? "" : "selected"}>    
    <a class="dropdown-item" on:click|stopPropagation={() => selectOnly(x)}> {locales['only']} </a>
    <span class="pvtOnlySpacer">&nbsp;</span>

    {#if x === ""}<em>null</em>{:else}{x}{/if}
</p> -->
{/each}
{:else}
<p>{locales['tooMany']}</p>
{/if}
