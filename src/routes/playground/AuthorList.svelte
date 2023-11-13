<script>
  const authors = [
    {firstName: 'John', lastName: 'Irving', genre: 'Literature'},
    {firstName: 'Stephen', lastName: 'King', genre: 'Horror'},
    {firstName: 'J.K.', lastName: 'Rowling', genre: 'Young Adult'},
    {firstName: 'Tom',  lastName: 'Clancy', genre: 'Espionage'},
    {firstName: 'Jirō', lastName: 'Akagawa', genre: 'Mystery'},
    {firstName: 'James', lastName: 'Patterson', genre: 'Thriller'}
  ]
</script>

<div>
  {#each authors as author (`${author.firstName_author.lastName}`)}
    <h3> 
      <slot 
        name='author' 
        firstName={author.firstName} 
        lastName={author.lastName} 
        genre={author.genre}
      /> 
    </h3>
  {/each}
</div>