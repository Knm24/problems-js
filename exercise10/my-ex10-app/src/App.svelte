<script>
  import CardForm from './lib/CardForm.svelte';

  import Thanks from './lib/Thanks.svelte';
  let showThankYou = false;

  const handleThankYou = () => {
    showThankYou = true;
  };
</script>

<main>
  {#if showThankYou}
    <div class="thank_you">
      <Thanks />
    </div>
  {:else}
    <div class="card">
      <CardForm myCallThanks={handleThankYou} />
    </div>
  {/if}
</main>
