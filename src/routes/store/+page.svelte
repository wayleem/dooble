<script lang="ts">
	import products from '$lib/products';
	import ProductCard from '$lib/ProductCard.svelte';
</script>

<div class="flex w-screen bg-white justify-center items-center">
<<<<<<< Updated upstream
	<div class="grid grid-cols-2 gap-4 p-10">
		{#each products as product}
			<ProductCard
				link={`/store/${product.slug}`}
				name={product.name}
				price={product.price}
				variations={product.variations}
			/>
		{/each}
	</div>
=======
<div class="grid grid-cols-3 gap-20 p-10">
	{#each products as product}
		<ProductCard
			link={`/store/${product.slug}`}
			name={product.name}
			price={product.price}
			variations={product.variations}
		/>
	{/each}
>>>>>>> Stashed changes
</div>
