<script>
  // Reemplaza con tu información
  const project = {
    title: 'FORMA Y FUNCIÓN',
    tagline: 'Donde la estética encuentra propósito',
    featured_text:
      'Este proyecto representa la culminación de años explorando la intersección entre belleza y utilidad.',
    year: '2024',
    season: 'Otoño/Invierno',
    mainImage:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80',
    gridImages: [
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=600&q=80',
      'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=600&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80'
    ],
    quote:
      'El diseño no es solo cómo se ve o cómo se siente. El diseño es cómo funciona.',
    details: [
      'Investigación exhaustiva de materiales sostenibles',
      'Prototipado iterativo durante 4 meses',
      'Colaboración con artesanos locales',
      'Enfoque en producción ética'
    ]
  };
</script>

<article class="min-h-screen bg-zinc-900 text-white">
  <!-- Header tipo revista -->
  <header
    class="border-b border-zinc-700 px-6 md:px-12 py-8 flex justify-between items-center"
  >
    <div class="text-xs tracking-[0.3em] uppercase">{project.season}</div>
    <div class="text-xs tracking-[0.3em] uppercase">{project.year}</div>
  </header>

  <!-- Hero con título grande -->
  <section class="px-6 md:px-12 py-24">
    <h1
      class="text-7xl md:text-9xl font-light tracking-tighter leading-none mb-8"
    >
      {project.title}
    </h1>
    <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light italic">
      {project.tagline}
    </p>
  </section>

  <!-- Imagen principal con texto superpuesto -->
  <section class="px-6 md:px-12 mb-24">
    <div class="relative h-[70vh]">
      <img
        src={project.mainImage}
        alt={project.title}
        class="w-full h-full object-cover"
      />
      <div
        class="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent"
      >
        <p class="text-2xl md:text-3xl font-light max-w-3xl leading-relaxed">
          {project.featured_text}
        </p>
      </div>
    </div>
  </section>

  <!-- Layout tipo revista - Texto y grid de imágenes -->
  <section class="px-6 md:px-12 pb-24">
    <div class="grid md:grid-cols-2 gap-16 mb-24">
      <!-- Columna de texto -->
      <div class="space-y-12">
        <div>
          <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">
            Proceso
          </h2>
          <ul class="space-y-4">
            {#each project.details as detail}
              <li
                class="text-lg text-zinc-300 leading-relaxed flex items-start"
              >
                <span class="text-zinc-600 mr-4">—</span>
                {detail}
              </li>
            {/each}
          </ul>
        </div>

        <blockquote class="border-l-2 border-white pl-8 py-4">
          <p class="text-2xl font-light italic leading-relaxed text-zinc-200">
            {project.quote}
          </p>
        </blockquote>
      </div>

      <!-- Grid de imágenes -->
      <div class="space-y-6">
        {#each project.gridImages as image, i}
          <div class="relative" style="margin-left: {i * 10}%">
            <img
              src={image}
              alt="Detail {i + 1}"
              class="w-full h-auto object-cover"
            />
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Footer minimalista -->
  <footer class="border-t border-zinc-700 px-6 md:px-12 py-12">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs tracking-[0.3em] uppercase text-zinc-500">
        Siguiente Proyecto
      </p>
      <button class="text-xl hover:text-zinc-400 transition-colors">→</button>
    </div>
  </footer>
</article>
