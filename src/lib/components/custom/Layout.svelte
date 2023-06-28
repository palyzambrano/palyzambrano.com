<script lang="ts" context="module">
  import h2 from '$lib/components/custom/h2.svelte';
  import p from '$lib/components/custom/p.svelte';

  export { h2, p };
</script>

<script>
  import Tooling from './Tooling.svelte';
  import { humanDate } from '$lib/utils/date';

  export let title;
  export let categories;
  export let date;
  export let tooling;
  export let project;
  export let context;
  export let client;
  export let brand_logo_url;
  export let link_to_project;

  const publishedTime = new Date(date);
  const formattedDate = humanDate(publishedTime);

  function translateCategories(cats) {
    const traducciones = {
      diseno_web: 'Diseño Web'
    };

    return cats
      .map((elemento) => {
        return traducciones[elemento];
      })
      .join(' ');
  }
</script>

<header class="w-2/3 mx-auto mt-16">
  <div>
    <span class="pt-4 text-sm text-gray-800">{project}</span>
    <h1 class="text-2xl pb-4">{title}</h1>
    <p class="text-gray-600 font-light">{context}</p>
  </div>
  <div class="flex content-center my-4">
    <figure class="w-[80px] my-auto">
      <img src={brand_logo_url} alt="" />
    </figure>
    <div class="my-6 ml-8 font-light text-gray-600 text-sm">
      <p>Cliente: {client}</p>
      <p>Servicios: {translateCategories(categories)}</p>
      <p>Fecha: <time datetime={date.toString()}>{formattedDate}</time></p>
    </div>
  </div>
  <div>
    <h4>Herramientas</h4>
      <Tooling tools={tooling} />
  </div>
</header>

<div class="w-2/3 mx-auto font-light text-gray-600">
  <slot />
</div>

<footer class="my-10">
  <a
    class="border border-zinc-900 rounded-2xl flex flex-row m-auto w-[80%] md:w-1/4 items-center"
    href={link_to_project}
    target="_blank"
  >
    <figure class="w-[50px] m-4">
      <img src="/img-home/ver-mas.png" alt="" />
    </figure>
    <p class="m-4 font-semibold md:text-xl uppercase font-title">
      Ver más de este proyecto
    </p>
  </a>
</footer>
