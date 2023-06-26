<script lang="ts">
  import Instagram from '~icons/custom/instagram';
  import Github from '~icons/custom/github';
  import Behance from '~icons/custom/behance';
  import Linkedin from '~icons/custom/linkedin';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#D1CDFF]">
  <section class="flex flex-col text-center  py-10">
    <h5 class="text-lg font-normal">Gracias por venir</h5>
    <span class="text-base font-extralight"
      >También puedes visitarme por acá</span
    >
    <div class="flex justify-center space-x-4 my-4 content-center">
      <a
        class="rounded-full border-black border w-14 h-14 flex"
        href="https://www.behance.net/palyzambrano"
        target="_blank"
      >
        <Behance class="m-auto " />
      </a>
      <a
        class="rounded-full border-black border w-14 h-14 flex"
        href="https://github.com/palyzambrano"
        target="_blank"
      >
        <Github class="m-auto" />
      </a>
      <a
        class="rounded-full border-black border w-14 h-14 flex"
        href="https://www.linkedin.com/in/palyzambrano"
        target="_blank"
      >
        <Linkedin class="m-auto " />
      </a>
      <a
        class="rounded-full border-black border w-14 h-14 flex"
        href="https://www.instagram.com/palyzambrano"
        target="_blank"
      >
        <Instagram class="m-auto" />
      </a>
    </div>
  </section>

  <div class="text-black p-2 bg-[#ABA3FF]">
    <p class="text-sm text-center">{currentYear} Diseñado y Desarrollado por Paulina Zambrano </p>
  </div>
</footer>
