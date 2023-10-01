<script>
</script> 

<div class="card">
  <div class="card-header"><slot name="header"></slot></div>
  <div class="card-content"><slot name="content"></slot></div>
  {#if $$slots.footer}
  <div class="card-footer border-4 border-black"><slot name="footer"></slot></div>
  {/if}
</div>

<style>
  .card {
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 300px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
</style>

