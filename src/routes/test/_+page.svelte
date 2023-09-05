<script>
  import SeeMoreClose from '$lib/components/page-elements/SeeMoreClose.svelte'
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte'
  import SeeMoreViewer from '$lib/components/page-elements/SeeMoreViewer.svelte'
  let modalVisible = 0

  function seeMoreClose() {
    modalVisible = false
  }
</script>

<PageTitle title="Deep Dive: <code class='text-purple-700'>+page.server.js</code>" />

{#if modalVisible}
  <SeeMoreViewer seeMoreID = 1 />
{:else}
  Regular info
{/if}

<PageSubTitle subTitle="The <code class='text-purple-700'>load</code> function" />

<p>The <code>load function</code> appears in both the <SeeMoreLink linkedText="<code>+page.js</code>" seeMoreID="1" /></p>

<SeeMoreClose class="text-xs" on:SeeMoreClose={seeMoreClose} />