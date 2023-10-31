<div class="grid grid-cols-[275px_auto] ml-8 w-[80%] pl-2">
  <div class="border-t-2 border-gray-300 border-r-2 row">
    <slot name="left" />
  </div>
  <div class="border-t-2 border-gray-300 pl-2 row">
    <slot name="right" />
  </div>
</div>

<style>
  .row {
    display: flex;
    align-items: center;
  }
</style>