<script>
  import { onMount } from 'svelte'
  export let data;
  const { explainer } = data
  let DynamicComponent

  onMount( async () => {
    if (typeof window !== 'undefined') {
     DynamicComponent = (await import(`../${data.explainer.main_component}`)).default
    }
  })
</script>

<svelte:component this={DynamicComponent} />
<!-- <Docker /> -->


