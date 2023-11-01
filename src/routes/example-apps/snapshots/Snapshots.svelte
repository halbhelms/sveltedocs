<script>
  import Screenshot from '$lib/components/page-elements/Screenshot.svelte'
  let verificationCode
  let zipcode

  export const snapshot = {
    capture: () => zipcode,
    restore: (value) => zipcode = value
  }
</script>
<Screenshot>
<input bind:value={verificationCode} placeholder="Verification code" />
<input bind:value={zipcode} placeholder="Zip code" />

<a href="on:click={null}">Leave the site</a>
</Screenshot>