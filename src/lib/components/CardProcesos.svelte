<script lang="ts">
  export let item: PalyzambranoDotCom.ProjectItem;
</script>

<a href="*">
  <article class="flex px-16">
    <img
      class="w-16 h-16 object-cover"
      src="/procesos/colomba/col-procesos.png"
      alt=""
    />
    <div class="flex flex-col justify-between pl-4">
      <h4 class="pt-1 uppercase">{item.title}</h4>
      <span>12/12/2024</span>
    </div>
  </article>
</a>
