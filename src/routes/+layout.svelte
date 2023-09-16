<script>
  import "../app.css";
  import MainNavHeader from '$lib/components/navigation/MainNavHeader.svelte'
</script>

<main class="antialiased  font-['Roboto Condensed'] gap-2 w-full  bg-gray-200 py-1 pr-4">
  <div>
    <MainNavHeader />
  </div>
</main>
<slot />