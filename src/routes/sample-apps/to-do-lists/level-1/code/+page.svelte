<script>
  import ToDoHeader from './ToDoHeader.svelte'
  import ToDo from './ToDo.svelte'

  let todos = [
    {id: 1, task: 'Reserve restaurant'},
    {id: 2, task: 'Plan menu'},
    {id: 3, task: 'Invite guests'},
    {id: 4, task: 'Get food restrictions for each guest'},
    {id: 5, task: 'Update guest quantity for restaurant'},
    {id: 6, task: 'Arrange entertainment'},
  ]
</script>

<ToDoHeader title="Retirement Party" dueDate="14 May 2024"/>
{#each todos as todo, index(todo.id)}
  <ToDo task={todo.task} />
{/each}