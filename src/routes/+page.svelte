<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
</script>

<PageTitle title="About This Site" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:text-sm first-line:tracking-wide
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left mb-1">
  This site was created to help Svelte developers be more effective while saving them time and effort. It is not an attempt to be all-inclusive, as in <span class="italic">here's everything you could ever want to know about Svelte</span>. As such, while we have an <span class="font-semibold">Explainers</span> section, you may have questions of an esoteric nature that we don't attempt to answer.</p>
  <p class="mb-1">Another note: A writer of an explanation has to navigate the tricky passage between a very thorough (but very long) account on the one side and a shorter, more readable (but perhaps not thorough enough) summary on the other.</p>
  <p class="mb-1">We attempt to solve this using something we call <span class="italic">see-mores</span>. An example may help you understand. Let's say we've written an explainer about the <code>+page.server.js</code> file, in which we mention that all <code>.server</code> files have access to the <code>locals</code> varible, which is set in <code>+hooks.server.js</code>. That could use an explainer on its own. Do we go on a tangent of explaining <code>+hooks.server.js</code>&mdash; when you may already know how it functions? But if we don't include it, you might be lost. Enter the <i>see-more</i>.</p>
  <p class="mb-1"></p>
</main>

