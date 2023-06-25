<script lang="ts" context="module">
  import h2 from '$lib/components/custom/h2.svelte';
  import p from '$lib/components/custom/p.svelte';

  export { h2, p };
</script>

<script>
  import { humanDate } from '$lib/utils/date';

  export let title;
  export let categories;
  export let date;
  export let tooling;
  export let project;
  export let context;
  export let client;
  export let brand_logo_url;

  const publishedTime = new Date(date);
  const formattedDate = humanDate(publishedTime);

  function translateCategories(cats) {
    const traducciones = {
      diseno_web: "Diseño Web"
    }

    return cats.map((elemento) => {
      return traducciones[elemento];
    }).join(' ');
  }
</script>

<header class="w-2/3 mx-auto mt-16">
  <div>
    <span class="pt-4 text-sm text-gray-800">{project}</span>
    <h1 class="text-2xl pb-4">{title}</h1>
    <p class="text-gray-600">{context}</p>
  </div>
  <div class="flex content-center my-4">
    <figure class="w-[80px] my-auto">
      <img src={brand_logo_url} alt="">
    </figure>
    <div  class="my-6 ml-8 text-gray-600 text-sm">
      <p>Cliente: {client}</p>
      <p>Servicios: {translateCategories(categories)}</p>
      <p>Fecha: <time datetime={date.toString()}>{formattedDate}</time></p>
    </div>
  </div>
  <div>
    <h4>Herramientas</h4>
  </div>
</header>

<div class="w-2/3 mx-auto">
  <slot />
</div>
