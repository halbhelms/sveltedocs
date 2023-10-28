<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Credit from '$lib/components/page-elements/Credit.svelte'
  import ExternalResource from '$lib/components/page-elements/ExternalResource.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte';
  import WalkThru from '$lib/components/page-elements/WalkThru.svelte'
  import WalkThruHeader from '$lib/components/page-elements/WalkThruHeader.svelte'

  $: seeMoreActive: false
</script>

<PageTitle title="Element Directives" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In this Explainer, we tackle <code>on:<span class="italic">eventname</span></code>, <code>bind:<span class="italic">property</span></code>, Binding <code>select</code> value, Media element bindings, Block-level element binds, <code>bind:group</code>, <code>bind:this</code>, <code>class:<span class="italic">name</span></code>, <code>style:<span class="italic">property</span></code>, <code>use:<span class="italic">action</span></code>, Transition parameters, Custom transition functions, Transition events, <code>in:<span class="italic">function</span></code>/<code>out:<span class="italic">function</span></code>, <code>animate:<span class="italic">function</span></code>, Animation parameters, Custom animation functions. Whew.
</p>

<p class="my-2">
<PageSubTitle subtitle="on:eventname" />
If you're familiar with event handlers in vanilla JavaScript, the <code>on:<span class="italic">eventname</span></code> is like an inline event handler with extra, cool features. This directive is attached to an HTML element.
</p>

<p class="my-2">
It works with regular DOM events: <code>&lt;button on:click=&#123;handleOKclick}>OK&lt;/button></code>. This will call a function named <code>handleOKclick</code>.
</p>

<p class="my-2">
Event <em>modifiers</em> are also available. These are separated from the event name (and from each other) by the <code>|</code> symbol.
</p>

<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <p class="font-bold pl-8">Modifier</p>
  <p class="font-bold pl-8">Behavior</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">preventDefault</code>
  <p class="pl-2">calls <code>event.preventDefault()</code> prior to executing the event handler function</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">stopPropagation</code>
  <p class="pl-2">calls <code>event.stopPropagation()</code> preventing <em>event bubbling</em></p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">stopImmediatePropagation</code>
  <p class="pl-2">calls <code>event.stopImmediatePropagation()</code> preventing the firing of other event listeners of the same event</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">passive</code>
  <p class="pl-2">improves scrolling performance on touch/wheel events. (Svelte will add it automatically were it's safe to do so.)</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">nonpassive</code>
  <p class="pl-2">explictly sets <code>passive</code> to false</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">capture</code>
  <p class="pl-2">fires the event handler during the <em>capture</em> phase rather than the normal <em>bubbling</em> phase</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">once</code>
  <p class="pl-2">fires the event handler the first time the event occurs and removes it thereafter</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">self</code>
  <p class="pl-2">fires the event handler only if <code>event.target</code> is the element itself</p>
</div>
<div class="grid grid-cols-[14rem_auto] w-3/4 border-b-2">
  <code class="border-r-2 border-black">trusted</code>
  <p class="pl-2">fires the event handler only if the event is triggered by a user action</p>
</div>

<p class="my-2">
The <em>eventname</em> works not only with DOM events (such as <code>click</code>) but with <em>custom events</em>. A custom event is one that you create. For more on creating and using custom events see <SeeMoreLink linkedText="Custom Events" /> .
</p>

<PageSubTitle subtitle="bind:<em>property<em>" />
<p class="my-2">
Svelte offers <em>two-way binding</em> between data and page elements. Let's see how this works.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
 let company
</script>

<main>
  <label>
    Company: <input name='company' type='text' bind:value=&#123;company}>
  </label>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
We set a <em>reactive</em> variable called <code>company</code>. <SeeMoreLink linkedText="Reactivity" />
</WalkThru>
<WalkThru lineNumber="7">
We <em>bind</em> the value of the form input to the variable, <code>company</code>. When we say that Svelte offers <em>two-way </em> data binding, we mean that any change to the form input will change the value of the variable, <code>company</code> and any change to the variable, <code>company</code>, will change the value inside the form input field.
</WalkThru>

<p class="my-2">
You can even bind to a more complex variable:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
 let company = &#123;
  name: undefined,
  address: &#123;
    city: undefined,
    state: undefined
  },
  status: undefined
 }

 let roomOptions = []
</script>

<main>
  <label>
    Name: <input name='company_name' type='text' bind:value=&#123;company.name}>
  </label>
  <label>
    City: <input name='company_city' type='text' bind:value=&#123;company.address.city}>
  </label>
  <label>
    Status: <select name='status' bind:value=&#123;company.status}>
      <option value='' disabled selected>Select a status1277</option>
      <option value='reported'>Reported</option>
      <option value='removed'>Removed</option>
      <option value='retracted'>Retracted</option>
    </select>
  </label>
  <label>
    Room options: <select name='room_options' multiple  bind:value=&#123;roomOptions}>
      <option value='' disabled selected>Select a status</option>
      <option value='water front'>Water front</option>
      <option value='handicapped'>Handicapped</option>
      <option value='view'>View</option>
    </select>
  </label>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
Now our variable is an object with nested properties.
</WalkThru>

<WalkThru lineNumber="11">
We'll need to set the variable to an array if we use a <code>multiple</code> select input. (Line 30)
</WalkThru>

<WalkThru lineNumber="16">
We can bind to a nested property.
</WalkThru>

<WalkThru lineNumber="19">
We can bind even to a more deeply nested property.
</WalkThru>

<WalkThru lineNumber="22">
We can bind a <code>select</code> input type.
</WalkThru>

<WalkThru lineNumber="30">
Multiple select options require a variable set to an array (line 11).
</WalkThru>

<p class="my-2">
You aren't restricted to binding to <code>value</code>. You can bind a checkbox with <code>bind:checkbox=&#123;variable}</code>
</p>

<p class="my-2">
It gets even better. Check this out.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
 let innerHTML
 let innerText
 let textContent
</script>

<main>
  <p contenteditable bind:innerHTML = &#123;innerHTML}>You can change this content and even bind it with Svelte.</p>
  <p contenteditable bind:innerText = &#123;innerText}>You can also change this content and even bind it with Svelte. Who knew?</p>
  <p contenteditable bind:textContent = &#123;textContent}>You can even change this content and even bind it with Svelte. No way.</p>
</main>" />

<p class="my-2">
There are subtleties in the differnces between these three properties that you should acquaint yourself with.
</p>

<p class="my-2">
How about a tag we didn't even know existed?!
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
 let detailsExpanded = false
</script>

<main>
  <details bind:open=&#123;detailsExpanded}>
    <summary>Why use Svelte?</summary>
    <ol>
      <li>It's easy</li>
      <li>It's powerful</li>
      <li>It's fun</li>
    </ol>
  </details>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
This boolean value is <code>true</code> if details is expanded and <code>false</code> if closed.
</WalkThru>

<PageSubTitle subtitle="Media element bindings" />
<p class="my-2">
Media elements (<code>audio</code> and <code>video</code>) have their own set of bindings.
</p>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="font-bold pl-4">Name</p>
  <p class="font-bold pl-4">Media</p>
  <p class="font-bold pl-4">Type</p>
  <p class="font-bold pl-4">Notes</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>duration</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">the total duration of the medium in seconds</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>buffered</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">array of <code>&#123;start, end}</code> objects </p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>played</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">array of <code>&#123;start, end}</code> objects </p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>seekable</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">array of <code>&#123;start, end}</code> objects </p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>seeking</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">boolean</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>ended</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">boolean</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>readyState</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">number between 0 and 4, inclusive</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>currentTime</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">read/write</p>
  <p class= "pl-2">current playback time in the medium in seconds</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>playbackRate</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">read/write</p>
  <p class= "pl-2">speed at which medium is being played (where 'normal' is 1)</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>paused</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">read/write</p>
  <p class= "pl-2">boolean</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>volume</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">read/write</p>
  <p class= "pl-2">number between 0 and 1</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>muted</code></p>
  <p class="border-r-2 pl-2">Audio/Video</p>
  <p class="border-r-2 pl-2">read/write</p>
  <p class= "pl-2">boolean</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>videoWidth</code></p>
  <p class="border-r-2 pl-2">Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">width in pixels</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>videoHeight</code></p>
  <p class="border-r-2 pl-2">Video</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">height in pixels</p>
</div>

<p class="my-2">
<code>img</code> elements have two bindings
</p>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="font-bold pl-4">Name</p>
  <p class="font-bold pl-4">Media</p>
  <p class="font-bold pl-4">Type</p>
  <p class="font-bold pl-4">Notes</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2">
  <p class="border-r-2"><code>naturalWidth</code></p>
  <p class="border-r-2 pl-2">Image</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">the original width of the image (available after image loads)</p>
</div>

<div class="grid grid-cols-[8rem_8rem_6rem_auto] w-3/4 border-b-2 bg-gray-200">
  <p class="border-r-2"><code>naturalHeight</code></p>
  <p class="border-r-2 pl-2">Image</p>
  <p class="border-r-2 pl-2">readonly</p>
  <p class= "pl-2">the original height of the image (available after image loads)</p>
</div>

<PageSubTitle subtitle="Block-level element bindings" />
<p class="my-2">
Block-level elements have 4 readonly bindings:
</p>
<ul class="list-disc list-inside">
  <li><code>clientWidth</code></li>
  <li><code>clientHeight</code></li>
  <li><code>offsetWidth</code></li>
  <li><code>offsetHeight</code></li>
</ul>

<PageSubTitle subtitle="<code>bind:group</code>" />
<p class="my-2">
<code>bind:group</code> is straight-forward and we can't improve on the official documentation example of taco fillings: <a href="https://svelte.dev/docs/element-directives#bind-group" target="external"><code>bind:group</code></a>.
</p>

<p class="my-2">
Hmmm...maybe we can at least make things more interesting by introducing a constraint: do not let the user choose more than 2 sides. Here's what our code will generate:
</p>

<figure>
  <img src="../bind-group-action.png" alt="" />
  <figcaption class="italic text-xs ml-8">Rendered code</figcaption>
</figure>

<p class="my-2">
Svelte <em>actions</em> are so useful and so under-used in our experience that we thought we'd sneak them into this Explainer about <code>bind:group</code> using options inspired by Cracker Barrel.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  function limitSelection(node, &#123; maxSelected, selectionsArray }) &#123;
  const update = () => &#123;
    if (selectionsArray.length >= maxSelected) &#123;
      node.disabled = node.checked ? false : true
    } else &#123;
      node.disabled = false
    }
  };

  // Run initially and whenever the reactive statement changes
  update()
  
  // Re-run the update function whenever the selectionsArray changes
  return &#123;
    update(newOptions) &#123;
      selectionsArray = newOptions.selectionsArray
      update()
    },
  };
}

  let sides = []

  $: selectedCount = sides.length
</script>

<p>Pick 2 sides</p>
<div>
<label class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('corn')}>
  <input type='checkbox' value='corn' bind:group=&#123;sides} use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  Corn
</label>

<label class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('turnip greens')}>
  <input type='checkbox' value='turnip greens' bind:group=&#123;sides} use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  Turnip greens
</label>

<label class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('okra')}>
  <input type='checkbox' value='okra' bind:group=&#123;sides use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  Fried okra 
</label>

<label  class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('sweet potato')}>
  <input type='checkbox' value='sweet potato' bind:group=&#123;sides} use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  Sweet potato 
</label>

<label class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('baked potato')}>
  <input type='checkbox' value='baked potato' bind:group=&#123;sides} use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  Baked potato 
</label>

<label class:disabled-label=&#123;selectedCount >= 2 && !sides.includes('house salad')}>
  <input type='checkbox' value='house salad' bind:group=&#123;sides} use:limitSelection=&#123; maxSelected: 2, selectionsArray: sides }}> 
  House salad 
</label>
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
<code>limitSelection</code> will be the name of the action employed. As parameters, it takes a <code>node</code> on which to operate, then destructures two variables: <code>maxSelected</code>, the maximum number of selections allowed, and <code>selectionsArray</code>, the array storing the selections (in our case, <code>sides</code>).
</WalkThru>
<WalkThru lineNumber="3">
The <code>limitSelection</code> function will return this <code>update function.</code>
</WalkThru>
<WalkThru lineNumber="4">
If the length of the selections array, <code>sides</code>, is greater than <code>maxSelected</code>, passed into the <code>limitSelection</code> function...
</WalkThru>
<WalkThru lineNumber="5">
...the HTML element from which this action originated (<code>node</code>) is inspected to see if it has been checked. If so, we don't want to disable the checkbox. If it hasn't been checked, we will disable the checkbox.
</WalkThru>
<WalkThru lineNumber="6">
If the <code>maxSelected</code> number has not been reached...
</WalkThru>
<WalkThru lineNumber="7">
...we make sure the checkbox is not disabled.
</WalkThru>
<WalkThru lineNumber="12">
Let's start things off by running the <code>update</code> function we just defined.
</WalkThru>
<WalkThru lineNumber="15">
Now we'll return the <code>update</code> function created earlier from where it will be invoked whenever <code> selectionsArray</code> changes.
</WalkThru>
<WalkThru lineNumber="23">
The array that will hold the selected options
</WalkThru>
<WalkThru lineNumber="25">
Creating a reactive statement that will cause the <code>update</code> function to run.
</WalkThru>

<PageSubTitle subtitle="<code>bind:this</code>" />
<p class="my-2">
This example shows how we can get and use a reference to a <code>&lt;video></code> element using <code>bind:this</code>
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
 let video = &#123;
   videoPlayer: undefined
 }
</script>

<video controls width='800' bind:this = &#123;video.videoPlayer}>
  <source src='../derived-stores-take2.mp4' type='video/mp4' >
</video>

<button on:click=&#123;() => video.videoPlayer.pause()}>Pause</button>
<button on:click=&#123;() => video.videoPlayer.play()}>Play</button>" />

<PageSubTitle subtitle="<code>class:<em>className</em></code>" />
<p class="my-2">
Adds <code><em>className</em></code> to an element if a condition is true.
</p>

<code>
  &lt;p id='sony-mic' class:highlighted=&#123;products['sony-mic'].onSale}>Sony lapel mic&lt;/p>
</code>

<p class="my-2">
If <code>products['sony-mic']</code> is on sale, the paragraph will have the class <code>highlighted</code> added to it. This is especially useful if you're using Tailwind for styling.
</p>

<PageSubTitle subtitle="<code>style:<em>property</em></code>" />
<p class="my-2">
<code>
&lt;p style:color='red'>I can change color&lt;/p>
</code>
</p>

<p class="my-2">
You can also use a variable for the value, allowing you to pass in the value as a prop.
</p>

<p class="my-2">
<code>
&lt;p style:color=&#123;color}>I can change color&lt;/p>
</code>
</p>

<PageSubTitle subtitle="<code>use:<em>action</em></code>" />
<p class="my-2">
See our Explainer on <SeeMoreLink linkedText="Actions" />
</p>

</main>