<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header"><NavBar /></svelte:fragment>
	<slot />
</AppShell>
