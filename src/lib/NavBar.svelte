<script lang="ts">
	import { onMount } from 'svelte';
	import routes from './routes';

	let previousY = 0;
	let offscreen = false;

	// Function to handle scroll and determine if the navbar should go offscreen
	function handleScroll() {
		const currentY = window.scrollY;
		const direction = previousY < currentY ? 'down' : 'up';
		const threshold = 100; // You can adjust this threshold

		offscreen = direction === 'down' && currentY > threshold;
		previousY = currentY;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
<<<<<<< Updated upstream
  class="navbar sticky top-0 flex flex-col pb-16 pt-4 text-black shadow justify-center items-center space-y-6 font-header backdrop-blur-sm {offscreen ? 'offscreen' : ''}"
=======
	class="sticky top-0 flex flex-col pb-16 pt-4 text-black shadow justify-center items-center space-y-6 font-header backdrop-blur-sm {offscreen
		? 'offscreen'
		: ''}"
>>>>>>> Stashed changes
>
	<h1 class="text-6xl">Dooble</h1>
	<div class="flex space-x-10">
		{#each routes as route}
			<a href={route.href}>{route.label}</a>
		{/each}
	</div>
</div>

<style>
	.navbar {
		transition: transform 0.3s ease-in-out;
	}
	.offscreen {
		transform: translateY(-100%);
	}
</style>
