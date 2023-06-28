<script lang="ts">
  export let tools: string[];

  // Traduce el KW (xd, ps, ai) a un URL si no se soporta
  // devuelve null
  function keywordToUrl(kw: string): string | null {
    const URLS: Record<string, string> = {
      xd: '/brand_logo/basquiart_logo.png',
      ps: ''
    };

    return URLS[kw] || null;
  }
</script>

<ul>
  {#each tools as t}
    {#if keywordToUrl(t)}
      <li>
        <img src={keywordToUrl(t)} alt={t} />
      </li>
    {/if}
  {/each}
</ul>
