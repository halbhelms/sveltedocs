<script>
  export let src
  export let width
</script>

<!-- <div class="inline-block border-dashed border-2 border-red-500 ml-8">
  <img src={src} width={width} alt="">
</div> -->


<div class="browser-window">
  <div class="title-bar">SvelteInfo.com Browser</div>
  <div class="address-bar">http://www.svelteinfo.com</div>
  <div class="browser-content">
    <!-- Your content goes here -->
    <img src={src} width={width} alt="">
  </div>
</div>

<style>
  .browser-window {
    display: inline-block;
      min-width: 50%;
      max-width: 80%;
      margin: auto;
      border: 3px solid #ccc;
      margin-left: 80px;
    }
    .title-bar {
      background-color: #eee;
      padding: 8px;
      text-align: center;
      background-image: url('../browser-controls.png');
      background-repeat: no-repeat;
      background-position: left center;
    }

    .address-bar {
      background-color: #fff;
      padding: 8px;
      border-bottom: 1px solid #ccc;
    }
    .browser-content {
      /* min-height: 300px; */
      display: inline-block;
      padding: 16px;
    }
</style>

