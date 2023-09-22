<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
</script>

<PageTitle title="About This Site" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
  This site was created to help you become an effective Svelte developer while saving you time and effort. It is not an attempt to be all-inclusive, as in <span class="italic">here's everything you could ever want to know about Svelte</span>. As such, while we have an <span class="font-semibold">Explainers</span> section, you may have questions of an esoteric nature that we don't attempt to answer. That said, we hope to include everything you'll need to know to become a first-rate Svelte programmer.</p>
  
  <p class="mb-2">Another note: Any writer wanting to give a good explanation of something has to navigate the tricky passage between a very thorough (but very long) account on the one side and a shorter, more readable (but perhaps not thorough enough) summary on the other.</p>
  
  <p class="mb-2">We attempt to solve this using something we call <span class="italic">see-mores</span>. An example may help you understand. Let's say we've written an explainer about the <code>+page.server.js</code> file, in which we mention that all <code>.server</code> files have access to the <code>locals</code> varible, which is set in <code>+hooks.server.js</code>. That could use an explainer or two on its own.</p> 

  <p class="mb-2">Do we go on a tangent of explaining <code>locals</code> or  <code>+hooks.server.js</code>&mdash; when you may already know how they function? But if we don't include it, you might be lost. Enter the <i>see-more</i>. Occasionally, in an Explainer, you'll see links that look like <SeeMoreLink linkedText="<code class='hover:cursor-pointer hover:font-semibold hover:text-green-600'>+hooks.server.js</code>" on:change_see_more seeMoreID=2/>. Clicking on one of these see-mores will replace the current content with a different explainer &mdash; in this case an explanation of the <code>+hooks.server.js</code> file. But this Explainer acts more like a modal: click the X to close it and you'll be right back in your original Explainer.</p>
</main>

