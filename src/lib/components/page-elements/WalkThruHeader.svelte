<script>
  export let fileName
  let ext = ''
  if (fileName) {
    ext = `for ${fileName}`
  }
</script>
<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru {@html ext}</p>