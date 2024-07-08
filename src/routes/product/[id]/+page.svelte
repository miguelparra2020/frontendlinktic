<script>
  export let data;
  let { product } = data;
</script>

{#if product}
  <h1>{product.nameProduct}</h1>
  <p>{product.descriptionProduct}</p>
  <p>Precio: ${product.priceProduct}</p>
{:else}
  <p>Cargando producto...</p>
{/if}