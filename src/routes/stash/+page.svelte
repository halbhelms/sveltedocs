<script>
  export let data
  const composers = { data }
</script>


  <ul>
  {#each composers as composer (composer.id)}
    <form method='post'>
      <input name="composerId" value={composer.id}/>
      <li><button>X</button> {composer.name} :: {composer.genre}</li>
    </form>
  {/each}
  </ul>
