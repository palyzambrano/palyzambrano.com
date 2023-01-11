<script lang="ts">
	import ProjectEntry from './components/ProjectEntry.svelte';

	export let data: {
		items: PalyzambranoDotCom.ProjectItem[];
	};

	let title = 'Paly Zambrano | Proyectos';
	let description = '';
	let avatarUrl = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={avatarUrl} />
	<!-- Open Graph data -->
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://palyzambrano.com/" />
	<meta property="og:image" content={avatarUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Paly Zambrano" />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@PalyZambrano" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@PalyZambrano" />
	<meta name="twitter:image:src" content={avatarUrl} />
</svelte:head>

<h2 class="text-4xl text-tx-blue mb-12">Proyectos</h2>
<section class="flex flex-wrap justify-between">
	{#each data.items as item}
		<ProjectEntry {item} />
	{/each}
</section>
