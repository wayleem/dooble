<script lang="ts">
	import products from '$lib/products';
	import ProductCard from '$lib/ProductCard.svelte';
</script>

<div class="bg-white grid grid-cols-4 gap-4 p-10">
	{#each products as product}
		<ProductCard
			link={product.href}
			name={product.name}
			price={product.price}
			themes={product.themes}
		/>
	{/each}
</div>
