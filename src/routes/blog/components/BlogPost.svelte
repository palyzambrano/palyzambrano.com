<script lang="ts">
	export let post: PalyzambranoDotCom.BlogPost;

	let date = new Date(post.date);
</script>

<article
	class="m-4 flex flex-col w-[380px] h-[380px] text-center bg-rosita text-rojito justify-between"
>
	<span class="text-sm mt-6">{date.getMonth()} {date.getFullYear()}</span>
	<h3 class="text-4xl w-[340px] m-auto font-extralight">
		{post.title}
	</h3>
	<a class="mb-16" href="/blog/{post.slug}"> ver más -> </a>
</article>
