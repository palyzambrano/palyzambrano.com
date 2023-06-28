<script lang="ts">
  import { page } from '$app/stores';
</script>

<header
  class="flex py-4 px-28 items-center justify-between sticky top-0 z-50 bg-[#FEFDFB]"
>
  <a href="/">
    <figure>
      <img alt="Paly Logo" src="/paly.png" height="65" width="65" />
    </figure>
  </a>
  <nav>
    <a
      class="nav-item"
      href="/"
      class:active-nav-item={$page.url.pathname === '/'}>Home</a
    >
    <a
      class="nav-item"
      href="/proyectos"
      class:active-nav-item={$page.url.pathname.startsWith('/proyectos')}
      >Proyectos</a
    >
    <a
      class="nav-item"
      href="/servicios"
      class:active-nav-item={$page.url.pathname.startsWith('/servicios')}
      >Servicios</a
    >
    <a
      class="nav-item"
      href="/acerca"
      class:active-nav-item={$page.url.pathname.startsWith('/acerca')}>Acerca</a
    >
  </nav>
</header>

<style>
  .nav-item {
    padding: 8px 28px;
    height: 40px;
    border-radius: 20px;
    font-size: 17px;
    font-weight: 400;
    position: relative;
    cursor: pointer;
  }

  .active-nav-item {
    background-color: #d1cdff;
    color: #121212;
    z-index: 2;
  }
  .active-nav-item::before {
    background-color: transparent;
    content: '';
    top: 3px;
    position: absolute;
    left: 3px;
    width: 100%;
    height: 100%;
    border: 1px solid #121212;
    border-radius: 20px;
  }
</style>
