<script>
  import CardGaleria from '$lib/components/CardGaleria.svelte';
</script>

<section class="h-52 flex">
  <div class="flex flex-col m-auto md:mt-20 w-3/4 md:w-1/2">
    <h3 class="text-xl uppercase font-semibold">Web Design</h3>
    <p class="text-sm md:text-base">
      Aquí se revela el trayecto invisible: Un recorrido por las ideas que se
      transforman en formas, colores y experiencias digitales.
    </p>
  </div>
</section>
<section class="md:overflow-x-scroll md:pl-10 py-4">
  <ul class="flex flex-col md:flex-row gap-4 items-center">
    <li>
      <CardGaleria
        title="Endurance"
        image="/img-brand/endurance/portada.png"
        link="/webdesign/endurance"
      />
    </li>
    <li>
      <CardGaleria
        title="Suconsciencia"
        image="/img-brand/sucons/mokker-su.png"
        link="/webdesign/suconsciencia"
      />
    </li>
    <li>
      <CardGaleria
        title="Polyproto"
        image="/img-brand/poly/mokker.png"
        link="/webdesign/poly"
      />
    </li>
    <li>
      <CardGaleria
        title="weird"
        image="/img-brand/weird/portada.png"
        link="/webdesign/weird"
      />
    </li>
    <li>
      <CardGaleria
        title="roomy"
        image="/img-brand/roomy/portada.png"
        link="/webdesign/roomy"
      />
    </li>
  </ul>
</section>
