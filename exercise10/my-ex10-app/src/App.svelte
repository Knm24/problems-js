<script>
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';

  import CardForm from './lib/CardForm.svelte';

  import Thanks from './lib/Thanks.svelte';
</script>

<main>
  <div class="card">
    <CardForm />
  </div>

  <div class="thank_you">
    <Thanks />
  </div>
</main>
