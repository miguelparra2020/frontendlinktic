/**
 * @type {import('./$types').PageLoad}
 */
export const load = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://backend-linktic-project-miguel-paez.onrender.com/products/${id}`);
    const product = await response.json();
  
    return {
      product
    };
  };