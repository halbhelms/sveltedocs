<script>
  import { enhance } from '$app/forms'
  export let data
  export let form
 $: links = data.links
</script>

<!-- display links -->
<h1 class="text-center mt-4 text-xl text-indigo-800">Slug/Component Pairs</h1>
<a href="/explainers-admin/create" class="text-center mb-4 text-xs text-indigo-800 block">Create a new slug/component pair</a>

<h2 class="text-center text-sm">{form?.message || ''}</h2>
<form method="POST" class="border mx-auto w-[900px]" use:enhance={({ formData, submitter }) => {
  formData.set('id', submitter.name)
  return async ({ result, update }) => {update()}
}}
>
<div class="">
  {#each links as link}
    <div class="grid grid-cols-[30px_40px_1fr_1fr] border-b-2">
      <button class="text-xs" name={link.id}>x</button>
      <div class="inline-block">{link.id}</div>
      <div class="inline-block">{link.slug}</div>
      <div class="inline-block">{link.main_component}</div>
    </div>
  {/each}
</div>

</form>


