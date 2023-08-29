<script>
  import "../app.css";
  import MainNavHeader from '$lib/components/navigation/MainNavHeader.svelte'
</script>

<main class="antialiased grid grid-cols-header font-['Roboto Condensed'] gap-2 my-4 mx-4 bg-gray-200 pt-4 px-4">
  <div>Welcome to SvelteDocs</div>
  <div>
    <MainNavHeader />
  </div>
</main>
<slot />