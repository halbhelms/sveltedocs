<script>
  import { page } from '$app/stores'
</script>
<p>The URL you entered, <span class="error">{$page.url.href}</span>, does not correspond with any known routes.</p>

<style>
  .error {
    color: red;
  }
</style>