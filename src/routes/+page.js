// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, depends }) {
	const response = await fetch('https://backend-linktic-project-miguel-paez.onrender.com/products');
	const products = await response.json();

    // Imprime los productos en la consola
    console.log(products);

	// Utiliza `depends` para invalidar los datos cuando sea necesario
	depends('app:random');

	return {
		products
	};
}
