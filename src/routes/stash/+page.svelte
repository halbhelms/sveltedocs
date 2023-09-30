<script>
  import AuthorList from './AuthorList.svelte'
</script>

<main>
  <AuthorList>
    <h3 slot='author' let:firstName let:lastName>
      {lastName}, {firstName}
    </h3>
  </AuthorList>
</main>