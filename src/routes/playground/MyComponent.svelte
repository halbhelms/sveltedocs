<script>
  // props typically send data
  export let name
  const sadly = `No doubt ${name} either has or had an illustrious career.`
</script>

<div class="ml-8">
  <!-- slots display HTML from -->
  <slot>
  <!-- If nothing was passed to be used by slots, the following "fallback", if it exists, will be shown. -->
  Sadly, we don't have any more information about {name}. {sadly}
  </slot>

  <slot name='contributors' />
</div>