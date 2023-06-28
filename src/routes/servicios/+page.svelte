<script>
  import Button from '$lib/components/Button.svelte';
    import LinkContact from '$lib/components/LinkContact.svelte';
</script>

<!--servicios-->
<section class="max-w-screen-xl mx-auto my-20">
  <div>
    <h2 class="text-4xl font-semibold uppercase mb-6 text-center">Servicios</h2>
    <p class="text-center w-10/12 md:w-[400px] m-auto mb-10 text-xl">
      Quiero ayudarte a cumplir tus objetivos e impulsar tu crecimiento digital
    </p>
  </div>
  <div class="flex flex-col md:flex-row">
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col md:flex-row m-4 md:w-1/2"
    >
      <figure class="m-4 md:m-8 w-[100px] md:w-[160px]">
        <img src="/img-servicios/design.png" alt="" />
      </figure>
      <div class="m-6 md:m-8">
        <h3 class="text-2xl uppercase font-medium">Diseño de interfaz</h3>
        <p class="mt-4 text-xl">
          puedo crear el diseño para tus interfaces de software o dispositivos
        </p>
      </div>
    </article>
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col md:flex-row m-4 md:w-1/2"
    >
      <figure class="m-6 md:m-8 w-[100px] md:w-[200px]">
        <img src="/img-servicios/desarrollo.png" alt="" />
      </figure>
      <div class="m-8">
        <h3 class="text-2xl uppercase font-medium">Desarrollo Web</h3>
        <p class="mt-4 text-xl">
          Desde el diseño hasta el desarrollo, estoy aquí para hacer brillar tu
          presencia en línea.
        </p>
      </div>
    </article>
  </div>
</section>

<!--ir al Form Contacto-->
<section
  class="flex flex-col md:flex-row justify-evenly items-center w-full md:py-16 px-8 md:px-16"
>
  <div class="flex flex-col justify-items-center md:w-1/3">
    <h2 class="text-4xl font-semibold uppercase text-center md:text-left">
      ¿Te interesa trabajar conmigo?
    </h2>
    <p class="my-4 text-xl text-center md:text-left md:w-4/5">
      Si quieres algo personalizado o no tienes claridad de lo que necesitas
      puedes escribirme
    </p>
    <div class="flex justify-center md:justify-start">
      <LinkContact href="https://docs.google.com/forms/d/1YJI4qnREWEOpVjoO8pcn8W5rAG-AeMlc54Y5OkDFvho/prefill" class="w-max">Contáctame</LinkContact>
    </div>
  </div>
  <figure class="mt-6">
    <img src="/img-servicios/desktop.png" alt="" />
  </figure>
</section>

<!--Etapas-->
<section class="max-w-screen-xl mx-auto my-20">
  <div>
    <p class="text-center w-[400px] m-auto">
      Estas son las etapas de mi trabajo
    </p>
    <h2 class="text-4xl font-semibold uppercase mb-12 text-center">
      conoce mi proceso
    </h2>
  </div>
  <div class="flex flex-col md:flex-row">
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col m-4 bg-[#FFF5E8] w-11/12 md:w-1/4"
    >
      <figure class="m-4 md:mt-8 md:ml-8 w-[80px]">
        <img src="/img-servicios/investigacion.png" alt="" />
      </figure>
      <div class="m-4 md:ml-8">
        <h3 class="text-2xl uppercase font-medium">Investigación</h3>
        <p class="mt-4">
          Analizamos el proyecto en conjunto y definimos los objetivos.
        </p>
      </div>
    </article>
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col m-4 bg-[#FFF5E8] w-11/12 md:w-1/4"
    >
      <figure class="m-4 md:mt-8 md:ml-8 w-[80px]">
        <img src="/img-servicios/designer.png" alt="" />
      </figure>
      <div class="m-4 md:ml-8">
        <h3 class="text-2xl uppercase font-medium">Diseño</h3>
        <p class="mt-4">
          Diseño una maqueta para tu sitio y ajustamos detalles
        </p>
      </div>
    </article>
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col m-4 bg-[#FFF5E8] w-11/12 md:w-1/4"
    >
      <figure class="m-4 md:mt-8 md:ml-8 w-[80px]">
        <img src="/img-servicios/implementacion.png" alt="" />
      </figure>
      <div class="m-4 md:ml-8">
        <h3 class="text-2xl uppercase font-medium">Implementación</h3>
        <p class="mt-4">
          Una vez aprobado el diseño desarrollo tu sitio para darle
          funcionalidad.
        </p>
      </div>
    </article>
    <article
      class="border border-zinc-900 rounded-2xl flex flex-col m-4 bg-[#FFF5E8] w-11/12 md:w-1/4"
    >
      <figure class="m-4 md:mt-8 md:ml-8 w-[80px]">
        <img src="/img-servicios/ultrevision.png" alt="" />
      </figure>
      <div class="m-4 md:ml-8">
        <h3 class="text-2xl uppercase font-medium">Ultima revisión</h3>
        <p class="mt-4">
          Revisamos y ajustamos cada detalle para que el resultado sea lo que
          estabas soñando.
        </p>
      </div>
    </article>
  </div>
</section>
