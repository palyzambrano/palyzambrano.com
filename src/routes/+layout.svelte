<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
  import Button from '$lib/components/Button.svelte';
</script>

<div>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
