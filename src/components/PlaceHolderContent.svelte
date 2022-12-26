<script lang="ts">
    export let iterator : number = 0;
    
    type placeholder = {
        name: string,
        id: number
    }

    export let elementData : placeholder;
</script>

<style>
    .element-contnent:hover{
        border-style: solid;
    }
</style>

<div class="element-contnent">
    my name is {elementData.name}
    
    and my ID is {elementData.id}
    number {iterator}
</div>