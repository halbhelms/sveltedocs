<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Pro from '$lib/components/page-elements/badges/Pro.svelte'
  import YouWillLearn from '$lib/components/page-elements/YouWillLearn.svelte'
  export let data;
</script>

<PageTitle title="To Do List" /> <Pro />
<YouWillLearn level="Pro">
  <ul class="list-disc list-inside ml-8">
    <li>CRUD Persistence with a database</li>
    <li>Using slots</li>
    <li>TailwindCSS styling</li>
    <li>ToDo completion progress</li>
    <li>Reassignment of ToDos</li>
    <li>Sub-ToDos</li>
    <li>Video walk-thru</li>
    <li>Slack discussion channel</li>
  </ul>
</YouWillLearn>
