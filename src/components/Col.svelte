
<script lang="ts">
	import { pageData } from "../pageSchema";
    import Column from "./Row.svelte";

    let pageSchema : Array<any> 
        
    pageData.subscribe(pageData => {
        pageSchema = pageData.schema;
    })   
</script>

<style>
    .col{
        border-style: solid;
        border-width: 5px;
        border-color: red;
    }
</style>

<div class="col">
    {#each pageSchema as _, i }
        <Column rowNumber={i}/>
    {/each}
</div>