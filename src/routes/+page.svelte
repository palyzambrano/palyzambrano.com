<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import InfiniteCarousel, {
    HEIGHT,
    WIDTH
  } from '$lib/components/InfiniteCarousel.svelte';
  import ProjectEntry from './proyectos/components/ProjectEntry.svelte';

  export let data: {
    items: PalyzambranoDotCom.ProjectItem[];
  };

  const BRAND_SLIDES = [
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    },
    {
      src: '/brand_logo/basquiart_logo.png'
    }
  ];

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
<!--Slider Hero-->
<section>
  <figure class="">
    <img class="w-full" src="/img-home/slider-hero.png" alt="" />
  </figure>
</section>

<!--About-->
<section class=" w-screen">
  <div
    class="flex flex-col md:flex-row md:justify-center max-w-screen-xl z-10 mt-20 mx-4 md:ml-16"
  >
    <figure class="md:w-[550px] md:h-[550px] md:ml-[100px]">
      <img alt="foto de paly en la playa" src="/img-home/fotopaly.png" />
    </figure>
    <div class="md:w-1/2 text-left space-y-6 md:mt-[120px] md:ml-16">
      <h2 class="text-2xl">Hola, soy Paly!</h2>
      <p class="w-full md:w-3/4">
        Me alegra que estés aquí, cree este espacio para contarte quien soy y
        que conozcas mi trabajo
      </p>
      <p class="w-full md:w-3/4">
        Explora mi portafolio y descubre como podemos hacer crecer tu
        emprendimiento, estoy aquí para hacer brillar tu presencia en línea.
      </p>
      <Button on:click={() => goto('/proyectos')}>Mira mis proyectos</Button>
    </div>
  </div>
</section>

<!--Marcas-->
<section class="bg-[#FFF5E8] my-8">
  <div>
    <h2 class="text-2xl text-center w-[300px] mx-auto py-8">Confiaron en mí</h2>
  </div>
  <InfiniteCarousel slides={BRAND_SLIDES} let:slide>
    <div class="border border-red-200">
      <img
        alt="logo de basquiart"
        src={slide.src}
        height={HEIGHT}
        width={WIDTH}
      />
    </div>
  </InfiniteCarousel>
</section>

<!--Proyectos Favoritos-->
<section class="max-w-screen-xl mx-auto my-20">
  <h2 class="text-2xl text-center w-[300px] m-auto">
    Algunos de mis proyectos <strong>favoritos</strong>
  </h2>
  <p class=" w-full md:w-[600px] m-auto text-center mt-4">
    La magia del diseño está presente en cada proyecto que emprendo. creemos
    juntos la solución web perfecta para ti.
  </p>
  <div class="flex flex-wrap justify-between">
    {#each data.items as item}
      <ProjectEntry {item} />
    {/each}
  </div>
</section>

<!--Servicios-->
<section
  class="flex flex-col md:flex-row justify-evenly items-center w-full bg-[#F1F0FE] py-16 px-16"
>
  <!--CTA Form-->
  <div class="flex flex-col justify-items-center md:w-1/2">
    <h2 class="text-2xl text-center md:text-left">
      Dale a tu proyecto el valor que se merece
    </h2>
    <p class="my-4 text-center md:text-left">
      Te ayudo a potenciar tu desarrollo en el mundo digital
    </p>
    <Button class="w-max">Necesitas ayuda?</Button>
  </div>
  <!--Ilustraciones-->
  <div
    class="flex flex-col md:flex-row justify-center justify-items-center md:justify-between w-full md:w-1/2 md:items-end"
  >
    <article class="justify-items-centermt-4">
      <figure class=" w-[140px] mt-8 m-auto md:w-[120px]">
        <img
          alt="ilustracion pantalla de diseño"
          src="/img-home/colaboracion.png"
        />
      </figure>
      <h3 class="w-[120px] text-center mx-auto mt-4">
        Creamos en colaboración
      </h3>
    </article>
    <article>
      <figure class=" w-[140px] mt-8 m-auto md:w-[120px]">
        <img
          alt="ilustracion diseño responsivo"
          src="/img-home/responsive.png"
        />
      </figure>
      <h3 class="w-[120px] text-center mx-auto mt-4">Diseño web Responsivo</h3>
    </article>
    <article>
      <figure class=" w-[140px] mt-8 m-auto md:w-[120px]">
        <img
          alt="ilustracion pantalla de diseño"
          src="/img-home/personalizado.png"
        />
      </figure>
      <h3 class="w-[120px] text-center mx-auto mt-4">
        Sin plantillas y a tu medida
      </h3>
    </article>
  </div>
</section>
