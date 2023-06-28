<script lang="ts">
  import { page } from '$app/stores';

  let isHamburgerMenuOpen = true;
</script>

<header
  class="flex py-4 px-28 items-center justify-between sticky top-0 z-50 bg-[#FEFDFB]"
>
  <a href="/">
    <figure>
      <img alt="Paly Logo" src="/paly.png" height="65" width="65" />
    </figure>
  </a>
  <!-- Empieza: Menu -->
  <nav class="hidden md:inline-block">
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
  <!-- Termina: Menu -->
  <!-- Empieza: Menu Hamburguesa -->
  <button on:click={() => isHamburgerMenuOpen = true} class="md:hidden bg-white">
    Menu
  </button>
  {#if isHamburgerMenuOpen}
    <div class="md:hidden bg-white fixed top-0 left-0 flex flex-col h-screen w-screen z-10">
      <div class="p-4">
        La barra
        <button on:click={() => isHamburgerMenuOpen = false}>SARLANGA</button>
      </div>
      <ul class="flex flex-col space-y-4 items-center p-4 w-full h-full">
        <li class="text-center w-full">
          <a
          class="nav-item nav-item-mobile"
          href="/"
          class:active-nav-item={$page.url.pathname === '/'}>
            Home
          </a>
        </li>
        <li class="text-center w-full">
          <a
            class="nav-item nav-item-mobile"
            href="/proyectos"
            class:active-nav-item={$page.url.pathname.startsWith('/proyectos')}
            >Proyectos</a
          >
        </li>
        <li class="text-center w-full">
          <a
            class="nav-item nav-item-mobile"
            href="/servicios"
            class:active-nav-item={$page.url.pathname.startsWith('/servicios')}
            >Servicios</a
          >
        </li>
        <li class="text-center w-full">
          <a
            class="nav-item nav-item-mobile"
            href="/acerca"
            class:active-nav-item={$page.url.pathname.startsWith('/acerca')}>Acerca</a
          >
        </li>
      </ul>
    </div>
  {/if}
  <!-- Termina: Menu Hamburguesa -->
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
