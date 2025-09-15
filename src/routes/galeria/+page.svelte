<script>
  import CardGaleria from '$lib/components/CardGaleria.svelte';
</script>

<section class="h-52 flex">
  <div class="flex flex-col m-auto md:mt-20 w-3/4 md:w-1/2">
    <h3 class="text-lg">Galeria</h3>
    <p class="text-sm md:text-base">
      Como en toda gran muestra, aquí no hay piezas aisladas, sino un relato
      visual en constante movimiento.
    </p>
  </div>
</section>
<section class="overflow-x-scroll ml-4 my-4">
  <ul class="flex space-x-4">
    <li>
      <CardGaleria />
    </li>
    <li>
      <CardGaleria />
    </li>
    <li>
      <CardGaleria />
    </li>
    <li>
      <CardGaleria />
    </li>
    <li>
      <CardGaleria />
    </li>
  </ul>
</section>
