<script>
  const project = {
    title: 'Endurance',
    tagline: 'App Móvil · Sitio Web · Sistema de Gestión',
    year: '2024',
    client: 'Endurance Gym',
    duration: '3 meses',

    overview: {
      description:
        'Proyecto integral que consiste en el diseño de una aplicación móvil y sitio web para la gestión de cupos en un gimnasio. La solución permite a los usuarios reservar sus clases y sesiones de entrenamiento mientras facilita a los administradores la gestión eficiente de horarios y recursos.',
      challenge:
        'Mejorar la experiencia del usuario al facilitar la organización y optimización del tiempo de los clientes del gimnasio, mientras se proporciona a los administradores herramientas eficaces para la gestión.'
    },

    team: [
      { role: 'Diseño UX/UI', name: 'Paly Zambrano' },
      { role: 'Desarrollo Web', name: 'Paly Zambrano' },
      { role: 'Investigación', name: 'Paly Zambrano' }
    ],

    // DELIVERABLE 1: App Móvil
    webapp: {
      title: 'App Móvil',
      subtitle: 'Gestión de reservas para usuarios',
      description:
        'Una aplicación móvil intuitiva diseñada para que los usuarios puedan gestionar sus reservas de clases de forma rápida y eficiente. Permite reservar, cancelar y reprogramar sesiones fácilmente, incluso para usuarios con poca experiencia en tecnología.',

      features: [
        {
          name: 'Pantalla de Inicio Rápida',
          detail: 'Acceso inmediato a las próximas reservas programadas',
          icon: '🏠'
        },
        {
          name: 'Reservar Clase Simplificado',
          detail: 'Proceso intuitivo para seleccionar y confirmar reservas',
          icon: '📅'
        },
        {
          name: 'Flexibilidad Total',
          detail: 'Cancela y reprograma sesiones con facilidad',
          icon: '🔄'
        },
        {
          name: 'Interfaz Intuitiva',
          detail:
            'Diseño accesible para todas las edades y niveles tecnológicos',
          icon: '✨'
        }
      ],

      screenshots: [
        {
          url: '/img-brand/endurance/client-user.png',
          caption: 'Interfaz de usuario con acceso a reservas'
        },
        {
          url: '/img-brand/endurance/client-admin.png',
          caption: 'Vista de calendario y gestión de clases'
        }
      ],

      stack: ['Figma', 'Prototyping', 'User Testing', 'Mobile Design']
    },

    // DELIVERABLE 2: Sitio Web
    website: {
      title: 'Sitio Web',
      subtitle: 'Acceso multiplataforma y presencia digital',
      description:
        'Un sitio web desarrollado para permitir a los usuarios acceder a sus reservas desde cualquier dispositivo con conexión a Internet. Incluye información sobre el gimnasio, programas y tarifas, complementando la experiencia de la app móvil.',

      sections: [
        {
          name: 'Información del Gimnasio',
          detail: 'Presentación completa de instalaciones y servicios'
        },
        {
          name: 'Programas y Clases',
          detail: 'Catálogo detallado de entrenamientos disponibles'
        },
        {
          name: 'Tarifas y Planes',
          detail: 'Información clara sobre membresías y precios'
        },
        {
          name: 'Sistema de Reservas Web',
          detail: 'Acceso completo a la gestión de cupos desde navegador'
        }
      ],

      screenshots: [
        {
          url: '/img-brand/endurance/portada-endurance.png',
          caption: 'Página principal del sitio web'
        },
        {
          url: '/brand_logo/endurance_logo.png',
          caption: 'Identidad visual de Endurance'
        }
      ],

      metrics: [
        { value: '100%', label: 'Acceso multiplataforma' },
        { value: 'Intuitivo', label: 'Experiencia de usuario' },
        { value: 'Responsive', label: 'Diseño adaptable' }
      ],

      stack: ['Figma', 'HTML/CSS', 'Responsive Design', 'Web Development']
    },

    // DELIVERABLE 3: Panel de Administración
    admin: {
      title: 'Panel de Administración',
      subtitle: 'Herramientas de gestión para el gimnasio',
      description:
        'Sistema completo para que los administradores gestionen horarios, clases, usuarios y obtengan insights valiosos sobre la operación del gimnasio.',

      platforms: [
        {
          name: 'Dashboard Principal',
          focus: 'Vista general de la operación diaria',
          formats: [
            'Calendario semanal',
            'Calendario mensual',
            'Vista de reservas'
          ],
          frequency: 'Actualización en tiempo real'
        },
        {
          name: 'Gestión de Clases',
          focus: 'Administración de horarios y capacidad',
          formats: [
            'Crear clases',
            'Modificar horarios',
            'Asignar instructores'
          ],
          frequency: 'Gestión continua'
        },
        {
          name: 'Estadísticas y Reportes',
          focus: 'Análisis de ocupación y tendencias',
          formats: [
            'Reportes de asistencia',
            'Ocupación de clases',
            'Análisis de usuarios'
          ],
          frequency: 'Reportes semanales/mensuales'
        }
      ],

      categories: [
        {
          type: 'Calendario',
          description:
            'Vista semanal y mensual de todas las reservas y clases programadas'
        },
        {
          type: 'Dashboard',
          description: 'Gestión centralizada de horarios, clases y usuarios'
        },
        {
          type: 'Estadísticas',
          description:
            'Visualización de datos sobre ocupación de clases y asistencia'
        },
        {
          type: 'Gestión de Usuarios',
          description: 'Administración de miembros y sus reservas'
        }
      ],

      gallery: [
        {
          url: '/img-brand/endurance/client-admin.png',
          caption: 'Panel de administración completo'
        }
      ],

      deliverables: [
        'Calendario completo de reservas',
        'Dashboard de gestión intuitivo',
        'Sistema de reportes y estadísticas',
        'Gestión de usuarios y clases',
        'Herramientas de optimización de recursos'
      ]
    },

    // Investigación de Usuarios
    research: {
      title: 'Investigación de Usuarios',
      description:
        'Para entender mejor las necesidades y expectativas de los usuarios, se llevaron a cabo entrevistas y encuestas con los miembros del gimnasio.',

      findings: [
        {
          insight: 'Gestión eficiente',
          description:
            'Los administradores necesitaban herramientas eficaces para gestionar horarios, clases y usuarios.'
        },
        {
          insight: 'Necesidad de flexibilidad',
          description:
            'Los usuarios querían poder reservar, cancelar y reprogramar sus sesiones fácilmente.'
        },
        {
          insight: 'Interfaz intuitiva',
          description:
            'La app debía ser fácil de usar, incluso para aquellos con poca experiencia en tecnología tomando en cuenta las distintas edades de los usuarios.'
        }
      ]
    },

    // Proceso de Diseño
    designProcess: {
      title: 'Proceso de Diseño',
      description:
        'Se desarrollaron wireframes de baja fidelidad para delinear la estructura básica de la app y el sitio web, seguidos de prototipos de alta fidelidad testeados con usuarios reales.',

      phases: [
        {
          phase: 'Wireframes',
          description:
            'Estructura básica de la app y sitio web con enfoque en funcionalidad'
        },
        {
          phase: 'Prototipos de Alta Fidelidad',
          description: 'Creación de diseños detallados usando Figma'
        },
        {
          phase: 'Testing con Usuarios',
          description: 'Pruebas de usabilidad para obtener feedback e iterar'
        },
        {
          phase: 'Diseño Visual Final',
          description:
            'Interfaz limpia y moderna con colores frescos y tipografía clara'
        }
      ]
    },

    // Sistema de diseño
    designSystem: {
      title: 'Sistema de Diseño',
      description:
        'El diseño visual se centró en una interfaz limpia y moderna, utilizando colores frescos y tipografía clara para mejorar la legibilidad. Se priorizó la usabilidad y la experiencia de usuario, asegurando que cada elemento en la pantalla tuviera un propósito claro y facilitara la navegación.',

      elements: [
        {
          category: 'Colores Frescos',
          detail: 'Paleta vibrante que transmite energía y motivación'
        },
        {
          category: 'Tipografía Clara',
          detail: 'Fuentes legibles optimizadas para lectura en pantalla'
        },
        {
          category: 'Interfaz Limpia',
          detail: 'Diseño minimalista que prioriza la funcionalidad'
        },
        {
          category: 'Usabilidad Primero',
          detail:
            'Cada elemento tiene un propósito claro y facilita la navegación'
        }
      ]
    },

    // Pruebas de Usabilidad
    usabilityTesting: {
      title: 'Pruebas de Usabilidad',
      description:
        'Se realizaron pruebas de usabilidad con un grupo de usuarios que completaron tareas como reservar una clase y cancelar una reserva, validando la efectividad del diseño.'
    },

    // Links
    links: [{ text: 'Ver Sitio Web', url: 'https://endurancetrainning.cl' }]
  };
</script>

<article class="min-h-screen bg-white">
  <!-- Hero Full Width -->
  <section
    class="relative min-h-screen flex items-center justify-center bg-zinc-900 text-white overflow-hidden"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"
      />
    </div>

    <div class="relative z-10 px-8 md:px-16 text-center max-w-5xl">
      <p class="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-8">
        {project.year} · {project.client}
      </p>
      <h1
        class="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-tight"
      >
        {project.title}
      </h1>
      <p class="text-2xl md:text-3xl font-light text-zinc-300 mb-16">
        {project.tagline}
      </p>

      <div class="flex flex-wrap justify-center gap-8 text-sm">
        <div>
          <p class="text-zinc-500 uppercase tracking-wider mb-2">Duración</p>
          <p class="text-white">{project.duration}</p>
        </div>
        {#each project.team as member}
          <div>
            <p class="text-zinc-500 uppercase tracking-wider mb-2">
              {member.role}
            </p>
            <p class="text-white">{member.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Overview -->
  <section class="py-32 px-8 md:px-16">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          El Proyecto
        </h2>
        <p class="text-xl md:text-2xl font-light leading-relaxed text-zinc-700">
          {project.overview.description}
        </p>
      </div>
      <div class="bg-zinc-50 p-10">
        <h2 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          El Desafío
        </h2>
        <p class="text-base leading-relaxed text-zinc-700">
          {project.overview.challenge}
        </p>
      </div>
    </div>
  </section>

  <!-- Investigación de Usuarios -->
  <section class="py-32 px-8 md:px-16 bg-zinc-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-light mb-8">
        {project.research.title}
      </h2>
      <p class="text-lg text-zinc-600 mb-16 max-w-4xl">
        {project.research.description}
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        {#each project.research.findings as finding}
          <div class="bg-white p-8 border-l-4 border-zinc-900">
            <h3 class="text-lg font-medium mb-4 text-zinc-900">
              {finding.insight}
            </h3>
            <p class="text-sm text-zinc-600 leading-relaxed">
              {finding.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Separador con número -->
  <div class="border-t border-zinc-200 py-4">
    <div class="max-w-6xl mx-auto px-8 md:px-16">
      <span class="text-xs tracking-[0.3em] uppercase text-zinc-400"
        >01 de 03</span
      >
    </div>
  </div>

  <!-- DELIVERABLE 1: APP MÓVIL -->
  <section class="py-32 px-8 md:px-16 bg-gradient-to-b from-white to-zinc-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20">
        <div class="flex items-baseline gap-4 mb-6">
          <span class="text-7xl font-light text-zinc-200">01</span>
          <div>
            <h2 class="text-4xl md:text-5xl font-light mb-2 text-zinc-800">
              {project.webapp.title}
            </h2>
            <p class="text-xl text-zinc-500">{project.webapp.subtitle}</p>
          </div>
        </div>
        <p class="text-lg leading-relaxed text-zinc-600 max-w-3xl">
          {project.webapp.description}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-20">
        {#each project.webapp.features as feature}
          <div class="bg-white p-8 border border-zinc-200">
            <span class="text-4xl mb-4 block">{feature.icon}</span>
            <h3 class="text-xl font-light mb-3 text-zinc-800">
              {feature.name}
            </h3>
            <p class="text-sm text-zinc-600">{feature.detail}</p>
          </div>
        {/each}
      </div>

      <div class="space-y-8">
        {#each project.webapp.screenshots as screenshot}
          <div>
            <img
              src={screenshot.url}
              alt={screenshot.caption}
              class="w-full h-auto shadow-2xl mb-4"
            />
            <p class="text-sm text-zinc-500">{screenshot.caption}</p>
          </div>
        {/each}
      </div>

      <div class="mt-16 pt-16 border-t border-zinc-200">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Herramientas
        </h3>
        <div class="flex flex-wrap gap-3">
          {#each project.webapp.stack as tech}
            <span class="px-4 py-2 bg-zinc-900 text-white text-sm">
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Separador con número -->
  <div class="border-t border-zinc-200 py-4">
    <div class="max-w-6xl mx-auto px-8 md:px-16">
      <span class="text-xs tracking-[0.3em] uppercase text-zinc-400"
        >02 de 03</span
      >
    </div>
  </div>

  <!-- DELIVERABLE 2: SITIO WEB -->
  <section class="py-32 px-8 md:px-16">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20">
        <div class="flex items-baseline gap-4 mb-6">
          <span class="text-7xl font-light text-zinc-200">02</span>
          <div>
            <h2 class="text-4xl md:text-5xl font-light mb-2 text-zinc-800">
              {project.website.title}
            </h2>
            <p class="text-xl text-zinc-500">{project.website.subtitle}</p>
          </div>
        </div>
        <p class="text-lg leading-relaxed text-zinc-600 max-w-3xl">
          {project.website.description}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-20">
        {#each project.website.sections as section}
          <div class="border-l-4 border-zinc-300 pl-6 py-4">
            <h3 class="text-lg font-light mb-2 text-zinc-800">
              {section.name}
            </h3>
            <p class="text-sm text-zinc-600">{section.detail}</p>
          </div>
        {/each}
      </div>

      <div class="space-y-20 mb-20">
        {#each project.website.screenshots as screenshot, i}
          <div class="grid md:grid-cols-12 gap-8 items-center">
            {#if i % 2 === 0}
              <div class="md:col-span-8">
                <img
                  src={screenshot.url}
                  alt={screenshot.caption}
                  class="w-full h-auto shadow-xl"
                />
              </div>
              <div class="md:col-span-4">
                <p class="text-base text-zinc-600">{screenshot.caption}</p>
              </div>
            {:else}
              <div class="md:col-span-4 order-2 md:order-1">
                <p class="text-base text-zinc-600">{screenshot.caption}</p>
              </div>
              <div class="md:col-span-8 order-1 md:order-2">
                <img
                  src={screenshot.url}
                  alt={screenshot.caption}
                  class="w-full h-auto shadow-xl"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <div class="bg-zinc-50 p-12 grid md:grid-cols-3 gap-12">
        {#each project.website.metrics as metric}
          <div class="text-center">
            <p class="text-4xl font-light mb-3 text-zinc-800">{metric.value}</p>
            <p class="text-sm uppercase tracking-wider text-zinc-500">
              {metric.label}
            </p>
          </div>
        {/each}
      </div>

      <div class="mt-16 pt-16 border-t border-zinc-200">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Stack Técnico
        </h3>
        <div class="flex flex-wrap gap-3">
          {#each project.website.stack as tech}
            <span class="px-4 py-2 bg-zinc-900 text-white text-sm">
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Separador con número -->
  <div class="border-t border-zinc-200 py-4">
    <div class="max-w-6xl mx-auto px-8 md:px-16">
      <span class="text-xs tracking-[0.3em] uppercase text-zinc-400"
        >03 de 03</span
      >
    </div>
  </div>

  <!-- DELIVERABLE 3: PANEL DE ADMINISTRACIÓN -->
  <section class="py-32 px-8 md:px-16 bg-gradient-to-b from-white to-zinc-50">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20">
        <div class="flex items-baseline gap-4 mb-6">
          <span class="text-7xl font-light text-zinc-200">03</span>
          <div>
            <h2 class="text-4xl md:text-5xl font-light mb-2 text-zinc-800">
              {project.admin.title}
            </h2>
            <p class="text-xl text-zinc-500">{project.admin.subtitle}</p>
          </div>
        </div>
        <p class="text-lg leading-relaxed text-zinc-600 max-w-3xl">
          {project.admin.description}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-20">
        {#each project.admin.platforms as platform}
          <div class="bg-white p-8 border border-zinc-200">
            <h3 class="text-xl font-light mb-6 text-zinc-800">
              {platform.name}
            </h3>
            <p class="text-sm text-zinc-600 mb-6 italic">{platform.focus}</p>
            <ul class="space-y-2 mb-6">
              {#each platform.formats as format}
                <li class="text-sm text-zinc-600 flex items-start">
                  <span class="text-zinc-400 mr-2">•</span>
                  {format}
                </li>
              {/each}
            </ul>
            <p class="text-xs text-zinc-500">{platform.frequency}</p>
          </div>
        {/each}
      </div>

      <div class="mb-20">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
          Funcionalidades Principales
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          {#each project.admin.categories as category}
            <div class="border-l-4 border-zinc-300 pl-6 py-4">
              <h4 class="text-lg font-light mb-2 text-zinc-800">
                {category.type}
              </h4>
              <p class="text-sm text-zinc-600">{category.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="mb-20">
        {#each project.admin.gallery as template}
          <div>
            <img
              src={template.url}
              alt={template.caption}
              class="w-full h-auto mb-4"
            />
            <p class="text-xs text-zinc-500">{template.caption}</p>
          </div>
        {/each}
      </div>

      <div class="bg-white p-10 border border-zinc-200">
        <h3 class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6">
          Entregables
        </h3>
        <ul class="space-y-3">
          {#each project.admin.deliverables as item}
            <li class="text-base text-zinc-700 flex items-start">
              <span class="text-zinc-400 mr-3">✓</span>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <!-- Proceso de Diseño -->
  <section class="py-32 px-8 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-light mb-8 text-center">
        {project.designProcess.title}
      </h2>
      <p class="text-lg text-zinc-600 text-center mb-16 max-w-3xl mx-auto">
        {project.designProcess.description}
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each project.designProcess.phases as phase}
          <div class="text-center">
            <h3 class="text-lg font-light mb-3 text-zinc-900">{phase.phase}</h3>
            <p class="text-sm text-zinc-600">{phase.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Sistema de Diseño -->
  <section class="py-32 px-8 md:px-16 bg-zinc-900 text-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-light mb-8 text-center">
        {project.designSystem.title}
      </h2>
      <p
        class="text-lg text-zinc-300 leading-relaxed text-center mb-16 max-w-3xl mx-auto"
      >
        {project.designSystem.description}
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each project.designSystem.elements as element}
          <div class="text-center">
            <h3 class="text-lg font-light mb-3 text-white">
              {element.category}
            </h3>
            <p class="text-sm text-zinc-400">{element.detail}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Pruebas de Usabilidad -->
  <section class="py-24 px-8 md:px-16 bg-zinc-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-light mb-8">
        {project.usabilityTesting.title}
      </h2>
      <p class="text-lg text-zinc-700 leading-relaxed">
        {project.usabilityTesting.description}
      </p>
    </div>
  </section>

  <!-- Links/CTA -->
  <section class="py-24 px-8 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto text-center">
      <p class="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8">
        Explorar Proyecto
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
  </section>

  <!-- Footer -->
  <section class="px-8 md:px-16 py-16 bg-zinc-50 border-t border-zinc-200">
    <div class="max-w-6xl mx-auto">
      <a
        href="/proyectos"
        class="group inline-flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <span class="group-hover:-translate-x-1 transition-transform">←</span>
        Volver a proyectos
      </a>
    </div>
  </section>
</article>
