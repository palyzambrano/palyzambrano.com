<script>
  const project = {
    title: 'Cerveceria del viento',
    subtitle: 'El hogar de tu esencia',
    year: '2025',
    type: 'Rebranding',
    curator: 'Pamela y Juan Luis',
    exhibition: 'Llay Llay, Valparaíso - Chile',
    description:
      'Cervecería del Viento es un espacio pensado para quienes disfrutan la ruta, la libertad y una buena cerveza artesanal. Con espíritu viajero y esencia outdoor, creando un punto de encuentro para quienes buscan desconectar, compartir y vivir momentos auténticos.',
    statement:
      'Cada una de sus cervezas está elaborada con dedicación y carácter, inspirada en los paisajes e historias de Chile y en el ritmo tranquilo que ofrece la vida al aire libre. Un lugar que celebra las pausas, las conversaciones sin prisa y el sabor real de lo hecho a mano',

    challenge: {
      title: 'El Desafío',
      content:
        'Lograr una coherencia entre lo visual y lo comunicacional, la Cervecería del Viento busca fortalecer su presencia digital, conectar con su audiencia y, como resultado, aumentar la conversión de visitas en el local y ventas.'
    },

    solution: {
      title: 'La Solución',
      content:
        'Mejorar el reconocimiento de marca a través de una identidad visual coherente y memorable, conectar emocionalmente con el público mediante contenido visual atractivo y alineado con la personalidad de la marca, generar publicaciones que incentiven la visita al local y la compra de productos y poder aumentar la interacción y alcance orgánico en redes sociales.',
      highlights: [
        'Definición y aplicación de identidad visual: paleta de colores, tipografías y estilos gráficos coherentes.',
        'Diseño de plantillas personalizadas para posts y stories, manteniendo consistencia y facilidad de reconocimiento.',
        'Producción de contenido visual atractivo (fotografía, ilustraciones y animaciones con la temática de la cervecería).'
      ]
    },

    process: [
      {
        phase: '01',
        title: 'Investigación y Moodboard',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ligula eu neque auctor bibendum in nec tortor. Nam posuere malesuada mi, id dignissim orci pellentesque tristique.',
        image: '/img-brand/test.jpg'
      },
      {
        phase: '02',
        title: 'Propuesta',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ligula eu neque auctor bibendum in nec tortor. Nam posuere malesuada mi, id dignissim orci pellentesque tristique.',
        image: '/img-brand/test.jpg'
      }
    ],

    technologies: {
      title: 'Herramientas',
      stack: [
        {
          category: 'Diseño',
          items: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Cap Cut']
        },
        {
          category: 'Aplicaciones',
          items: ['Papelería', 'Redes Sociales']
        },
        { category: 'Elementos', items: ['Story', 'Reels', 'Carruseles'] },
        {
          category: 'Implementación',
          items: ['Redes sociales']
        }
      ]
    },

    testimonial: {
      quote:
        'La nueva identidad capturó perfectamente la evolución de Colomba. Pasamos de una imagen casera a una marca profesional que refleja la calidad de nuestros productos y la experiencia que ofrecemos en talleres y cursos.',
      author: 'Constanza',
      role: 'Founder, Pastelería Colomba'
    },

    images: [
      {
        url: '/img-brand/delviento/portada.png',
        caption: 'Portada'
      },
      {
        url: '/img-brand/delviento/passcdv.png',
        caption: 'Pasaporte de actividades'
      },
      {
        url: '/img-brand/delviento/postal.png',
        caption: 'Postal para colorear'
      },
      {
        url: '/img-brand/test.jpg',
        caption: 'granja cerveceria'
      }
    ],

    brandAssets: [
      { url: '/img-brand/delviento/CDV-promo.png', caption: 'promoburger' },
      { url: '/img-brand/delviento/CDV-preg.png', caption: 'Tipografía' },
      { url: '/img-brand/delviento/CDV-post.png', caption: 'fgb' },
      {
        url: '/img-brand/delviento/CDV-post-3.png',
        caption: 'Patrón de papel'
      },
      {
        url: '/img-brand/delviento/CDV-post-4.png',
        caption: 'Cinta cierra cajas'
      },
      {
        url: '/img-brand/delviento/CDV-post-2.png',
        caption: 'Tarjeta agradecimientos'
      }
    ],

    brandStory: [
      { url: '/img-brand/delviento/story-1.png', caption: 'Menu' },
      { url: '/img-brand/delviento/story-4.png', caption: 'beer' },
      { url: '/img-brand/delviento/story-2.png', caption: 'horario' },
      { url: '/img-brand/delviento/story-5.png', caption: 'liquidos' },
      { url: '/img-brand/delviento/story-3.png', caption: 'promo' },
      { url: '/img-brand/delviento/story-6.png', caption: 'ubicacion' }
    ],

    credits: [
      { role: 'Dirección Creativa', name: 'Paly Zambrano' },
      { role: 'Cliente', name: 'Cerveceria del viento' },
      { role: 'Diseño de Marca', name: 'Paly Zambrano' }
    ],

    nextProject: {
      title: 'Próximo Proyecto',
      name: 'Siguiente proyecto',
      link: '#'
    },

    instagramLinks: [
      {
        text: 'Ver video de Navidad',
        url: 'https://www.instagram.com/p/DCsVYkMsaCn/'
      },
      {
        text: 'Ver video de vitrina',
        url: 'https://www.instagram.com/p/DDX0tVzPAOQ/'
      }
    ]
  };
</script>

<article class="min-h-screen bg-white">
  <!-- Hero: Título a la izquierda, Info a la derecha -->
  <section class="min-h-screen grid md:grid-cols-2">
    <!-- Columna izquierda: Título -->
    <div class="flex flex-col justify-center px-8 md:px-16 py-24 md:py-0">
      <span class="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-8">
        {project.type}
      </span>
      <h1
        class="text-7xl md:text-8xl font-light tracking-tight leading-none mb-8"
      >
        {project.title}
      </h1>
      <p class="text-xl text-zinc-600 leading-relaxed mb-12">
        {project.subtitle}
      </p>

      <div class="space-y-4 text-sm">
        <div class="flex gap-4">
          <span class="text-zinc-400 w-24">Cliente</span>
          <span class="text-zinc-800">{project.curator}</span>
        </div>
        <div class="flex gap-4">
          <span class="text-zinc-400 w-24">Ubicación</span>
          <span class="text-zinc-800">{project.exhibition}</span>
        </div>
        <div class="flex gap-4">
          <span class="text-zinc-400 w-24">Año</span>
          <span class="text-zinc-800">{project.year}</span>
        </div>
      </div>
    </div>

    <!-- Columna derecha: Imagen principal -->
    <div class="relative h-screen">
      <img
        src={project.images[0].url}
        alt={project.title}
        class="w-full h-full object-cover object-top"
      />
    </div>
  </section>

  <!-- Texto flotante sobre imagen -->
  <section class="relative">
    <div class="absolute inset-0">
      <img
        src={project.images[3].url}
        alt="Background"
        class="w-full h-full object-cover opacity-10"
      />
    </div>
    <div class="relative py-32 px-8 md:px-16">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
          Contexto
        </h2>
        <p class="text-lg md:text-xl font-light leading-relaxed text-zinc-800">
          {project.description}
        </p>
      </div>
    </div>
  </section>

  <!-- Desafío y Solución: Grid asimétrico -->
  <section class="grid md:grid-cols-3 gap-px bg-zinc-200 mt-14">
    <!-- Desafío: 1 columna -->
    <div class="bg-white p-12 md:p-16">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
        {project.challenge.title}
      </h2>
      <p class="text-base leading-relaxed text-zinc-700">
        {project.challenge.content}
      </p>
    </div>

    <!-- Solución: 2 columnas -->
    <div class="bg-white p-12 md:p-16 md:col-span-2">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
        {project.solution.title}
      </h2>
      <p class="text-base leading-relaxed text-zinc-700 mb-12">
        {project.solution.content}
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        {#each project.solution.highlights as highlight}
          <div class="border-t border-zinc-300 pt-4">
            <p class="text-sm text-zinc-600">{highlight}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Statement con borde lateral -->
  <section class="py-24 px-8 md:px-16 bg-zinc-50">
    <div class="max-w-4xl border-l-4 border-zinc-300 pl-8">
      <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
        Nuevo concepto
      </h2>
      <p class="text-lg leading-relaxed text-zinc-700 italic">
        {project.statement}
      </p>
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
            <div class="md:col-span-12">
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
            <div class="md:col-span-12">
              <img
                src={step.image}
                alt={step.title}
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Sistema de identidad Redes -->
  <section class="px-8 md:px-16 py-32 bg-zinc-50">
    <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-16">Feed</h2>

    <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {#each project.brandAssets as asset}
        <div class="break-inside-avoid">
          <img src={asset.url} alt={asset.caption} class="w-full mb-4" />
        </div>
      {/each}
    </div>
  </section>
  <!-- Sistema de identidad: Grid tipo Pinterest -->
  <section class="px-8 md:px-16 py-32 bg-zinc-50">
    <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-16">
      Historias
    </h2>

    <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {#each project.brandStory as asset}
        <div class="break-inside-avoid">
          <img src={asset.url} alt={asset.caption} class="w-full mb-4" />
        </div>
      {/each}
    </div>
  </section>

  <!-- Implementaciones: Grid irregular -->
  <section class="py-32 px-8 md:px-16">
    <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-16">
      Implementaciones
    </h2>

    <div class="grid md:grid-cols-6 gap-4">
      <!-- Imagen grande -->
      <div class="md:col-span-3 md:row-span-2">
        <img
          src={project.images[1].url}
          alt={project.images[1].caption}
          class="w-full h-full object-cover"
        />
        <p class="text-xs text-zinc-400">{project.images[1].caption}</p>
      </div>

      <!-- Dos imágenes pequeñas -->
      <div class="md:col-span-3">
        <img
          src={project.images[2].url}
          alt={project.images[2].caption}
          class="w-full object-cover"
        />
        <p class="text-xs text-zinc-400">{project.images[2].caption}</p>
      </div>

      <div class="md:col-span-2 space-y-4">
        <p class="text-xs text-zinc-400">
          Línea especial de Navidad con diseño de vitrina y papelería temática
          para la temporada.
        </p>

        <!-- Links de Instagram -->
        <div class="space-y-3">
          {#each project.instagramLinks as link}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="block text-xs tracking-wider uppercase text-zinc-800 hover:text-zinc-500 transition-colors border-b border-zinc-300 pb-2"
            >
              {link.text} →
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Stack: Horizontal en una línea -->
  <section class="border-y border-zinc-200 py-16 px-8 md:px-16 overflow-x-auto">
    <div class="px-6 md:px-16 flex gap-16 min-w-max">
      {#each project.technologies.stack as tech}
        <div class="min-w-[200px]">
          <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
            {tech.category}
          </h3>
          <ul class="space-y-2">
            {#each tech.items as item}
              <li class="text-sm text-zinc-700">{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- Testimonial: Layout dividido -->
  <section class="grid md:grid-cols-2 min-h-[60vh]">
    <div class="bg-zinc-900 p-16 md:p-24 flex items-center justify-center">
      <div class="w-20 h-20 border-2 border-white rounded-full" />
    </div>
    <div class="p-16 md:p-24 flex flex-col justify-center">
      <blockquote
        class="text-xl md:text-2xl font-light leading-relaxed mb-8 text-zinc-700"
      >
        "{project.testimonial.quote}"
      </blockquote>
      <div>
        <p class="text-base font-medium text-zinc-900">
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
            class="text-xl md:text-2xl font-light text-zinc-800 group-hover:text-zinc-600 transition-colors"
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
