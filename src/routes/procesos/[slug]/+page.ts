export async function load({ params }) {
  const post = await import(`../svx/${params.slug}.svx`);
  const content = post.default;

  return {
    content
  };
}
