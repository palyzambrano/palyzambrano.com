<script lang="ts">
	import Instagram from '~icons/custom/instagram';
	import Github from '~icons/custom/github';
	import Behance from '~icons/custom/behance';
	import Linkedin from '~icons/custom/linkedin';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<section class="flex flex-col text-center text-violet mt-28 mb-10">
		<h5 class="text-lg">Gracias por venir</h5>
		<span class="text-base">También puedes visitarme por acá</span>
		<div class="flex justify-center space-x-4 my-4 content-center">
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="#">
				<Behance class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="#">
				<Github class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="#">
				<Linkedin class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="#">
				<Instagram class="m-auto fill-violet" />
			</a>
		</div>
	</section>

	<div class="bg-violet text-white p-2">
		<p class="text-sm">{currentYear}</p>
	</div>
</footer>
