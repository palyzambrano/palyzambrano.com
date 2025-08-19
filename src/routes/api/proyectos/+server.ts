/** @type {import('./$types').RequestHandler} */
export async function GET(obj) {
  const isFavorite = JSON.parse(obj.url.searchParams.get('isFavorite'));
  const modules = import.meta.glob('../../procesos/svx/*.svx');
  const promises = [];

  for (const [path, resolver] of Object.entries(modules)) {
    const promise = resolver().then((note: { metadata: object }) => {
      const slug = path.match(/([\w-]+)(\.)/i)?.[1] ?? null;

      return {
        slug,
        ...note.metadata
      };
    });

    promises.push(promise);
  }

  const items = await Promise.all(promises);
  const sorted = items.sort((a, b) =>
    +new Date(a.date) > +new Date(b.date) ? -1 : 1
  );
  if (isFavorite) {
    const filtered = sorted.filter((item) => item.favorite);
    return new Response(JSON.stringify(filtered));
  }
  return new Response(JSON.stringify(sorted));
}
