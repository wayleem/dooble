<script lang="ts">
	import products from '$lib/products';
	import ProductCard from '$lib/ProductCard.svelte';
</script>

<div class="bg-white grid gap-4 p-10">
	{#each products as product}
		<ProductCard
			link={`/store/${product.slug}`}
			name={product.name}
			price={product.price}
			variations={product.variations}
		/>
	{/each}
</div>
