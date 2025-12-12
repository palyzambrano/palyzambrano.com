<script>
  // Reemplaza con tu información
  const project = {
    title: "Proyecto Dual",
    subtitle: "Ilustración + Desarrollo Web",
    year: "2024",
    client: "Nombre del Cliente",
    
    // Descripción general
    overview: "Un proyecto integral que combina ilustración personalizada y desarrollo web. Cada ilustración fue creada específicamente para complementar la experiencia digital, creando una identidad visual cohesiva y memorable.",
    
    // Fase 1: Ilustraciones
    illustration: {
      title: "Ilustración y Concepto Visual",
      description: "El proceso creativo comenzó con la conceptualización de un universo visual único. Cada ilustración cuenta una historia y guía al usuario a través de la experiencia.",
      approach: "Estilo minimalista con paleta de colores vibrantes, formas orgánicas y personajes que representan los valores de la marca.",
      
      // Galería de ilustraciones
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
          title: "Ilustración Hero",
          description: "Ilustración principal para la página de inicio"
        },
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
          title: "Iconografía",
          description: "Sistema de íconos ilustrados personalizados"
        },
        {
          url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
          title: "Personajes",
          description: "Familia de personajes para secciones clave"
        },
        {
          url: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80",
          title: "Elementos decorativos",
          description: "Detalles y ornamentos para enriquecer la UI"
        }
      ],
      
      // Herramientas de ilustración
      tools: ["Procreate", "Adobe Illustrator", "Figma"]
    },
    
    // Fase 2: Desarrollo Web
    development: {
      title: "Desarrollo Web",
      description: "La implementación técnica trajo las ilustraciones a la vida con animaciones suaves y microinteracciones que mejoran la experiencia del usuario.",
      
      features: [
        {
          name: "Animaciones SVG",
          detail: "Las ilustraciones cobran vida con animaciones al hacer scroll"
        },
        {
          name: "Parallax Suave",
          detail: "Efecto de profundidad que crea inmersión"
        },
        {
          name: "Responsive Design",
          detail: "Adaptación perfecta de ilustraciones en todos los dispositivos"
        },
        {
          name: "Performance",
          detail: "Optimización de assets para carga rápida"
        }
      ],
      
      // Screenshots del sitio
      screenshots: [
        {
          url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80",
          caption: "Página de inicio con ilustración hero"
        },
        {
          url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1200&q=80",
          caption: "Sección about con personajes animados"
        },
        {
          url: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1200&q=80",
          caption: "Footer con elementos ilustrados"
        }
      ],
      
      // Stack técnico
      stack: {
        frontend: ["HTML/CSS", "JavaScript", "GSAP", "Lottie"],
        design: ["Figma", "Adobe Illustrator"],
        deployment: ["Vercel", "Cloudflare"]
      }
    },
    
    // Integración
    integration: {
      title: "Ilustración + Código",
      description: "La magia sucede cuando el arte y la tecnología se encuentran. Cada ilustración fue optimizada y animada para crear una experiencia fluida y memorable."
    },
    
    // Resultados
    results: [
      { metric: "40%", label: "Aumento en tiempo de permanencia" },
      { metric: "8/10", label: "Score de satisfacción visual" },
      { metric: "100/100", label: "Lighthouse Performance" }
    ],
    
    // Links
    links: [
      { text: "Ver sitio web", url: "#" },
      { text: "Proceso en Behance", url: "#" }
    ]
  }
</script>

<article class="min-h-screen bg-white">
  <!-- Hero: Split con ilustración -->
  <section class="min-h-screen grid md:grid-cols-2 items-center">
    <div class="px-8 md:px-16 py-16 md:py-0 order-2 md:order-1">
      <span class="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6 block">
        {project.year} · {project.client}
      </span>
      <h1 class="text-6xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
        {project.title}
      </h1>
      <p class="text-xl md:text-2xl text-zinc-600 font-light mb-12">
        {project.subtitle}
      </p>
      <p class="text-base text-zinc-600 leading-relaxed max-w-md">
        {project.overview}
      </p>
    </div>
    
    <div class="relative h-[50vh] md:h-screen bg-zinc-50 order-1 md:order-2 flex items-center justify-center">
      <img 
        src={project.illustration.gallery[0].url}
        alt="Hero illustration"
        class="max-w-[80%] max-h-[80%] object-contain"
      />
    </div>
  </section>

  <!-- Sección: ILUSTRACIÓN -->
  <section class="py-32 bg-zinc-50">
    <div class="px-8 md:px-16 mb-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-light mb-8 text-zinc-800">
          {project.illustration.title}
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <p class="text-lg text-zinc-600 leading-relaxed">
            {project.illustration.description}
          </p>
          <div class="bg-white p-8 border-l-4 border-zinc-300">
            <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">Enfoque Visual</h3>
            <p class="text-base text-zinc-700 leading-relaxed">
              {project.illustration.approach}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Galería de ilustraciones en grid -->
    <div class="px-8 md:px-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {#each project.illustration.gallery as artwork}
          <div class="bg-white p-8 group">
            <div class="mb-6 overflow-hidden">
              <img 
                src={artwork.url}
                alt={artwork.title}
                class="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 class="text-lg font-light mb-2 text-zinc-800">{artwork.title}</h3>
            <p class="text-sm text-zinc-500">{artwork.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Herramientas de ilustración -->
    <div class="px-8 md:px-16 mt-20">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">Herramientas</h3>
        <div class="flex flex-wrap gap-3">
          {#each project.illustration.tools as tool}
            <span class="px-4 py-2 bg-white border border-zinc-300 text-sm text-zinc-700">
              {tool}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Transición visual entre secciones -->
  <section class="h-32 bg-gradient-to-b from-zinc-50 to-white"></section>

  <!-- Sección: DESARROLLO WEB -->
  <section class="py-32">
    <div class="px-8 md:px-16 mb-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-light mb-8 text-zinc-800">
          {project.development.title}
        </h2>
        <p class="text-lg text-zinc-600 leading-relaxed max-w-3xl">
          {project.development.description}
        </p>
      </div>
    </div>

    <!-- Features del desarrollo -->
    <div class="px-8 md:px-16 mb-20">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {#each project.development.features as feature}
          <div class="border-t-2 border-zinc-200 pt-6">
            <h3 class="text-xl font-light mb-3 text-zinc-800">{feature.name}</h3>
            <p class="text-base text-zinc-600">{feature.detail}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Screenshots del sitio -->
    <div class="px-8 md:px-16">
      <div class="max-w-6xl mx-auto space-y-16">
        {#each project.development.screenshots as screenshot, i}
          <div class="grid md:grid-cols-12 gap-8 items-center">
            {#if i % 2 === 0}
              <div class="md:col-span-8">
                <img 
                  src={screenshot.url}
                  alt={screenshot.caption}
                  class="w-full h-auto shadow-2xl"
                />
              </div>
              <div class="md:col-span-4">
                <p class="text-sm text-zinc-500">{screenshot.caption}</p>
              </div>
            {:else}
              <div class="md:col-span-4 order-2 md:order-1">
                <p class="text-sm text-zinc-500">{screenshot.caption}</p>
              </div>
              <div class="md:col-span-8 order-1 md:order-2">
                <img 
                  src={screenshot.url}
                  alt={screenshot.caption}
                  class="w-full h-auto shadow-2xl"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- Stack técnico -->
    <div class="px-8 md:px-16 mt-20">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {#each Object.entries(project.development.stack) as [category, items]}
          <div>
            <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
              {category}
            </h3>
            <ul class="space-y-2">
              {#each items as item}
                <li class="text-sm text-zinc-700">{item}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Sección: INTEGRACIÓN -->
  <section class="py-32 bg-zinc-900 text-white">
    <div class="px-8 md:px-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-light mb-8">
          {project.integration.title}
        </h2>
        <p class="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
          {project.integration.description}
        </p>
      </div>
    </div>
  </section>

  <!-- Resultados -->
  <section class="py-32 bg-white">
    <div class="px-8 md:px-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-16 text-center">
          Impacto
        </h2>
        <div class="grid md:grid-cols-3 gap-12">
          {#each project.results as result}
            <div class="text-center">
              <p class="text-5xl md:text-6xl font-light mb-4 text-zinc-800">
                {result.metric}
              </p>
              <p class="text-sm uppercase tracking-wider text-zinc-500">
                {result.label}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Links y CTA -->
  <section class="py-24 bg-zinc-50 border-t border-zinc-200">
    <div class="px-8 md:px-16">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
          Ver Proyecto Completo
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          {#each project.links as link}
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block border-2 border-zinc-900 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-zinc-900 hover:text-white transition-colors"
            >
              {link.text} →
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <section class="px-8 md:px-16 py-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <a href="#" class="group inline-flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
        <span class="group-hover:-translate-x-1 transition-transform">←</span>
        Volver a proyectos
      </a>
    </div>
  </section>
</article>