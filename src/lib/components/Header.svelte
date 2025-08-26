<script lang="ts">
  import { page } from '$app/stores';

  let isHamburgerMenuOpen = false;
</script>

<header
  class="fixed w-full flex py-4 px-28 items-center justify-between top-0 z-50 bg-slate-50"
>
  <a href="/galeria">
    <figure>
      <img alt="Paly Logo" src="/paly.png" height="65" width="65" />
    </figure>
  </a>
  <!-- Empieza: Menu derecha-->
  <nav class="hidden md:inline-block">
    <a
      class="nav-item"
      href="/galeria"
      class:active-nav-item={$page.url.pathname.startsWith('/galeria')}
      >Galería</a
    >
    <a
      class="nav-item"
      href="/procesos"
      class:active-nav-item={$page.url.pathname.startsWith('/procesos')}
      >Procesos</a
    >
    <a
      class="nav-item"
      href="/acerca"
      class:active-nav-item={$page.url.pathname.startsWith('/acerca')}
      >Sobre mi</a
    >
  </nav>
  <!-- Termina: Menu derecha -->
  <!-- Empieza: Menu Hamburguesa -->
  <button
    on:click={() => (isHamburgerMenuOpen = true)}
    class="md:hidden bg-white"
  >
    Menu
  </button>
  {#if isHamburgerMenuOpen}
    <div
      class="md:hidden bg-white fixed top-0 left-0 flex flex-col h-screen w-screen z-10"
    >
      <div class="p-4">
        <button on:click={() => (isHamburgerMenuOpen = false)}>x</button>
      </div>
      <ul class="flex flex-col space-y-4 items-center p-4 w-full h-full">
        <li class="text-center w-full">
          <a
            on:click={() => (isHamburgerMenuOpen = false)}
            class="nav-item nav-item-mobile"
            href="/galeria"
            class:active-nav-item={$page.url.pathname.startsWith('/galeria')}
            >Galería</a
          >
        </li>
        <li class="text-center w-full">
          <a
            on:click={() => (isHamburgerMenuOpen = false)}
            class="nav-item nav-item-mobile"
            href="/procesos"
            class:active-nav-item={$page.url.pathname.startsWith('/procesos')}
            >Procesos</a
          >
        </li>
        <li class="text-center w-full">
          <a
            on:click={() => (isHamburgerMenuOpen = false)}
            class="nav-item nav-item-mobile"
            href="/acerca"
            class:active-nav-item={$page.url.pathname.startsWith('/acerca')}
            >Sobre mi</a
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
    font-size: 14px;
    font-weight: 400;
    position: relative;
    cursor: pointer;
  }

  .active-nav-item {
    font-weight: bold;
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
  }
</style>
