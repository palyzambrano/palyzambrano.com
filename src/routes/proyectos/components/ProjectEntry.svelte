<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	import { humanDate } from '$lib/utils/date';

	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
	let dateString = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
</script>

<article
	class="flex flex-col w-[380px] h-[480px] text-center justify-between border border-sky-500 rounded-md"
>
	<div>
		<div>
			<h3 class="text-4xl w-[340px] m-auto">
				{item.title}
			</h3>
			<time datetime="{dateString} 00:00">
				{humanDate(date)}
			</time>
		</div>
	</div>
	<div>
		<p>{item.description}</p>
		<figure class="h-[200px] overflow-hidden">
			<img src="{item.preview_image_url}" height="200" alt="">
		</figure>
	</div>
	<div>
		<a href="/proyectos/{item.slug}">Algo</a>
	</div>
</article>
