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

<PageTitle title="Lifecycle Events" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
When a request is made in the context of a Svelte app, various things happen. Hooks functions are called. <code>+page.server.js</code> and/or <code>+page.js</code> is run, components are mounted. When these things occur in a fixed order, we speak of a <em>lifecycle</em>. Frameworks typically have such a lifecycle and, also typically, expose various lifecycle events to manipulation. Svelte has a lifecycle &mdash; functions it allows you to tap into.
</p>

<PageSubTitle subtitle="onMount" />
<p class="my-2">
The first of these occurring events is: <code>onMount</code>. The <code>onMount</code> function runs after the component is first added to the DOM. It's a golden opportunity to perform certain tasks that require the DOM elements to be present. Here are some typical things developers might do in the <code>onMount</code> lifecycle phase:
</p>

<ul class="list-disc list-inside">
  <li><span class="font-bold">DOM Manipulations</span>: Since the component is now in the DOM, you can safely query and manipulate DOM elements. This is especially useful if you're doing things that Svelte's templating doesn't handle directly.</li>
  <li><span class="font-bold">External Libraries</span>: If you're integrating with third-party libraries (like D3, jQuery, or others) that need to directly touch the DOM, <code>onMount</code> is usually the place to initialize them.</li>
  <li><span class="font-bold">Fetching Data</span>: While you can start fetching data in the component's script body, using <code>onMount</code> ensures you're not making unnecessary requests for components that never get added to the DOM. It's a common place to kick off API calls for data the component needs.</li>
  <li><span class="font-bold">Event Listeners</span>: While Svelte provides its own event handling mechanism, there might be scenarios where you want to attach a more complex event listener to a DOM element, window, or document. Remember to remove these listeners in the <code>beforeDestroy</code> or <code>onDestroy</code> lifecycle phases to prevent memory leaks.</li>
  <li><span class="font-bold">Animations</span>: If you want to play an initial animation when a component enters the DOM, <code>onMount</code> is a good spot to kick it off.</li>
  <li><span class="font-bold">Focus Management</span>: For accessibility, you might want to set focus to a specific element once a component is mounted, especially in modal or popup scenarios.</li>
  <li><span class="font-bold">Checking Element Dimensions</span>: If you need to know the width, height, or other properties of an element after it's been rendered, you can do that in onMount.</li>
  <li><span class="font-bold">WebSockets & Subscriptions</span>: If your component interacts with WebSockets or other real-time data subscriptions, you might initiate those connections in <code>onMount</code>.</li>
</ul>

<PageSubTitle subtitle="beforeUpdate" />
<p class="my-2">
Next up in our lifecycle parade is: <code>beforeUpdate</code>. <code>beforeUpdate</code> gives you a chance to intercept and act right in that window of time between when reactive data changes and when the DOM updates in response. It's called every time some reactive data in your component changes and before the DOM gets updated. It's a powerful tool when you need that level of control. Here are some typical things developers might do in the <code>beforeUpdate</code> lifecycle phase:
</p>

<ul class="list-disc list-inside">
  <li><span class="font-bold">Compute Derived State</span>: If you need to compute some values based on the latest reactive data changes, but before the DOM updates, this is the place.</li>
  <li><span class="font-bold">Updating Third-Party Libraries</span>: Updating Third-Party Libraries: If you're using libraries that don't directly react to Svelte's data changes, you might need to update or reconfigure them in response to data changes.</li>
  <li><span class="font-bold">Performance Optimizations</span>: If you need to decide whether certain parts of your component should update or not based on data changes, you could use <code>beforeUpdate</code> to perform such checks.</li>
  <li><span class="font-bold">Logging or Debugging</span>: It's a handy spot to log data changes if you're debugging reactivity or trying to understand how and when your data changes.</li>
  <li><span class="font-bold">State Management</span>: If you have complex state management logic that needs to react to data changes but act before the DOM updates, you'd do it here.</li>
  <li><span class="font-bold">Access Previous State</span>: Since the DOM hasn't updated yet, you can capture the previous state of the DOM or previous values of your reactive variables.</li>
  <li><span class="font-bold">Prepping Animations</span>: f you need to set up certain conditions for animations based on how data has changed (like setting initial positions for a transition), this is a good spot.</li>
</ul>

<p class="my-2">
However, it's crucial to remember a couple of things about <code>beforeUpdate</code>:
</p>

<ul class="list-disc list-inside">
  <li>Avoid making direct changes to reactive data in beforeUpdate that could cause an infinite loop of updates.</li>  
  <li>It only runs after the initial render. For logic that should also run before the first render, you'd have to combine it with other reactive statements or lifecycle functions.</li>  
</ul>

<PageSubTitle subtitle="afterUpdate" />
<p class="my-2">
The afterUpdate lifecycle function, as you might guess from its name, gets called right after the DOM has been updated due to changes in reactive data. Here's what you might use the <code>afterUpdate</code> lifecycle phase for:
</p>

<ul class="list-disc list-inside">
  <li><span class="font-bold">Post DOM Manipulation</span>: If you need to perform any direct DOM manipulations after the component has rendered or re-rendered, this is the place to do it.</li>
  <li><span class="font-bold">Third-Party Library Integration</span>: If you're integrating with libraries that need to know when the DOM has changed, you might notify or update them here.</li>
  <li><span class="font-bold">Performance Checks</span>: If you want to monitor the performance of component updates or check rendering times, you could measure them in <code>afterUpdate</code>.</li>
  <li><span class="font-bold">Post-update Logging or Debugging</span>: Handy for logging the final state of the component after an update, especially if you're debugging component behavior.</li>
  <li><span class="font-bold">State Management</span>: Sometimes, you may need to synchronize component state with external systems after every update. This lifecycle function can help with that.</li>
  <li><span class="font-bold">Animation Tweaks</span>: If you're doing more complex animations and need to tweak or finalize things after the initial update-related animation begins, you'd do it here.</li>
  <li><span class="font-bold">Cleanup</span>: If certain tasks or checks should run after every update, such as cleaning up temporary data structures or post-process tasks, you'd put them in afterUpdate</li>
</ul>

<p class="my-2">
A few things to be mindful of with <code>afterUpdate</code>:
</p>

<ul class="list-disc list-inside">
  <li>Be careful about making changes to reactive data in afterUpdate. If you're not careful, you could cause an infinite update loop.</li>
  <li><code>afterUpdate</code> doesn't run for the initial render. It kicks in for updates after that.</li>
</ul>

<PageSubTitle subtitle="onDestroy" />
<p class="my-2">
The <code>onDestroy</code> lifecycle function is called right before a component is destroyed and removed from the DOM. This happens when the component's parent is also destroyed, or you conditionally remove the component. It provides you a chance to clean up and ensure there are no lingering side effects. Here's when you might use the <code>onDestroy</code> phase:
</p>

<ul class="list-disc list-inside">
  <li><span class="font-bold">Clean Up Event Listeners</span>: If you added any event listeners directly to the DOM (outside of Svelte's event handling), this is the place to remove them.</li>
  <li><span class="font-bold">Third-Party Library Cleanup</span>: If you're integrating with third-party libraries that require cleanup (e.g., removing plugin instances or canceling subscriptions), you'd handle that here.</li>
  <li><span class="font-bold">Clear Timers and Intervals</span>: If you've initiated network requests that might not have completed by the time the component is destroyed, you might cancel them here to avoid potential errors or unwanted side effects.</li>
  <li><span class="font-bold">Cleanup WebSockets or Observables</span>: If you opened a WebSocket connection or subscribed to an observable, you'll want to close or unsubscribe here.</li>
  <li><span class="font-bold">Release Resources</span>: If you reserved any resources (like Web Workers or large data sets), releasing them would be ideal in this phase.</li>
  <li><span class="font-bold">Custom Cleanup Logic</span>: Basically, any bespoke cleanup tasks that are specific to your application or component.</li>
  <li><span class="font-bold">Logging or Debugging</span>: If you want to monitor when components are destroyed (maybe for performance analytics or debugging), you can log that information here.</li>
</ul>

<p class="my-2">
A golden rule with <code>onDestroy</code> is to always clean up what you've set up, especially if it's external to the component. Leaving things hanging can lead to memory leaks, unexpected behavior, or errors.
</p>

</main>