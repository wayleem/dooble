<script lang="ts">
	import routes from './routes';
</script>

<div
	class="sticky top-0 flex py-3 px-4 text-black shadow justify-center items-center font-header bg-white space-x-8"
>
	<span class="flex items-center text-sm space-x-8">
		{#each routes as route}
			<a href={route.href}>{route.label}</a>
		{/each}
		<a href="/cart">
			<img
				width="18"
				height="18"
				src="https://img.icons8.com/external-those-icons-lineal-those-icons/96/external-basket-camping-hiking-those-icons-lineal-those-icons.png"
				alt="cart"
			/>
		</a>
	</span>
</div>
