<!-- <script>
  // Reemplaza con tu información
  const project = {
    title: "MAICA",
    subtitle: "Colección Primavera 2024",
    year: "2024",
    category: "Diseño Visual",
    description: "Una exploración profunda de la intersección entre el minimalismo contemporáneo y la funcionalidad orgánica. Este proyecto redefine los espacios digitales a través de una narrativa visual cuidadosamente curada.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    tags: ["Branding", "UI/UX", "Art Direction"],
    link: "#"
  }
</script>

<article class="min-h-screen bg-zinc-50">
-->
<!-- Hero Section -->
<!--
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <img 
      src={project.image} 
      alt={project.title}
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/30"></div>
    
    <div class="relative z-10 text-center text-white px-6">
      <p class="text-sm tracking-[0.3em] uppercase mb-4 font-light">{project.year} / {project.category}</p>
      <h1 class="text-6xl md:text-8xl font-light tracking-tight mb-6">{project.title}</h1>
      <p class="text-xl md:text-2xl font-light tracking-wide">{project.subtitle}</p>
    </div>
  </section>
-->
<!-- Content Section -->
<!-- 
  <section class="max-w-4xl mx-auto px-6 py-24">
    <div class="grid md:grid-cols-2 gap-16 mb-16">
      <div>
        <h2 class="text-sm tracking-[0.3em] uppercase mb-6 text-zinc-400">Descripción</h2>
        <p class="text-lg leading-relaxed text-zinc-700">{project.description}</p>
      </div>
      
      <div>
        <h2 class="text-sm tracking-[0.3em] uppercase mb-6 text-zinc-400">Disciplinas</h2>
        <div class="flex flex-wrap gap-3">
          {#each project.tags as tag}
            <span class="px-4 py-2 border border-zinc-300 text-sm tracking-wide">{tag}</span>
          {/each}
        </div>
      </div>
    </div>

    <a 
      href={project.link}
      class="inline-block border-2 border-black px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
    >
      Ver Proyecto
    </a>
  </section>
</article> -->

<script>
  // Reemplaza con tu información
  const project = {
    number: '02',
    title: 'VISIÓN MINIMAL',
    subtitle: 'Espacios que respiran',
    year: '2024',
    client: 'Studio Moderno',
    role: 'Director Creativo',
    description:
      'Un estudio sobre la simplicidad radical. Cada elemento fue diseñado para existir en perfecta armonía con el espacio negativo, creando una experiencia que trasciende lo visual.',
    longDescription:
      'La filosofía detrás de este proyecto se centra en la eliminación de todo lo superfluo. Trabajamos durante meses para encontrar el balance exacto entre forma y función, resultando en una identidad que comunica más con menos.',
    images: [
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80',
      'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80'
    ],
    metrics: [
      { label: 'Duración', value: '6 meses' },
      { label: 'Equipo', value: '8 personas' },
      { label: 'Entregables', value: '45+' }
    ]
  };
</script>

<article class="min-h-screen bg-white">
  <!-- Header con número grande -->
  <div class="px-6 md:px-12 pt-24 pb-12 border-b border-zinc-200">
    <span
      class="text-[12rem] md:text-[20rem] font-light leading-none text-zinc-100"
    >
      {project.number}
    </span>
  </div>

  <!-- Split Content -->
  <section class="grid md:grid-cols-2 min-h-screen">
    <!-- Lado izquierdo - Texto -->
    <div
      class="p-12 md:p-20 flex flex-col justify-center border-r border-zinc-200"
    >
      <div class="space-y-8">
        <div>
          <p class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-2">
            {project.year}
          </p>
          <h1 class="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            {project.title}
          </h1>
          <p class="text-xl text-zinc-500 italic">{project.subtitle}</p>
        </div>

        <div class="space-y-4 pt-8 border-t border-zinc-200">
          <div class="flex justify-between text-sm">
            <span class="text-zinc-400 uppercase tracking-wider">Cliente</span>
            <span class="text-zinc-800">{project.client}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-zinc-400 uppercase tracking-wider">Rol</span>
            <span class="text-zinc-800">{project.role}</span>
          </div>
        </div>

        <p class="text-base leading-relaxed text-zinc-600">
          {project.description}
        </p>

        <p class="text-base leading-relaxed text-zinc-600">
          {project.longDescription}
        </p>

        <!-- Métricas -->
        <div class="grid grid-cols-3 gap-8 pt-8">
          {#each project.metrics as metric}
            <div>
              <p class="text-2xl font-light mb-1">{metric.value}</p>
              <p class="text-xs uppercase tracking-wider text-zinc-400">
                {metric.label}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Lado derecho - Imágenes -->
    <div class="relative bg-zinc-50">
      <div
        class="sticky top-0 h-screen flex flex-col justify-center p-8 space-y-8"
      >
        {#each project.images as image}
          <img
            src={image}
            alt="Project visual"
            class="w-full h-auto object-cover"
          />
        {/each}
      </div>
    </div>
  </section>
</article>
