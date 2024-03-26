<script lang="ts">

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  let score = Number($page.params.score);
console.log($page.params);

  function goHome() {
    
      goto(`/`);
    
  }
</script>
<section class="finish">

 <h1>Quiz completed 
	<span class="attention">You scored...</span></h1>
<h2 align="center">{score}</h2>
</section>

<section class="choose">
    <button class="btn_again" on:click={goHome}>

    Play Again</button>



</section>


<style>

</style>