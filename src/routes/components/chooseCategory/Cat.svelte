<script lang="ts">

	import Question from '../questions/question.svelte';


  let curr = '';

  let arr1 = [
        {id:'first',value:'Accessibility'},
        {id:'second',value:'HTML'},
        {id:'third',value:'CSS'},
        {id:'four',value:'JavaScript'}
    ];

function incrementCount(e) {
    curr = e;
}
</script>


<section class="quiz_list">

{#each arr1 as item }


    <button class="" on:click={() => incrementCount(item.value)}>
    <span class="">
        <img src="" alt="" />
    </span>

        {item.value}
    
    </button>
{/each}

    

</section>

<Question/>

<style>
	

</style>
