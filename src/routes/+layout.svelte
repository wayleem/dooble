<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="h-full w-full bg-neutral-100">
	<NavBar />
	<div>
		<slot />
	</div>
</div>
