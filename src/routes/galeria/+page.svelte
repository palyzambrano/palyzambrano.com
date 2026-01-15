<script>
  import CardGaleria from '$lib/components/CardGaleria.svelte';
</script>

<section class="h-52 flex">
  <div class="flex flex-col m-auto md:mt-20 w-3/4 md:w-1/2">
    <h3 class="text-xl uppercase font-semibold">Galeria</h3>
    <p class="text-sm md:text-base">
      Como en toda gran muestra, aquí no hay piezas aisladas, sino un relato
      visual en constante movimiento.
    </p>
  </div>
</section>
<section class="overflow-x-scroll ml-4 my-4">
  <ul class="flex space-x-4">
    <li>
      <CardGaleria
        title="Colomba"
        image="/img-brand/colomba/col-procesos.png"
        link="/galeria/colomba"
      />
    </li>
    <li>
      <CardGaleria
        title="Maica"
        image="/img-brand/maica/bolsa-maica.png"
        link="/galeria/maica"
      />
    </li>
    <li>
      <CardGaleria
        title="Cerveceria del viento"
        image="/img-brand/delviento/portada-cdv.png"
        link="/galeria/delviento"
      />
    </li>
    <li>
      <CardGaleria
        title="La casa de Anita"
        image="/img-brand/casanita/anita-port.jpg"
        link="/galeria/casanita"
      />
    </li>
    <li>
      <CardGaleria
        title="OMA"
        image="/img-brand/colomba/col-procesos.png"
        link="/galeria/oma"
      />
    </li>
  </ul>
</section>
