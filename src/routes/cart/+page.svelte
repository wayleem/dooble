<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems } from '../../cart';

	let cart = get(cartItems);

	cartItems.subscribe((newCart) => {
		cart = newCart;
	});
</script>

<div>
	<span class="text-black">Placeholder cart</span>
	{#each cart as item}
		<div class="text-black">
			{item.product.sku}
		</div>
	{/each}
</div>
