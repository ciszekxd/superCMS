
<script lang="ts">
    import { pageData } from "../pageSchema";

    export let isVisible : boolean = false;
    export let row : number = 0;
    export let col : number = 0;

    let schema : Array<any>; 
    
    pageData.subscribe(pageData =>{
        schema = pageData.schema
    })

    function addRowElement(){
        schema[row].splice(col+1, 0, {name: "new element", id: 123});

        pageData.update(pageData => {
            pageData.schema[row] = schema[row];
            return pageData; 
        });
        
        console.log(schema[row])
    }

    function addRow(){
        pageData.update(pageData => {
            pageData.schema.splice(row+1, 0, [{name: "new row", id: 456}]);
            return pageData;
        });
    }
</script>

<style>
    .settings{
        width: 100px;
        height: 100px;

        z-index: 100;
        background-color: blue;
        position: absolute;
        right: 0%;
        top: -10%;
    }
</style>

{#if isVisible}
    <div class="settings">
        <button on:click={() => addRowElement()}>add element to the row</button>
        <button on:click={() => addRow()}>add new row</button>
    </div>
{/if}