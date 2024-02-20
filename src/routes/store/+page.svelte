<script lang="ts">
	import products from '$lib/products';
	import ProductCard from '$lib/ProductCard.svelte';
</script>

<div class="flex flex-col w-screen">
	<span class="px-32 mb-2 text-2xl text-black font-semibold">All Lines</span>
	<div class="pl-32 mb-8 flex flex-nowrap space-x-12 overflow-auto py-2">
		{#each products as product}
			<div class="flex-none w-[24rem] rounded-[18px] shadow-lg bg-white text-black">
				<ProductCard
					link={`/store/${product.slug}`}
					name={product.name}
					price={product.price}
					variations={product.variations}
				/>
			</div>
		{/each}
	</div>
	<span class="px-32 mb-2 text-xl text-black mt-4 font-semibold">Duodles. Go in pairs.</span>
	<div class="pl-32 mb-8 flex flex-nowrap space-x-6 overflow-auto py-2">
		{#each products as product}
			<div class="flex-none w-[18rem] rounded-[18px] shadow-lg bg-white text-black">
				<ProductCard
					link={`/store/${product.slug}`}
					name={product.name}
					price={product.price}
					variations={product.variations}
				/>
			</div>
		{/each}
	</div>
	<span class="px-32 mb-2 text-xl text-black mt-4 font-semibold">Collaborations</span>
	<div class="pl-32 mb-8 flex flex-nowrap space-x-6 overflow-auto py-2">
		{#each products as product}
			<div class="flex-none w-[18rem] rounded-[18px] shadow-lg bg-white text-black">
				<ProductCard
					link={`/store/${product.slug}`}
					name={product.name}
					price={product.price}
					variations={product.variations}
				/>
			</div>
		{/each}
	</div>
</div>
