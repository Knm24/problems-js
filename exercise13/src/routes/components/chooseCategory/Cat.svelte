<script lang="ts">

	// import Question from '../questions/question.svelte';
    // <Question/>

import { goto } from '$app/navigation';
// ...Your other imports
    


  let curr = '';

  let arr1 = [
        {id:0,value:'HTML'},
        {id:1,value:'CSS'},
        {id:2,value:'JavaScript'},
        {id:3,value:'Accessibility'}
    ];

function incrementCount(val) {
    console.log('redirect' + val);
    goto('/questions/'+ val + '/0');
}


</script>


<section class="quiz_list">

{#each arr1 as item }


    <button class="" on:click={() => incrementCount(item.id)}>
    <span class="">
        <img src="" alt="" />
    </span>

        {item.value}
    
    </button>
{/each}

    

</section>


<style>
	

</style>
