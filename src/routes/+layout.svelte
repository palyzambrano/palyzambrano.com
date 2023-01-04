<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
</script>

<div class="bg-bg-white">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
