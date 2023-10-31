<div class="flex w-[80%] gap-y-0 ml-8">
  <!-- Left Column -->
  <div class="w-[350px]  border-r-2  border-collapse border-gray-300 border-t-2 pl-2 left-column">
  <slot name="left" />
  </div>

  <!-- Right Column -->
  <div class="w-full flex flex-col border-collapse">
    <!-- Top Half -->
    <div class="flex-1  border-t-2 border-gray-300 pl-2 border-collapse">
      <slot name="right-top" />
    </div>
    <!-- Bottom Half -->
    <div class="flex-1 border-t-2 border-gray-300 pl-2 border-collapse">
      <slot name="right-bottom" />
    </div>
  </div>
</div>


<style>
  .left-column {
   display: flex;
   flex-direction: column;
   justify-content: center;
}

</style>



