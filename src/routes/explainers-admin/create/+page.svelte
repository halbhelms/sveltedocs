<script>
  export let form
</script>

<h1 class="text-center mt-4 text-xl text-indigo-800">Create a Slug/Component Pair</h1>
<a href="/explainers-admin/list" class="text-center text-xs text-indigo-800 block">Links List</a>

<p class="text-red-500 mx-auto text-center">{@html form?.message || 'Isn\'t <i>slug</i> kind of pejorative?'}</p>
<form method="POST" class="mt-4 w-[600px] mx-auto grid">
  <div class="grid grid-cols-[1fr_2fr] gap-2 mb-2">
    <label for="slug" class="text-right">Slug</label>
    <input type="text" id="slug" class="" name="slug">
  </div>

  <div class="grid grid-cols-[1fr_2fr] w-[600px] gap-2 mb-2">
    <label for="main_component" class="text-right">Component</label>
    <input type="text" id="main_component" class="" name="main_component">
  </div>

  <button class="rounded-full bg-indigo-700 text-white border mx-auto w-24">Submit</button>
</form>

