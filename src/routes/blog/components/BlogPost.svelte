<script lang="ts">
	import Arrow from '~icons/custom/arrow';

	export let post: PalyzambranoDotCom.BlogPost;

	let date = new Date(post.date);
</script>
<a href="/blog/{post.slug}">
	<article
		class="m-4 flex flex-col w-[380px] h-[380px] text-center bg-rosita text-rojito justify-between"
	>
		<span class="text-sm mt-6">{date.getMonth()} {date.getFullYear()}</span>
		<h3 class="text-4xl w-[340px] m-auto font-extralight">
			{post.title}
		</h3>
		<div class="flex justify-center mb-16 ">
			<p class="text-lg font-extralight"> ver más</p>
			<Arrow class="w-12 ml-4 fill-rojito"/>
		</div>
	</article>
</a>
