<script>
  export let data;
</script>

<form method="POST" class="text-center w-[400px] mx-auto">
  <div class="grid grid-cols-[2fr_1fr] mb-2">
    <label for="parent_link_id">Parent link id</label>
    <input type="text" name="parent_link_id" id="parent_link_id">
  </div>
  <div class="grid grid-cols-[2fr_1fr] mb-2">
    <label for="child_link_id">Child link id</label>
    <input type="text" name="child_link_id" id="child_link_id">
  </div>
  <button class="border-solid border-[3px] px-4 rounded-full border-indigo-500">Create related link</button>
</form>
