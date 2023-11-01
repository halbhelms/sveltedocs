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
  <p class="my-2">
    <input bind:value={zipcode} placeholder='Zip code' /><br />
    <input bind:value={verificationCode} placeholder='Verification code' /> <br />

<a href={null} class="ml-[28px] mt-8">Click here to get a verification code</a>
  </p>
</Screenshot>

<style>
  input {
    border: 1px solid grey;
    margin-top: 28px;
    margin-left: 28px;
  }
</style>
