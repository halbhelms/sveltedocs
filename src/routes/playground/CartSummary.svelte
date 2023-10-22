<script>
  import { cart } from '../../stores'
</script>

<p class="ml-8 mt-8">You have {$cart.length} {$cart.length == 1 ? 'item' : 'items'} in your cart.</p>