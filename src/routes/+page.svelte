<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import ProjectEntry from './proyectos/components/ProjectEntry.svelte';

  export let data: {
    items: PalyzambranoDotCom.ProjectItem[];
  };

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
    class="flex flex-col md:flex-row md:justify-center max-w-screen-xl z-10 mt-20 ml-16"
  >
    <figure class="w-[550px] h-[550px] overflow-hidden ml-[100px]">
      <img alt="foto de paly en la playa" src="/img-home/fotopaly.png" />
    </figure>
    <div class="w-1/2 text-left space-y-6  md:mt-[120px] ml-16">
      <h2 class="text-2xl ">Hola, soy Paly!</h2>
      <p class="w-3/4 ">
        Me alegra que estés aquí, cree este espacio para contarte quien soy y
        que conozcas mi trabajo
      </p>
      <p class="w-3/4">
        Explora mi portafolio y descubre como podemos hacer crecer tu
        emprendimiento, estoy aquí para hacer brillar tu presencia en línea.
      </p>
      <Button on:click={() => goto('/proyectos')}>Mira mis proyectos</Button>
    </div>
  </div>
</section>
<!--Proyectos Favoritos-->
<section class="max-w-screen-xl mx-auto my-20 ">
  <h2 class="text-2xl text-center w-[300px] m-auto">
    Algunos de mis proyectos <strong>favoritos</strong>
  </h2>
  <p class="w-[600px]  m-auto text-center mt-4">
    La magia del diseño está presente en cada proyecto que emprendo. creemos
    juntos la solución web perfecta para ti.
  </p>
  <div class="flex flex-wrap justify-between">
    {#each data.items as item}
      <ProjectEntry {item} />
    {/each}
  </div>
</section>
