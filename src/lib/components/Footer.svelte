<script lang="ts">
  import Instagram from '~icons/custom/instagram';
  import Github from '~icons/custom/github';
  import Behance from '~icons/custom/behance';
  import Linkedin from '~icons/custom/linkedin';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-zinc-700 text-slate-50 fill-slate-50">
  <section class="flex flex-col text-center pt-4">
    <h5 class="text-lg font-normal">Gracias por venir</h5>
    <span class="text-base font-extralight"
      >También puedes visitarme por acá</span
    >
    <div class="flex justify-center space-x-2 my-2 content-center">
      <a
        class="w-12 h-12 flex"
        href="https://www.behance.net/palyzambrano"
        target="_blank"
      >
        <Behance class="m-auto" />
      </a>
      <a
        class="w-12 h-12 flex"
        href="https://github.com/palyzambrano"
        target="_blank"
      >
        <Github class="m-auto" />
      </a>
      <a
        class="w-12 h-12 flex"
        href="https://www.linkedin.com/in/palyzambrano"
        target="_blank"
      >
        <Linkedin class="m-auto" />
      </a>
      <a
        class="w-12 h-12 flex"
        href="https://www.instagram.com/palyzambrano"
        target="_blank"
      >
        <Instagram class="m-auto" />
      </a>
    </div>
  </section>

  <div class="text-slate-50 p-2 bg-black">
    <p class="text-sm text-center">
      {currentYear} Diseñado y Desarrollado por Paulina Zambrano
    </p>
  </div>
</footer>
