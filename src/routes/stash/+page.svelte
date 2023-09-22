<script>
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
</script>

<p class="mx-4 mt-8">When using CodeSnippet (and after paying your yearly $299 licensing fee), put this code in the page from which you wish to use CodeSnippet:</p>
<CodeSnippet code="<script>
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
</script>" />
<p class="mx-4 mt-4">If you wish to have line numbers added pass an additional prop, <code>linenumbers</code>, set to <code>true</code>.</p>

<p class="ml-24">Hello, Mars</p>

<style>
  code {
    color: blue;
  }

  p {
    color: green;
  }
</style>
