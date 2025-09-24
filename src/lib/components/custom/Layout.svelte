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

<header class="md:w-3/6 md:mx-auto mx-10 mt-16 text-sm md:text-base">
  <div>
    <span class="pt-4 text-sm text-gray-800">{project}</span>
    <h1 class="text-2xl pb-4 uppercase tracking-wide">{title}</h1>
     <div>
    <h4>Herramientas</h4>
    <Tooling tools={tooling} />
  </div>
    <p class="text-gray-600 font-light">{context}</p>
  </div>
</header>

<div
  class="md:w-3/6 mx-10 md:mx-auto font-light text-gray-600 text-sm md:text-base tracking-wide"
>
  <slot />
 
</div>
