<script lang="ts">
	import { page } from '$app/stores';
	import { addToCart } from '../../../cart';
	const product = $page.data;
	let size = 'S';
	let theme = 'white';

	$: sku = `${product.id}-${size}-${theme}`;

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

	let sizes = ['S', 'M', 'L'];
</script>

<div class="flex flex-col lg:flex-row text-black bg-white p-10">
	<!-- left -->
	<div class="flex flex-1 justify-center lg:justify-start">
		<img class="max-w-xs lg:max-w-md" alt="display" src={product.variations[0].img} />
	</div>

	<!-- right -->
	<div class="flex flex-1 flex-col space-y-4 justify-start mt-10 lg:mt-0">
		<h1 class="text-4xl mb-4">{product.name}</h1>

		<!-- Color Selection -->
		<div>
			<span>Color</span>

			<ul class="flex space-x-4 h-fit">
				{#each themes as t}
					<button
						class="flex justify-center items-center w-[14rem] h-[8rem] rounded-xl {theme === t
							? 'border-2 border-blue-500'
							: 'border border-black'}"
						on:click={() => (theme = t)}
					>
						<i class={`rounded-full w-8 h-8 shadow-inner ${getTheme(t)}`} />
					</button>
				{/each}
			</ul>
		</div>

		<!-- Size Selection -->
		<div>
			<span>Size</span>
			<ul class="flex space-x-4 h-fit">
				{#each sizes as s}
					<button
						class="rounded-md px-4 py-2 {size === s ? 'bg-neutral-200' : 'bg-white'}"
						on:click={() => (size = s)}
					>
						{s}
					</button>
				{/each}
			</ul>
		</div>
		<span class="text-xl">${product.price} USD</span>
		<button class="bg-sky-200 rounded-[18px] w-fit p-2" on:click={() => addToCart(sku)}
			>Add to Cart</button
		>
		<!-- Additional content -->
	</div>
</div>
