<script>
  // Reemplaza con tu información
  const project = {
    title: 'Esencia Digital',
    subtitle: 'Una meditación sobre el espacio y la forma',
    year: '2024',
    type: 'Instalación Interactiva',
    curator: 'María González',
    exhibition: 'Galería Contemporánea, Madrid',
    description:
      'Una experiencia inmersiva que explora la relación entre el observador y el espacio digital. Cada elemento ha sido cuidadosamente posicionado para crear un diálogo visual único.',
    statement:
      'En un mundo saturado de información, este proyecto busca crear momentos de pausa y reflexión. La simplicidad no es ausencia, sino la presencia exacta de lo necesario.',

    // Nueva sección: Desafío
    challenge: {
      title: 'El Desafío',
      content:
        'El cliente buscaba una experiencia que rompiera con las convenciones tradicionales del diseño web. Necesitaban algo que no solo comunicara información, sino que creara una experiencia memorable y emocional para cada visitante.'
    },

    // Nueva sección: Solución
    solution: {
      title: 'La Solución',
      content:
        'Desarrollamos un sistema modular que permite a cada elemento respirar. Utilizamos animaciones sutiles y transiciones fluidas para guiar la atención del usuario, creando una narrativa visual que se despliega a medida que interactúan con el contenido.',
      highlights: [
        'Sistema de diseño escalable',
        'Animaciones basadas en scroll',
        'Arquitectura de componentes modulares',
        'Optimización de rendimiento extrema'
      ]
    },

    // Nueva sección: Tecnologías
    technologies: {
      title: 'Stack Tecnológico',
      stack: [
        {
          category: 'Frontend',
          items: ['Svelte', 'SvelteKit', 'Tailwind CSS']
        },
        {
          category: 'Animaciones',
          items: ['GSAP', 'Framer Motion', 'CSS Animations']
        },
        { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis'] },
        { category: 'Deploy', items: ['Vercel', 'Cloudflare', 'AWS S3'] }
      ]
    },

    // Nueva sección: Proceso
    process: [
      {
        phase: '01',
        title: 'Investigación',
        description:
          'Análisis profundo de usuarios, competencia y tendencias del mercado.',
        image:
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
      },
      {
        phase: '02',
        title: 'Ideación',
        description:
          'Workshops colaborativos y sketching de conceptos iniciales.',
        image:
          'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80'
      },
      {
        phase: '03',
        title: 'Diseño',
        description:
          'Prototipado iterativo en Figma con testing constante de usuarios.',
        image:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
      },
      {
        phase: '04',
        title: 'Desarrollo',
        description:
          'Implementación ágil con sprints de 2 semanas y code reviews.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
      },
      {
        phase: '05',
        title: 'Lanzamiento',
        description:
          'Deploy progresivo con monitoreo en tiempo real y ajustes.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
      }
    ],

    // Nueva sección: Testimonial
    testimonial: {
      quote:
        'Este proyecto superó todas nuestras expectativas. No solo entregaron un producto excepcional, sino que el proceso fue transparente, colaborativo y educativo para todo nuestro equipo.',
      author: 'Ana Martínez',
      role: 'CEO, Cliente Empresa'
    },

    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
        caption: 'Vista principal de la instalación'
      },
      {
        url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80',
        caption: 'Detalle de la interacción'
      },
      {
        url: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80',
        caption: 'Perspectiva lateral'
      }
    ],
    credits: [
      { role: 'Dirección Creativa', name: 'Tu Nombre' },
      { role: 'Desarrollo', name: 'Equipo Técnico' },
      { role: 'Fotografía', name: 'Estudio Visual' }
    ],

    // Nueva sección: Next Project
    nextProject: {
      title: 'Próximo Proyecto',
      name: 'Visión Futura',
      link: '#'
    }
  };
</script>

<article class="min-h-screen bg-white">
  <!-- Hero minimalista con mucho espacio en blanco -->
  <section class="px-6 md:px-16 pt-32 pb-24">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16">
        <p class="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-8">
          {project.type} · {project.year}
        </p>
        <h1
          class="text-6xl md:text-8xl font-light tracking-tight mb-6 leading-none"
        >
          {project.title}
        </h1>
      </div>

      <div class="grid md:grid-cols-12 gap-12">
        <p class="md:col-span-5 text-xl text-zinc-600 leading-relaxed">
          {project.subtitle}
        </p>
        <div
          class="md:col-span-6 md:col-start-7 space-y-4 text-sm text-zinc-500"
        >
          <div class="flex">
            <span class="w-32 uppercase tracking-wider">Curador</span>
            <span class="text-zinc-800">{project.curator}</span>
          </div>
          <div class="flex">
            <span class="w-32 uppercase tracking-wider">Ubicación</span>
            <span class="text-zinc-800">{project.exhibition}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Imagen full width con caption -->
  <section class="mb-24">
    <img
      src={project.images[0].url}
      alt={project.images[0].caption}
      class="w-full h-[80vh] object-cover"
    />
    <div class="px-6 md:px-16 pt-4">
      <p class="text-xs text-zinc-400 max-w-6xl mx-auto">
        {project.images[0].caption}
      </p>
    </div>
  </section>

  <!-- Descripción y statement -->
  <section class="px-6 md:px-16 pb-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
      <div class="md:col-span-5">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Descripción
        </h2>
        <p class="text-base leading-relaxed text-zinc-700">
          {project.description}
        </p>
      </div>

      <div class="md:col-span-6 md:col-start-7 bg-zinc-50 p-8">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Statement
        </h2>
        <p class="text-base leading-relaxed text-zinc-700 italic">
          {project.statement}
        </p>
      </div>
    </div>
  </section>

  <!-- Grid de imágenes secundarias -->
  <section class="px-6 md:px-16 pb-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      {#each project.images.slice(1) as image}
        <div>
          <img
            src={image.url}
            alt={image.caption}
            class="w-full h-[60vh] object-cover mb-4"
          />
          <p class="text-xs text-zinc-400">{image.caption}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Desafío -->
  <section class="px-6 md:px-16 pb-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-12">
        {project.challenge.title}
      </h2>
      <p
        class="text-3xl md:text-4xl font-light leading-relaxed text-zinc-800 max-w-4xl"
      >
        {project.challenge.content}
      </p>
    </div>
  </section>

  <!-- Solución con highlights -->
  <section class="px-6 md:px-16 pb-24 bg-zinc-50 py-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
      <div class="md:col-span-7">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          {project.solution.title}
        </h2>
        <p class="text-lg leading-relaxed text-zinc-700 mb-8">
          {project.solution.content}
        </p>
      </div>

      <div class="md:col-span-4 md:col-start-9">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Highlights
        </h3>
        <ul class="space-y-3">
          {#each project.solution.highlights as highlight}
            <li class="text-sm text-zinc-600 flex items-start">
              <span class="text-zinc-400 mr-3">—</span>
              {highlight}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <!-- Proceso con imágenes -->
  <section class="px-6 md:px-16 pb-24 pt-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-16">
        Proceso
      </h2>
      <div class="space-y-24">
        {#each project.process as step, i}
          <div class="grid md:grid-cols-12 gap-12 items-center">
            <!-- Alternar posición de imagen y texto -->
            {#if i % 2 === 0}
              <!-- Imagen izquierda, texto derecha -->
              <div class="md:col-span-6">
                <img
                  src={step.image}
                  alt={step.title}
                  class="w-full h-[400px] object-cover"
                />
              </div>
              <div class="md:col-span-6">
                <span class="text-6xl font-light text-zinc-300 block mb-4"
                  >{step.phase}</span
                >
                <h3 class="text-3xl font-light mb-6 text-zinc-800">
                  {step.title}
                </h3>
                <p class="text-base text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            {:else}
              <!-- Texto izquierda, imagen derecha -->
              <div class="md:col-span-6 order-2 md:order-1">
                <span class="text-6xl font-light text-zinc-300 block mb-4"
                  >{step.phase}</span
                >
                <h3 class="text-3xl font-light mb-6 text-zinc-800">
                  {step.title}
                </h3>
                <p class="text-base text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div class="md:col-span-6 order-1 md:order-2">
                <img
                  src={step.image}
                  alt={step.title}
                  class="w-full h-[400px] object-cover"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Stack Tecnológico -->
  <section class="px-6 md:px-16 pb-24 bg-zinc-900 text-white py-24">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-16">
        {project.technologies.title}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {#each project.technologies.stack as tech}
          <div>
            <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">
              {tech.category}
            </h3>
            <ul class="space-y-3">
              {#each tech.items as item}
                <li class="text-base text-zinc-300">{item}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Stack Tecnológico -->
  <section class="px-6 md:px-16 pb-24 bg-zinc-900 text-white py-24">
    <div class="max-w-4xl mx-auto text-center">
      <blockquote class="mb-8">
        <p
          class="text-2xl md:text-3xl font-light italic leading-relaxed text-zinc-700 mb-8"
        >
          "{project.testimonial.quote}"
        </p>
      </blockquote>
      <div>
        <p class="text-base font-medium text-zinc-800">
          {project.testimonial.author}
        </p>
        <p class="text-sm text-zinc-500">{project.testimonial.role}</p>
      </div>
    </div>
  </section>

  <!-- Créditos -->
  <section class="px-6 md:px-16 pb-24 border-t border-zinc-200 pt-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
        Créditos
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each project.credits as credit}
          <div>
            <p class="text-xs uppercase tracking-wider text-zinc-400 mb-2">
              {credit.role}
            </p>
            <p class="text-base text-zinc-800">{credit.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Próximo Proyecto -->
  <section class="px-6 md:px-16 pb-32 pt-16 border-t border-zinc-200">
    <div class="max-w-6xl mx-auto">
      <a href={project.nextProject.link} class="group block">
        <p class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
          {project.nextProject.title}
        </p>
        <div class="flex items-center justify-between">
          <h3
            class="text-4xl md:text-5xl font-light text-zinc-800 group-hover:text-zinc-600 transition-colors"
          >
            {project.nextProject.name}
          </h3>
          <span
            class="text-3xl text-zinc-400 group-hover:translate-x-2 transition-transform"
            >→</span
          >
        </div>
      </a>
    </div>
  </section>
</article>
