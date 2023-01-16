<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	export let post: PalyzambranoDotCom.BlogPost;

	let date = new Date(post.date);
</script>

<a href="/blog/{post.slug}">
	<article
		class="flex flex-col w-[380px] h-[380px] text-center bg-rosita text-rojito justify-between"
	>
		<span class="text-sm mt-6">{date.getMonth()} {date.getFullYear()}</span>
		<h3 class="text-4xl w-[340px] m-auto font-extralight">
			{post.title}
		</h3>
		<div class="flex justify-center h-10">
			<p class="text-lg font-extralight h-6">ver más</p>
			<Arrow class="w-12 ml-4 fill-rojito h-6 pt-2" />
		</div>
	</article>
</a>
