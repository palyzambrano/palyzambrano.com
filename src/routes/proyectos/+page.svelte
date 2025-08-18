<script lang="ts">
  import ProjectEntry from './components/ProjectEntry.svelte';

  export let data: {
    items: PalyzambranoDotCom.ProjectItem[];
  };

  let title = 'Paly Zambrano | Proyectos';
  let description = '';
  let avatarUrl = '';
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

<section class="h-96 flex">
  <div class="flex flex-col m-auto w-2/3 md:w-2/5">
    <h3>Procesos</h3>
    <p>
      Cada proyecto nace de la observación y la exploración. Mi proceso busca
      traducir ideas en formas, colores y experiencias digitales que transmitan
      identidad y energía, cuidando el detalle, el equilibrio y la conexión
      emocional en cada creación.
    </p>
  </div>
</section>

<!--
  <section class="flex flex-wrap justify-center md:justify-evenly mt-16">
    {#each data.items as item}
      <ProjectEntry {item} />
    {/each}
  </section>

-->
