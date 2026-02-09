<script>
  let videoSrc = '#';
</script>

<section
  class="w-full flex flex-col md:flex-row justify-center md:items-end md:pt-6"
>
  <div class="md:w-4/12 p-4">
    <div>
      <video
        src={videoSrc}
        autoplay
        loop
        muted
        playsinline
        class="w-full max-w-4xl md:h-[620px] mx-auto shadow-lg object-cover"
      >
        Tu navegador no soporta el elemento video.
      </video>
    </div>
  </div>
  <div class="md:w-4/12 p-4">
    <article
      class="  md:p-8 p-4 space-y-2 bg-zinc-100 text-sm shadow-sm shadow-zinc-300"
    >
      <h2 class="text-base">Hola!</h2>
      <p>
        Soy Paly, diseñadora, creadora visual y amante de las historias que se
        cuentan en colores, formas y texturas.
      </p>
      <p>
        Este espacio no es solo una galería: es una invitación a recorrer mi
        mundo creativo, donde cada detalle cuenta y cada idea tiene un lugar
        para crecer.
      </p>
    </article>
  </div>
</section>
