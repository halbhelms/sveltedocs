<script>
  import Title from './CardTitle.svelte'
  import Description from './CardDescription.svelte'
  import Button from './CardButton.svelte'
</script>

<div class="card w-72 m-auto">
  <slot {Title} {Description} {Button}/>
</div>