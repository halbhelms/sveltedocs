<script>
  import { cart } from '$lib/store/stores'
  import { count } from '$lib/store/stores'

  // let countValue
  // cart.subscribe()
  // cart.subscribe(value => () => {})
  
  import Card from './Card.svelte'
  import CardButton from './CardButton.svelte';
  let componentNames = {
    a: './DynamicComponentA.svelte',
    b: './DynamicComponentB.svelte',
    c: './DynamicComponentC.svelte'
  }
  let DynamicComponent
  let name


  function loadDynamicComponent(componentName, nameArg) {
    name = nameArg
    import(componentNames[componentName]).then(res => DynamicComponent = res.default)
  }

  function addToCart() {
    let product = {name: 'Widget A', price: 4.55}
    const lineItem = {product, quantity: 1}
    let newCart = [...$cart, lineItem]

    cart.set(newCart)
  }

  function addToCount() {
    count.update(prev => prev+1)
  }
</script>
Items in Cart: {$cart.length}

<p on:click={addToCart}>Add item to cart</p>
<p>Last item in cart product:  {$cart[0]?.product?.name}</p>
<p>Count: {$count}</p>
<p on:click={addToCount}>Add 1 to count</p>

<hr>
<div class="grid lg:grid-cols-3 gap-10">
<p on:click={() => loadDynamicComponent('a', 'Hatem')}>Let Hatem dynamically load ComponentA</p>
<p on:click={() => loadDynamicComponent('b', 'Hal')}>Let Hal dynamically load ComponentB</p>
<p on:click={() => loadDynamicComponent('c', 'Bobby')}>Let Bobby dynamically load ComponentC</p>
</div>

<svelte:component this="{DynamicComponent}" {name}/>

<Card let:Title let:Description let:Button>
  <Title class="btn">
    Hello World
  </Title>
  <Description class="mt-10">
    Pater noster, qui es in caelis: Sanctificetur nomen tuum: Adveniat regnum tuum: Fiat voluntas tua, sicut in caelo, et in terra. Panem nostrum quotidianum da nobis hodie: Et dimitte nobis debita nostra, sicut et dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo.
  </Description>
  <Button>
    Let's go
  </Button>
</Card>

