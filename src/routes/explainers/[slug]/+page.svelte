<script>
  import { onMount } from 'svelte'
  export let data;
  console.log(data.explainer.main_component)
  let DynamicComponent

  onMount( async () => {
    if (typeof window !== 'undefined') {
     DynamicComponent = (await import(`../${data.explainer.main_component}`)).default
    }
  })
</script>

<svelte:component this={DynamicComponent} />
<!-- <Docker /> -->


