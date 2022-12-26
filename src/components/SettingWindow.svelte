
<script lang="ts">
    import { page } from "$app/stores";
    import { pageData } from "../pageSchema";

    export let isVisible : boolean = false;

    export let row = 0;
    export let col = 0;

    let schema : Array<any>; 
    
    pageData.subscribe(pageData =>{
        schema = pageData.schema
    })

    function addElement(){
        schema[row].splice(col+1, 0, {name: "new element", id: 123})

        pageData.update(pageData => {
            pageData.schema[row] = schema[row];
            return pageData; 
        });
        
        console.log(schema[row])
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
        <button on:click={() => addElement()}>add element to the row</button>
    </div>
{/if}