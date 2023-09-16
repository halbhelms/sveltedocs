<script>
  import { enhance } from '$app/forms'
  export let form
  function removeMessage(message) {
    form.fail[message] = ''
  }
</script>

<form method="POST" class="w-[600px]" use:enhance>
  <div class="grid grid-cols-[1fr_2fr] border border-gray-800">
    <label for="name" class="text-right pr-2">Name</label>
    <input type="text" name="name" id="name" placeholder="Name"/>
  </div>
  
  <h2 class="text-xs text-red-700 ml-8">{form?.fail?.age || ''}</h2>
  <div class="grid grid-cols-[1fr_2fr] border border-gray-800">
    <label for="age" class="text-right pr-2">Your age</label>
    <input type="text" name="age" id="age" placeholder="Must be 18 or older" on:click={() => removeMessage('age')}/>
  </div>

  <button class="rounded-full w-24 ml-[250px] mt-2 bg-indigo-600 text-white">Submit</button>
</form>