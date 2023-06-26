<script lang="ts" context="module">
  export type Slide = {
    src: string;
  };

  export const HEIGHT: number = 100;
  export const WIDTH: number = 250;
</script>

<script lang="ts">
  export let slides: Slide[];
</script>

<div class="infinite-carousel">
  <div class="infinite-carousel-track">
    {#each slides as slide}
      <div class="infinite-carousel-slide">
        <slot {slide} />
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  .infinite-carousel {
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .infinite-carousel &::before,
  .infinite-carousel &::after {
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  .infinite-carousel &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  .infinite-carousel &::before {
    left: 0;
    top: 0;
  }

  .infinite-carousel .infinite-carousel-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .infinite-carousel .infinite-carousel-slide {
    height: 100px;
    width: 250px;
  }
</style>
