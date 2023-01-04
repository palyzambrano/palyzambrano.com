export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api/blog');

	if (res.ok) {
		const posts = await res.json();

		return {
			posts
		};
	}

	return {
		posts: []
	};
}
