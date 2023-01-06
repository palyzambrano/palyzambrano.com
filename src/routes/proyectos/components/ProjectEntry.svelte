<script lang="ts">
	export let item: PalyzambranoDotCom.ProjectItem;

	let date = new Date(item.date);
</script>

<article
	class="m-4 flex flex-col w-[380px] h-[380px] text-center bg-violet text-white justify-between"
>
	<span class="text-sm mt-6">{date.getMonth()} {date.getFullYear()}</span>
	<h3 class="text-4xl w-[340px] m-auto font-extralight">
		{item.title}
	</h3>
	<a class="mb-16" href="/proyectos/{item.slug}"> ver más -> </a>
</article>
