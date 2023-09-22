<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  $: seeMoreActive: false
</script>

<PageTitle title="Component Intro" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
  A <i>component</i> is a fundamental building block for Svelte applications. A web page is composed of possibly many components, each of which has one particular purpose.</p>
  
  <p class="mb-2">To illustrate this, let's look at a portion of a product detail page in Amazon:</p>

  <img src="../pp_amazon_watch_plain.png" alt="Amazon product detail">
  
  <p class="my-2">That's a complicated web page. Could you create it as a monolithic page with the help of technologies like Flexbox, Grid, or Tailwind? Sure, but you might not be so happy when the inevitable changes to that page are requested. A better solution is to <i>decompose</i> the page into small, purposeful components.</p> 
  
  <img src="../pp_amazon_watch_components.png" alt="Componentized Amazon product detail">
  
  <p class="my-2">What are the benefits to composing a page from individual components? Let's ask ChatGPT.</p>

  <ol class="mb-2">
    <li class="list-decimal list-inside"><b>Reusability</b>: Once you create a component, like a navigation bar or a button, you can reuse it all over the place. Don't repeat yourself; write once, use often!</li>
    <li class="list-decimal list-inside"><b>Maintainability</b>: Need to make a change? Do it in one component, and it cascades everywhere that component is used. A developer's dream, basically.</li>
    <li class="list-decimal list-inside"><b>Separation of Concerns</b>: By breaking down your page into smaller components, you can focus on one thing at a time. It's easier to wrap your head around what each piece is doing.</li>
    <li class="list-decimal list-inside"><b>Modularity</b>: Components are like mini self-contained units. You can easily swap 'em out or plug them into different parts of your project.</li>
    <li class="list-decimal list-inside"><b>Collaboration</b>: When working in a team, different folks can work on different components at the same time without stepping on each other's toes.</li>
    <li class="list-decimal list-inside"><b>Testing</b>: Easier to write tests for smaller, isolated components than for a massive, monolithic page.</li>
    <li class="list-decimal list-inside"><b>State Management</b>: Components often have their own state, making it simpler to manage how data flows and changes within parts of your page.</li>
    <li class="list-decimal list-inside"><b>Performance</b>: When done right, component-based architectures can lead to faster page loads. Some frameworks only re-render the components that actually change, instead of the whole page.</li>
    <li class="list-decimal list-inside"><b>Dynamic Content</b>: Since components can have their own state and lifecycle methods, it's a breeze to load content dynamically or to make things interactive.</li>
    <li class="list-decimal list-inside"><b>Consistency</b>: With components, you can ensure a consistent look and feel across your site, which is a huge win for user experience.</li>
  </ol>

  <Next nextLink="component-structure" nextText="Component Structure" />
</main>

