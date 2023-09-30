<script>
  export let lineNumber
</script>

<div class="mb-1">
  <span class="bg-indigo-900 w-[38px] text-white items-center justify-center font-mono rounded-full inline-flex">{lineNumber}
  </span><span/>
  <span class="ml-2"><slot /></span>
</div>