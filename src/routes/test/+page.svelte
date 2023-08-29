<script>
  import SeeMoreClose from '$lib/components/page-elements/SeeMoreClose.svelte'
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte'
  let modalVisible = false
  function seeMoreClose() {
    visible = false
  }
</script>

<PageTitle title="Deep Dive: <code class='text-purple-700'>+page.server.js</code>" />

{#if modalVisible}
  Info
{:else}
  Regular info
{/if}

<PageSubTitle subTitle="The <code class='text-purple-700'>load</code> function" />

<SeeMoreClose class="text-xs" on:SeeMoreClose={seeMoreClose} />