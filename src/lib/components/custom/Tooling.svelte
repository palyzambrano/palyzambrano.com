<script lang="ts">
  export let tools: string[];

  // Traduce el KW (xd, ps, ai) a un URL si no se soporta
  // devuelve null
  function keywordToUrl(kw: string): string | null {
    const URLS: Record<string, string> = {
      xd: '/img-tools/xd.png',
      ps: '/img-tools/ps.png',
      ai: '/img-tools/ai.png',
      wp: '/img-tools/wp.png',
      js: '/img-tools/js.png',
      fig: '/img-tools/fig.png'
    };

    return URLS[kw] || null;
  }
</script>

<ul class="flex flex-row space-x-2 my-4 border-y-gray-900 border-x-0 border">
  {#each tools as t}
    {#if keywordToUrl(t)}
      <li>
        <img class="w-10 my-4" src={keywordToUrl(t)} alt={t} />
      </li>
    {/if}
  {/each}
</ul>
