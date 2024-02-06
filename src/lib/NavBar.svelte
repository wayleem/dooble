<script>
	const routes = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/store',
			label: 'Store'
		},
		{
			href: '/support',
			label: 'Support'
		}
	];
</script>

<div
	class="flex flex-col pb-16 pt-4 text-black bg-white shadow justify-center items-center space-y-6 font-header"
>
	<h1 class="text-6xl">Dooble</h1>
	<div class="flex space-x-10">
		{#each routes as route}
			<a class="" href={route.href}>{route.label}</a>
		{/each}
	</div>
</div>
