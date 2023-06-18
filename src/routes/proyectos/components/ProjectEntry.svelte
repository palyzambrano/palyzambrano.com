<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	import Button from '$lib/components/Button.svelte';
	import { humanDate } from '$lib/utils/date';
	import Share from '$lib/components/Share.svelte';

	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
	let dateString = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
</script>

<article
	class="bg-[url({item.preview_image_url})] flex flex-col w-[380px] h-[480px] text-left justify-between border border-sky-500 rounded-md" 
>
	<div class="">
		<Share> Env</Share>
		<!-- <a href="/proyectos/{item.slug}">ver más </a> -->
	</div>
	<div class="mt-8">
		<div class=" ml-6  w-4/5">
			<time class=" mt-8" datetime="{dateString} 00:00">
				{humanDate(date)}
			</time>
			<h3 class="text-2xl">
				{item.title}
			</h3>
			<p>{item.description}</p>
		</div>
	</div>
	<div class=" ml-6 mt-6">
		<Button>Paulina</Button>
		<!-- <a href="/proyectos/{item.slug}">ver más </a> -->
	</div>
	<div>
		<figure class="h-[200px] overflow-hidden">
			<img src="{item.preview_image_url}" height="200" alt="">
		</figure>
	</div>
	
</article>
