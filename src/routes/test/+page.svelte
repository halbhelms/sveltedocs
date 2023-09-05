<script>
  import Card from './Card.svelte'
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
</script>

<p on:click={() => loadDynamicComponent('a', 'Hatem')}>Let Hatem dynamically load ComponentA</p>
<p on:click={() => loadDynamicComponent('b', 'Hal')}>Let Hal dynamically load ComponentB</p>
<p on:click={() => loadDynamicComponent('c', 'Bobby')}>Let Bobby dynamically load ComponentC</p>

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
