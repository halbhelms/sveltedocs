<script>
  import StunningCard from './StunningCard.svelte'
</script>



<main>
  <StunningCard>
    <svelte:fragment slot="header">
      Wolfgang Amadeus Mozart
    </svelte:fragment>

    <svelte:fragment slot="content">
      Symphonies: 41
    </svelte:fragment>
  </StunningCard>
</main>