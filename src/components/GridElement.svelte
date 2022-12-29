

<script lang="ts">
	import { pageData, lastEnteredCol, lastEnteredRow } from '../pageSchema';

    import PlaceHolderContent from "./PlaceHolderContent.svelte";
    import SettingWindow from "./SettingWindow.svelte";

    export let col: number = 0;
    export let row: number = 0;
    export let isVisible: boolean = false;
    export let elementData : any;

    function onDragStart(){
        console.log("drag started: " + col + " row: " + row);

    }

    function onDragEnter(){
        console.log("drag entered: " + col + " row: " + row);

        lastEnteredCol.update(update => 
            {
                update = col;
                return update;
            }
        );

        lastEnteredRow.update(update => 
            {
                update = row;
                return update;
            }
        );
    }

    function onDragEnd(){
        let toChangeRow : number = 0;
        lastEnteredRow.subscribe(value => {toChangeRow = value});
        
        let toChangeCol : number = 0;
        lastEnteredCol.subscribe(value => {toChangeCol = value})

        console.log("init col: " + col + " init row: " + row);
        console.log("finish col: " + toChangeCol + " finish row: " + toChangeRow);


        if(toChangeRow === row && toChangeCol === col){
            return;
        }

        pageData.update((prevPageData) => {
            let currentSchema = prevPageData.schema;

            let partToMove = currentSchema[row][col];

            currentSchema[row][col] = currentSchema[toChangeRow][toChangeCol];

            currentSchema[toChangeRow][toChangeCol] = partToMove;

            prevPageData.schema = currentSchema;

            return prevPageData;
        });
    }

</script>

<style>
    .row-element{
        position: relative;
        border-width: 5px;
        width: 100%;
    }
</style>

<div
    class="row-element"
    draggable="true"
    on:dragstart={() => {onDragStart()}} 
    on:dragenter={() => {onDragEnter()}}
    on:dragend={() => {onDragEnd()}}
    on:mouseenter={() => {isVisible = true}}
    on:mouseleave={() => {isVisible = false}}>

    <PlaceHolderContent iterator={col} elementData={elementData}/>
    <SettingWindow isVisible={isVisible} col={col} row={row}/>

</div>
