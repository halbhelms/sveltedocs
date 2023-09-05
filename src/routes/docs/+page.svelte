<!-- I am the main page for /docs -->
<script>
  import SeeMoreLink from '$lib/components/page-elements/SeeMoreLink.svelte'
  import SeeMoreClose from '$lib/components/page-elements/SeeMoreClose.svelte'
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte'
  import SeeMoreViewer from '$lib/components/page-elements/SeeMoreViewer.svelte'

  import Docker from '$lib/components/pages/Docker.svelte'

  // related components
  import PageJS from '$lib/components/see-mores/PageJS.svelte'
  import PageServerJS from '$lib/components/see-mores/PageServerJS.svelte'

  let relatedComponents = {
    1: PageJS,
    2: PageServerJS
  }
  let seeMore = 0

  function seeMoreClose() {
    modalVisible = false
  }

  function changeSeeMore(event) {
    seeMore = event.detail.id
  }
</script>

{seeMore}


{#if seeMore}
  <svelte:component this={relatedComponents[seeMore]} on:change_see_more={changeSeeMore}/>
  <!-- <PageServerJS /> -->
{:else}
  <Docker on:change_see_more={changeSeeMore}/>
{/if}