<script>
  export let lineNumber
  export let end
</script>

{#if !end}
<div class="mb-1">
  <span class="bg-indigo-900 w-[38px] text-white items-center justify-center font-mono rounded-full inline-flex">{lineNumber}
  </span><span/>
  <span class="ml-2"><slot /></span>
</div>
{:else}
  <div class="grid-cols-[38px_12px_38px_auto] grid gap-1 mb-1">
   <span class="bg-indigo-900  text-white font-mono rounded-full  text-center h-[38px]">{lineNumber}</span>
   <span class="text-center">&mdash; </span>
   <span class="bg-indigo-900 w-[38px] text-white font-mono rounded-full text-center ml-1 h-[38px]">{end}</span>
   <p class="ml-2"><slot /></p>
  </div>
{/if}


