<script lang="ts">
	let title = 'Paly Zambrano';
	let description = '';
	let avatarUrl = 'https://avatars.githubusercontent.com/u/29868332?v=4';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={avatarUrl} />
	<!-- Open Graph data -->
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://palyzambrano.com/" />
	<meta property="og:image" content={avatarUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Paly Zambrano" />
	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@PalyZambrano" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@PalyZambrano" />
	<meta name="twitter:image:src" content={avatarUrl} />
</svelte:head>


<section
  id="video-promocional"
  class="w-screen"
	>
	<div class="absolute flex justify-center max-w-screen-xl z-10 mt-20 ml-16">
		<figure class="w-[550px] h-[550px] overflow-hidden ml-[100px]">
			<img alt="Ilustracion Paly" src="/me.gif" />
		</figure>
		<div class="w-1/2 text-center space-y-6 text-tx-blue md:mt-[120px]">
			<h2 class="text-2xl ">Hola, soy Paly!</h2>
			<p class="w-2/4 m-auto font-extralight">
				Me alegra que estés aquí, cree este espacio para contarte quien soy y que conozcas mi trabajo.
			</p>
			<a class=" text-white inline-block bg-violet px-8 py-2 rounded-full" href="/proyectos"
				>Mira mis proyectos</a
			>
		</div>
	</div>
  	<video
		loop
		autoplay
		muted
		playsinline
		class="relative w-full -top-20"
	>
    <source src="/videos/lila-ondas.mp4" />
  </video>
</section>

