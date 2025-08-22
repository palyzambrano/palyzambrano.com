<script>
  import CardGaleria from '$lib/components/CardGaleria.svelte';
</script>

<section class="h-80 flex">
  <div class="flex flex-col m-auto md:mt-44 w-2/3 md:w-2/5">
    <h3 class="text-lg">Galeria</h3>
    <p>
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
