/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const modules = import.meta.glob('../../blog/*.svx');
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

  const posts = await Promise.all(promises);
  const sorted = posts.sort((a, b) =>
    +new Date(a.date) > +new Date(b.date) ? -1 : 1
  );

  return new Response(JSON.stringify(sorted));
}
