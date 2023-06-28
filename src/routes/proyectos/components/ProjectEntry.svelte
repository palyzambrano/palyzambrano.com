<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Share from '$lib/components/Share.svelte';
  import Enviar from '~icons/custom/share';
  import { goto } from '$app/navigation';

  export let item: PalyzambranoDotCom.ProjectItem;

  let date = new Date(item.date);
</script>

<article
  class="bg-[#FAF7EF] flex flex-col w-[360px] md:w-[380px] h-[560px] text-left justify-between border border-zinc-900 rounded-2xl mt-6"
>
  <div class="flex justify-end pt-4 pr-4">
    <Share
      title={item.title}
      text={item.description}
      url="/proyectos/{item.slug}"> <Enviar class="m-auto"></Enviar> </Share
    >
  </div>
  <div class="-mt-16">
    <div class=" ml-6 w-4/5">
      <span class=" mt-8">
        {item.project}
      </span>
      <h3 class="text-2xl">
        {item.title}
      </h3>
      <p>{item.description}</p>
    </div>
    <div class=" ml-6 mt-4">
      <Button on:click={() => goto(`/proyectos/${item.slug}`)}>ver más</Button>
    </div>
  </div>
  <div>
    <figure class="h-[320px] overflow-hidden rounded-2xl">
      <img
        class="object-cover"
        src={item.preview_image_url}
        height="350"
        alt=""
      />
    </figure>
  </div>
</article>
