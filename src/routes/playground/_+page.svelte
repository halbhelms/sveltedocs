<script>
  import MyComponent from './MyComponent.svelte'

 let video = {
  duration: undefined,
  buffered: undefined,
  played: undefined,
  seekable: undefined,
  seeking: undefined,
  ended: undefined,
  currentTime: undefined,
  playbackRate: undefined,
  paused: undefined,
  volume: 1,
  muted: undefined,
  videoWidth: undefined,
  videoHeight: undefined,
  videoPlayer: undefined
 }

 let fillings = []
 
 let clientWidth
 let clientHeight
 let offsetWidth
 let offsetHeight

 const products = {
  ['sony-mic']: {
    name: 'Sony lapel mic',
    price: 59.54,
    onSale: true
  }
 }

 // myAction.js
function limitSelection(node, { maxSelected, selectedArray }) {
  const update = () => {
    if (selectedArray.length >= maxSelected) {
      node.disabled = node.checked ? false : true;
    } else {
      node.disabled = false;
    }
  };

  // Run initially and whenever the reactive statement changes
  update();
  
  // Re-run the update function whenever the selectedArray changes
  return {
    update(newOptions) {
      selectedArray = newOptions.selectedArray;
      update();
    },
  };
}

  let sides = [];

  $: selectedCount = sides.length;
</script>
<p id="sony-mic" class:mt-24={products['sony-mic'].onSale}>Sony lapel mic</p>

<MyComponent>
  This should appear in the <code>&lt;slot /> area</code>
</MyComponent>

<p class="ml-8 mt-8">Pick 2 sides</p>
<div class="ml-8">
<label class:disabled-label={selectedCount >= 2 && !sides.includes('corn')}>
  <input type="checkbox" value="corn" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  Corn
</label>

<label class:disabled-label={selectedCount >= 2 && !sides.includes('turnip greens')}>
  <input type="checkbox" value="turnip greens" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  Turnip greens
</label>

<label class:disabled-label={selectedCount >= 2 && !sides.includes('okra')}>
  <input type="checkbox" value="okra" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  Fried okra 
</label>

<label  class:disabled-label={selectedCount >= 2 && !sides.includes('sweet potato')}>
  <input type="checkbox" value="sweet potato" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  Sweet potato 
</label>

<label class:disabled-label={selectedCount >= 2 && !sides.includes('baked potato')}>
  <input type="checkbox" value="baked potato" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  Baked potato 
</label>

<label class:disabled-label={selectedCount >= 2 && !sides.includes('house salad')}>
  <input type="checkbox" value="house salad" bind:group={sides} use:limitSelection={{ maxSelected: 2, selectedArray: sides }}> 
  House salad 
</label>
</div>

<p>fillings: {fillings}</p>

<summary>Click</summary>
<details>CLick on me</details>

<div class="w-3/4 ml-8" bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint neque suscipit at voluptatibus eius, reprehenderit a fugit temporibus reiciendis labore aperiam inventore nulla veniam illo natus eum fugiat asperiores quo?</div>

<p>width: {clientWidth}</p>
<p>height: {clientHeight}</p>
<p>offset width: {offsetWidth}</p>
<p>offset height: {offsetHeight}</p>


<video controls width="800px" bind:duration = {video.duration} bind:currentTime = {video.currentTime} bind:playbackRate = {video.playbackRate} bind:volume = {video.volume} bind:played={video.played} bind:videoHeight = {video.videoHeight} bind:videoWidth = {video.videoWidth} bind:this = {video.videoPlayer}>
  <source src="../derived-stores-take2.mp4" type="video/mp4" >
</video>

duration {video.duration}<br />
currentTime {video.currentTime}<br />
playbackRate {video.playbackRate}<br />
volume {video.volume}<br />
videoWidth {video.videoWidth}<br />


<button on:click={() => video.videoPlayer.pause()}>Pause</button>
<button on:click={() => video.videoPlayer.play()}>Play</button>

<style>
  .disabled-label {
    color: grey;
  }

  label {
    display: block;
  }

  .highlighted {
    color: red;
  }
</style>