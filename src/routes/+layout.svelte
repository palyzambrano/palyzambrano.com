<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
  import Button from '$lib/components/Button.svelte';
</script>

<Header/>
<main class="text-gray-600 bg-neutral-50">
  <slot />
</main>
<Footer />
