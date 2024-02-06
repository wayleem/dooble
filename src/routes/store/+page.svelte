<script lang="ts">
	import products from '$lib/products';
</script>

<div>
	{#each products as product}
		<h1>{product.name}</h1>
	{/each}
</div>
