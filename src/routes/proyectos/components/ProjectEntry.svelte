<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	import { humanDate } from '$lib/utils/date';

	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
	let dateString = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
</script>

<article
	class="bg-[url({item.preview_image_url})] flex flex-col w-[380px] h-[480px] text-left justify-between border border-sky-500 rounded-md" 
>
	<div class="mt-8">
		<div>
			<time class="ml-4 mt-8" datetime="{dateString} 00:00">
				{humanDate(date)}
			</time>
			<h3 class="text-2xl w-[340px] ml-4">
				{item.title}
			</h3>
			<p class="ml-4 w-9/12">{item.description}</p>
		</div>
		<div>
			<a href="/proyectos/{item.slug}">ver más </a>
		</div>
	</div>
	<div>
		<figure class="h-[200px] overflow-hidden">
			<img src="{item.preview_image_url}" height="200" alt="">
		</figure>
	</div>
	
</article>
