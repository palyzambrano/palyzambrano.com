<script lang="ts">
  import CardProcesos from '$lib/components/CardProcesos.svelte';

  export let data: {
    items: PalyzambranoDotCom.ProjectItem[];
  };

  let title = 'Paly Zambrano | Proyectos';
  let description = '';
  let avatarUrl = '';
</script>

<section class="h-52 flex">
  <div class="flex flex-col m-auto md:mt-20 w-3/4 md:w-1/2">
    <h3 class="text-lg">Procesos</h3>
    <p class="text-sm md:text-base">
      Aquí se revela el trayecto invisible: Un recorrido por las ideas que se
      transforman en formas, colores y experiencias digitales.
    </p>
  </div>
</section>
<section class="w-2/3 mx-auto my-3">
  <ul class="flex flex-wrap justify-between">
    {#each data.items as item}
      <li>
        <CardProcesos {item} />
      </li>
    {/each}
  </ul>
</section>

<style lang="postcss">
  li {
    @apply w-1/2 py-6;
  }
</style>
