export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('/api/proyectos');

  if (res.ok) {
    const items = await res.json();

    return {
      items
    };
  }

  return {
    items: []
  };
}
