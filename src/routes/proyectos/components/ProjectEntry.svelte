<script lang="ts">
	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
</script>

<a href="/proyectos/{item.slug}">
	<article
		class="flex flex-col w-[380px] h-[380px] text-center bg-violet text-white justify-between"
	>
		<span class="text-sm mt-6">{date.getMonth()} {date.getFullYear()}</span>
		<h3 class="text-4xl w-[340px] m-auto font-extralight">
			{item.title}
		</h3>
		<span class="mb-16"> ver más -> </span>
	</article>
</a>
