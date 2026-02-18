<script lang="ts">
  import { onMount } from 'svelte';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
</script>

<Header />
<main class="text-gray-950 bg-neutral-50 min-h-[calc(100vh-(80px+40px))]">
  <slot />
</main>
<Footer />
