<script lang="ts">
  export let item: PalyzambranoDotCom.ProjectItem;
  console.log(item);
</script>

<a href="procesos/{item.slug}">
  <article class="flex px-16">
    <img
      class="w-16 h-16 object-cover"
      src={item.preview_image_url}
      alt="foto cliente"
    />
    <div class="flex flex-col justify-between pl-4">
      <h4 class="pt-1 uppercase">{item.title}</h4>
      <span>item date</span>
    </div>
  </article>
</a>
