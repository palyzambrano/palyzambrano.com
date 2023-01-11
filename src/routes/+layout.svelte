<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
</script>

<div class="bg-bg-white text-body">
	<Header />
	<main class="max-w-screen-xl mx-auto mt-20">
		<slot />
	</main>
	<Footer />
</div>
