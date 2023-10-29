<script>
  export let useLink = false
  export let href = '#'
  export let text = 'Click'
</script>

<svelte:element this= {useLink ? 'a' : 'button'}  href={useLink ? href : undefined} on:click={() => alert('Clicked!')} class:border-2={!useLink} class:border-black={!useLink}>
  {text}
</svelte:element>