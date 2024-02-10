<script lang="ts">
	import { page } from '$app/stores';
	const product = $page.data;
</script>

<div class="flex flex-col lg:flex-row text-black bg-white p-10">
  <div class="flex flex-1 justify-center lg:justify-start">
    <!-- Image container with max-width set -->
    <img class="max-w-xs lg:max-w-md" alt="display" src={product.variations[0].img}/>
  </div>
  <div class="flex flex-1 flex-col justify-start mt-10 lg:mt-0">
    <h1 class="text-4xl mb-8">{product.name}</h1>
    <span class="text-xl">${product.price} USD</span>
    <!-- Additional content -->
  </div>
</div>
