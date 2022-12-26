<script lang="ts">
    import { pageData } from "../pageSchema";
    import SettingWindow from "./SettingWindow.svelte";
    import PlaceHolderContent from "./PlaceHolderContent.svelte";
    import Col from "./Col.svelte";

    export let rowNumber : number; 

    let columnsInRow : Array<any>; 
    
    pageData.subscribe(pageData => {
        columnsInRow = pageData.schema[rowNumber];

    });
    //console.log("columnsInRow:", pageData);
    

    let isVisible : Array<boolean> = init();

    function init(): Array<boolean>{
        let table : Array<boolean> = [];
        columnsInRow.forEach(() => table.push(false));
        return table;    
    }

    function setVisibleTure(rowElement: number){
        isVisible[rowElement] = true;
        isVisible = isVisible;
        
    }

    function setVisibleFasle(rowElement: number){
        isVisible[rowElement] = false;
        isVisible = isVisible;
        
    }

</script>
    
<style>

    .row-element{
        position: relative;
        border-width: 5px;
        width: 100%;
    }
    
    .row{
        display: flex;

    }
</style>

<div class="row">
    {#each columnsInRow as columnData, i} 
        
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div class="row-element" on:mouseover={() => setVisibleTure(i)} on:mouseleave={() => setVisibleFasle(i)}>
            <PlaceHolderContent iterator={i} elementData={columnData}/>
            <div>{columnData.name}</div>
            <SettingWindow isVisible={isVisible[i]} col={i} row={rowNumber}/>
        </div>
    {/each}
</div>