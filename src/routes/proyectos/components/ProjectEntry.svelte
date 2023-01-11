<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
</script>

<a href="/proyectos/{item.slug}">
	<article
		class="flex flex-col w-[380px] h-[380px] text-center bg-violet text-white justify-between"
	>
		<span class="text-sm mt-6 font-normal">{date.getMonth()} {date.getFullYear()}</span>
		<h3 class="text-4xl w-[340px] m-auto font-light">
			{item.title}
		</h3>
		<div class="flex justify-center mb-16 ">
			<p class="text-lg font-extralight"> ver más</p>
			<Arrow class="w-12 ml-4 fill-white"/>
		</div>
	</article>
</a>
