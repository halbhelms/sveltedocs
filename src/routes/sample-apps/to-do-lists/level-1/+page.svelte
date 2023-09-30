<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Level1 from '$lib/components/page-elements/badges/Level1.svelte'
  import YouWillLearn from '$lib/components/page-elements/YouWillLearn.svelte'
  export let data;
</script>

<PageTitle title="To Do List" /> <Level1 />
<YouWillLearn level=1>
  <ul class="list-disc list-inside ml-8">
    <li>Creating a Sveltekit app</li>
    <li>Creating routes</li>
    <li><code>+page.svelte</code> file</li>
    <li>Creating, importing, and using components</li>
    <li>Sending, receiving, and using <i>props</i></li>
    <li>Looping</li>
  </ul>
</YouWillLearn>
