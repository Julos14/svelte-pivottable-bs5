<script>
    export let valueFilter, locales, onUpdate;

    const handleResetFilters= () => {
        console.log('handleResetFilters');
        if (Object.keys(valueFilter).length >= 0){
            Object.keys(valueFilter).forEach((v) => delete valueFilter[v]);
            onUpdate(valueFilter);
        }
    }

</script>

<button class="btn btn-sm btn-secondary" on:click={() => handleResetFilters()}>
    {locales.resetfilters}
</button>