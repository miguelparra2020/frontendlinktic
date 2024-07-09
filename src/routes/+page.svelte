<script>
	export let data;
	const { products } = data;
	import '../app.css'; // Importa el archivo CSS de Tailwind
</script>
  
<h1 class="text-3xl font-bold mb-4">Lista de Productos</h1>
  
{#if products.length > 0}
  <ul class="space-y-4">
    {#each products as product}
      <li class="border p-4 rounded-lg shadow-md">
        <img src={product.imgProduct} alt={product.nameProduct}>
        <h2 class="text-2xl font-semibold">{product.nameProduct}</h2>
        <p class="text-gray-700">{product.descriptionProduct}</p>
        <p class="text-lg font-bold">Precio: ${product.priceProduct}</p>
        <button 
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          on:click={() => window.location.href = `/product/${product.idProduct}`}
        >
          Ver Producto
        </button>
      </li>
    {/each}
  </ul>
{:else}
  <p class="text-red-500">No hay productos disponibles.</p>
{/if}