<script lang="ts">
	export let link: string, name: string, price: number, variations: Variation[];

  let theme_set = new Set<string>();
  variations.forEach(v => {
    theme_set.add(v.theme);
  });
  let themes: string[] = Array.from(theme_set);

	const color_keys: Record<string, string> = {
		white: 'bg-white shadow-slate-200',
		black: 'bg-black',
		coffee: 'bg-yellow-950',
		sea: 'bg-teal-400',
		space: 'bg-purple-800'
	};

	function getTheme(theme: string): string {
		return color_keys[theme];
	}
</script>

<a class="flex flex-col w-[20rem] h-[32rem] rounded-lg shadow text-black p-8" href={link}>
	<img class="self-center h-2/3" alt="placeholder" src="" />
	<div class="flex flex-col space-y-16">
		<ul class="flex space-x-2 self-center h-fit">
			{#each themes as theme}
				<i class="rounded-full w-3 h-3 shadow-inner {getTheme(theme)}" />
			{/each}
		</ul>
		<span class="text-xl font-header">{name}</span>
		<span class="text-sm font-body">${price}</span>
	</div>
</a>
