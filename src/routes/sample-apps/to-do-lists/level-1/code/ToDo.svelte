<script>
  export let task
</script>

<!-- <div class="w-[500px] mx-auto border rounded-md">
  <label>
    <input type="checkbox" class="mr-2" /> <p class="inline-block">{task}</p>
</label>
</div> -->

<div class="custom-div">
  <label>
    <input type="checkbox" class="custom-checkbox" />
    <p class="custom-p">{task}</p>
  </label>
</div>

<style>
  .custom-div {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.25rem;    /* rounded-md in Tailwind */
}

.custom-checkbox {
  margin-right: 0.5rem;  /* mr-2 in Tailwind */
}

.custom-p {
  display: inline-block; /* inline-block in Tailwind */
}

</style>
