<script>
  import SeeMore from '$lib/components/SeeMore.svelte'
  import Docker from '$lib/components/pages/Docker.svelte'
  let defaultComponent = Docker
  let seeMore = false
</script>

<main class="grid grid-cols-[2fr_7fr_2fr] h-full w-full">
  <div class="">Some nav stuff</div>
  <div class="">
   <svelte:component this={defaultComponent} default={defaultComponent}/>
    <p on:click={() => (component = SeeMore)}>Modal time</p>
  </div>
  <div class="">Some other stuff</div>
</main>