<script lang="ts">
    import { pageData } from "../pageSchema";
    import GridElement from "./GridElement.svelte";

    export let rowNumber : number; 

    let columnsInRow : Array<any>; 

    let col : number = 0;
    
    pageData.subscribe(pageData => {
        columnsInRow = pageData.schema[rowNumber];

    });

    let isVisible : Array<boolean> = init();

    function init(): Array<boolean>{
        let table : Array<boolean> = [];
        columnsInRow.forEach(() => table.push(false));
        return table;    
    }

    function dragEnter(){
        console.log("entered: col: " + col + ", row: " + rowNumber );
    }

</script>
    
<style>

    
    .row{
        display: flex;

    }
</style>

<div class="row">
    {#each columnsInRow as columnData, i} 
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <GridElement col={i} row={rowNumber} elementData={columnData}/>
    {/each}
</div>