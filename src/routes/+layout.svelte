<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="bg-white">
	<NavBar />
	<div class="h-screen bg-secondary-50">
		<slot />
	</div>
</div>
