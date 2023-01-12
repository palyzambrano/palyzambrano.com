<script lang="ts">
	import Instagram from '~icons/custom/instagram';
	import Github from '~icons/custom/github';
	import Behance from '~icons/custom/behance';
	import Linkedin from '~icons/custom/linkedin';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<section class="flex flex-col text-center text-violet mt-28 mb-10">
		<h5 class="text-lg font-normal">Gracias por venir</h5>
		<span class="text-base font-extralight">También puedes visitarme por acá</span>
		<div class="flex justify-center space-x-4 my-4 content-center">
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="https://www.behance.net/palyzambrano">
				<Behance class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="https://github.com/palyzambrano">
				<Github class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="https://www.linkedin.com/in/palyzambrano">
				<Linkedin class="m-auto fill-violet" />
			</a>
			<a class="rounded-full border-violet border-2 w-14 h-14 flex" href="https://www.instagram.com/palyzambrano">
				<Instagram class="m-auto fill-violet" />
			</a>
		</div>
	</section>

	<div class="bg-violet text-white p-2">
		<p class="text-sm">{currentYear}</p>
	</div>
</footer>
