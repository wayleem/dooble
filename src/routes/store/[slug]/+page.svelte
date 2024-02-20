<script lang="ts">
	import { page } from '$app/stores';
	import { addToCart } from '../../../cart';
	const product = $page.data;
	let variation = 0;

	let theme_set = new Set<string>();
	product.variations.forEach((v: Variation) => {
		theme_set.add(v.theme);
	});
	let themes: string[] = Array.from(theme_set);

	const color_keys: Record<string, string> = {
		white: 'bg-neutral-100',
		black: 'bg-neutral-700',
		coffee: 'bg-yellow-950',
		sea: 'bg-teal-400',
		space: 'bg-purple-800'
	};

	function getTheme(theme: string): string {
		return color_keys[theme];
	}
</script>

<div class="flex flex-col lg:flex-row text-black bg-white p-10">
	<div class="flex flex-1 justify-center lg:justify-start">
		<!-- Image container with max-width set -->
		<img class="max-w-xs lg:max-w-md" alt="display" src={product.variations[0].img} />
	</div>
	<div class="flex flex-1 flex-col justify-start mt-10 lg:mt-0">
		<h1 class="text-4xl mb-8">{product.name}</h1>

		<ul class="flex space-x-4 h-fit">
			{#each themes as theme}
				<div
					class="flex justify-center items-center w-[14rem] h-[8rem] border border-black rounded-xl"
				>
					<i class="rounded-full w-8 h-8 shadow-inner {getTheme(theme)}" />
				</div>
			{/each}
		</ul>
		<span class="text-xl">${product.price} USD</span>
		<button
			class="bg-sky-200 rounded-[18px] w-fit p-2"
			on:click={() => addToCart(product.variations[variation].sku)}>Add to Cart</button
		>
		<!-- Additional content -->
	</div>
</div>
