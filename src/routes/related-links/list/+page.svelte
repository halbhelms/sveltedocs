<script>
  export let data;
  const { relatedLinks } = data
  $: helpfulLinks = relatedLinks
</script>

<div>
  {#each helpfulLinks as helpfulLink}
  <a href="" class="block">{helpfulLink.main_component}</a>
  {/each}
</div>