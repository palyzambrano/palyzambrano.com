<script lang="ts">
	import Instagrman from '~icons/custom/instagram';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<section class="flex flex-col text-center text-violet mt-28 mb-10">
		<h5 class="text-lg">Gracias por venir</h5>
		<span class="text-base">También puedes visitarme por acá</span>
		<div class="flex justify-center space-x-4 my-4">
			<a class="rounded-full border-violet border-2 w-12 h-12 flex" href="">
				<Instagrman class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-12 h-12 flex" href="">
				<Instagrman class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-12 h-12 flex" href="">
				<Instagrman class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-12 h-12 flex" href="">
				<Instagrman class="m-auto fill-violet" />
			</a>
		</div>
	</section>

	<div class="bg-violet text-white p-2">
		<p class="text-sm">{currentYear}</p>
	</div>
</footer>
