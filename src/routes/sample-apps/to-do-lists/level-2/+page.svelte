<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Level2 from '$lib/components/page-elements/badges/Level2.svelte'
  import YouWillLearn from '$lib/components/page-elements/YouWillLearn.svelte'
  export let data;
</script>

<PageTitle title="To Do List" /> <Level2 />
<YouWillLearn level=2>
  <ul class="list-disc list-inside ml-8">
    <li><code>+page.server.js</code></li>
    <li>Working with forms</li>
    <li>Form actions</li>
    <li>The <code>load</code> function</li>
    <li>Component children</li>
    <li>Conditional logic</li>
    <li>Assignment of ToDos</li>
    <li>Persistence with <code>indexedDB</code></li>
  </ul>
</YouWillLearn>
