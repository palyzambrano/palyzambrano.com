<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import InfiniteCarousel, {
    HEIGHT,
    WIDTH
  } from '$lib/components/InfiniteCarousel.svelte';
  import ProjectEntry from './proyectos/components/ProjectEntry.svelte';
  import LinkContact from '$lib/components/LinkContact.svelte';

  export let data: {
    items: PalyzambranoDotCom.ProjectItem[];
  };

  const BRAND_SLIDES = [
    {
      src: '/img-home/home-bemarka.png'
    },
    {
      src: '/img-home/home-lebon.png'
    },
    {
      src: '/img-home/home-gym.png'
    },
    {
      src: '/img-home/home-koffee.png'
    },
    {
      src: '/img-home/home-rust.png'
    },
    {
      src: '/img-home/home-bemarka.png'
    },
    {
      src: '/img-home/home-lebon.png'
    },
    {
      src: '/img-home/home-gym.png'
    },
    {
      src: '/img-home/home-koffee.png'
    },
    {
      src: '/img-home/home-rust.png'
    },
    {
      src: '/img-home/home-bemarka.png'
    },
    {
      src: '/img-home/home-lebon.png'
    },
    {
      src: '/img-home/home-gym.png'
    },
    {
      src: '/img-home/home-koffee.png'
    },
    {
      src: '/img-home/home-rust.png'
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
<section class="w-screen">
  <div
    class="max-w-screen-xl mx-auto flex md:flex-row flex-col-reverse justify-center items-center my-20 w-full"
  >
    <div class="md:w-4/6 mx-4 justify-items-center">
      <h3 class="text-xl uppercase mt-10 text-center md:text-left">
        Destaca entre la multitud
      </h3>
      <h1
        class="text-3xl md:text-5xl uppercase font-medium mb-8 text-center md:text-left"
      >
        Te ayudo a transformar tus ideas y llevarlas al mundo digital
      </h1>
      <div class="flex justify-center md:justify-start">
        <Button on:click={() => goto('/servicios')}>Contáctame</Button>
      </div>
    </div>
    <figure class="mt-10">
      <img class="w-4/5 md:w-2/7 m-auto" src="/img-home/hero.png" alt="" />
    </figure>
  </div>
</section>

<!--barra naranja-->
<section
  class="bg-[#FDDCAF] h-10 flex justify-center items-center my-30 border-b-2 border-t-2 border-black overflow-hidden -rotate-2"
>
  <h5 class="text-xl px-8 uppercase font-semibold">bienvenido a mi universo</h5>
  <h5 class="text-xl px-8 uppercase font-semibold hidden md:inline-block">
    bienvenido a mi universo
  </h5>
  <h5 class="text-xl px-8 uppercase font-semibold hidden md:inline-block">
    bienvenido a mi universo
  </h5>
  <h5 class="text-xl px-8 uppercase font-semibold hidden md:inline-block">
    bienvenido a mi universo
  </h5>
  <h5 class="text-xl px-8 uppercase font-semibold hidden md:inline-block">
    bienvenido a mi universo
  </h5>
</section>

<!--About-->
<section class="w-screen">
  <div
    class="flex flex-col md:flex-row md:justify-center max-w-screen-xl z-10 mt-20 mx-4 md:ml-16"
  >
    <figure class="md:w-1/2 md:ml-[100px]">
      <img
        class="w-4/5 mx-auto mb-10"
        alt="foto de paly en la playa"
        src="/img-home/fotopaly.png"
      />
    </figure>
    <div class="md:w-1/2 text-left space-y-6 md:mt-[80px] ml-4 md:ml-16">
      <h2 class="text-3xl md:text-4xl font-semibold uppercase">
        Hola, soy Paly!
      </h2>
      <p class="w-full md:w-3/4 text-xl">
        Me alegra que estés aquí, cree este espacio para contarte quien soy y
        que conozcas mi trabajo
      </p>
      <p class="w-full md:w-3/4 text-xl">
        Explora mi portafolio y descubre como podemos hacer crecer tu
        emprendimiento, estoy aquí para hacer brillar tu presencia en línea.
      </p>
      <Button on:click={() => goto('/proyectos')}>Mira mis proyectos</Button>
    </div>
  </div>
</section>

<!--Marcas-->
<section class="bg-[#FFF5E8] my-12">
  <div>
    <h2
      class="text-3xl font-semibold uppercase text-center w-[300px] mx-auto py-8"
    >
      Confiaron en mí
    </h2>
  </div>
  <InfiniteCarousel slides={BRAND_SLIDES} let:slide>
    <div>
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
  <h2
    class="text-3xl md:text-4xl font-normal uppercase text-center w-[280px] md:w-[350px] m-auto"
  >
    Algunos de mis proyectos <strong>favoritos</strong>
  </h2>
  <p class="md:w-[600px] w-10/12 m-6 md:mx-auto text-xl text-center my-8">
    La magia del diseño está presente en cada proyecto que emprendo. creemos
    juntos la solución web perfecta para ti.
  </p>
  <div class="flex flex-wrap justify-center md:justify-evenly">
    {#each data.items as item}
      <ProjectEntry {item} />
    {/each}
  </div>
</section>

<!--Servicios-->
<section
  class="flex flex-col md:flex-row justify-evenly items-center w-full bg-[#F1F0FE] py-20 px-8 md:px-28"
>
  <!--CTA Form-->
  <div class="flex flex-col justify-items-center md:w-1/2 mx-auto">
    <h2
      class="text-3xl md:text-4xl font-semibold uppercase w-full md:w-3/4 text-center md:text-left"
    >
      Dale a tu proyecto el valor que se merece
    </h2>
    <p class="text-xl w-full md:w-3/5 my-4 text-center md:text-left">
      Te ayudo a potenciar tu desarrollo en el mundo digital.
    </p>
    <LinkContact href="https://docs.google.com/forms/d/1YJI4qnREWEOpVjoO8pcn8W5rAG-AeMlc54Y5OkDFvho/prefill" class="w-max">Necesitas ayuda?</LinkContact>
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
      <h3
        class="w-[120px] text-l font-semibold uppercase text-center mx-auto mt-4"
      >
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
      <h3
        class="w-[120px] text-l font-semibold uppercase text-center mx-auto mt-4"
      >
        Diseño web Responsivo
      </h3>
    </article>
    <article>
      <figure class=" w-[140px] mt-8 m-auto md:w-[120px]">
        <img
          alt="ilustracion pantalla de diseño"
          src="/img-home/personalizado.png"
        />
      </figure>
      <h3
        class="w-[120px] text-l font-semibold uppercase text-center mx-auto mt-4"
      >
        Sin plantillas y a tu medida
      </h3>
    </article>
  </div>
</section>
