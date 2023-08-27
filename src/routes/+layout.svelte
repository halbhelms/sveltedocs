<script>
  import "../app.css";
  import MainNavHeader from '$lib/components/navigation/MainNavHeader.svelte'
</script>

<main class="antialiased grid grid-cols-header font-['Roboto Condensed'] gap-2 mt-4 mx-4">
  <div>Welcome to SvelteDocs</div>
  <div>
    <MainNavHeader />
  </div>
</main>
<slot />