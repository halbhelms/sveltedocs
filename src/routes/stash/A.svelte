<script>
  import { getContext } from 'svelte'
  const customer = getContext('customer')
</script>

Hello, {customer.name}.
{#if customer.status == 200}
  Feel free to use all our services
{:else}
  There appears to be a problem with your account. Please contact your Account Manager, {customer.accountManager}.
{/if}