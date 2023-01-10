<script lang="ts">
	import Instagrman from '~icons/custom/instagram';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<section class="flex flex-col text-center text-violet mt-[100px]">
		<h5 class="text-lg">Gracias por venir</h5>
		<span class="text-base">También puedes visitarme por acá</span>
		<div class="flex justify-center space-x-4">
			<Instagrman/>
			<img src="https://via.placeholder.com/50" alt="">
			<img src="https://via.placeholder.com/50" alt="">
			<img src="https://via.placeholder.com/50" alt="">
		</div>
	</section>

	<div class="bg-violet text-white">
		{currentYear}
	</div>
</footer>
