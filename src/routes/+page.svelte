<script>
	export let data;
	const { products } = data;
  </script>
  
  <h1>Lista de Productos</h1>
  
  {#if products.length > 0}
	<ul>
	  {#each products as product}
		<li>
		  <h2>{product.nameProduct}</h2>
		  <p>{product.descriptionProduct}</p>
		  <p>Precio: ${product.priceProduct}</p>
		</li>
	  {/each}
	</ul>
  {:else}
	<p>No hay productos disponibles.</p>
  {/if}
  