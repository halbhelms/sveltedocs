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

<PageTitle title="Route Matchers" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Sveltekit has a mechanism known as <i>matchers</i> that may interest you. Dynamic routes allow for flexibility in the route itself. A dynamic route like this...
</p>

<img src="../optional-dynamic-routing-route-tree.png" width=350  alt="">

<p class="my-2">
...allows the URL to contain a URL parameter at the [[lange]] level (while not requiring it). But you can do something that will allow only supported languages. That something is called a <i>matcher.</i>
</p>

<p class="my-2">
The idea of a matcher is that you specify what pattern or values the URL param should match. If the param meets this criterion, your code should return <code>true</code>; otherwise <code>false</code>. Let's create one that checks to see whether the <code>lang</code> param matches one of the three supported languages:
</p>

<p class="my-2">
In a <code>src/params</code> folder, we'll create a JavaScript file that we'll call <code>supported_languages.js</code>. (Matcher file names must be either alphanumeric characters or an underscore.)
</p>

<CodeSnippetHeader text="supported_languages.js" />
<CodeSnippet code="export function match(param) &#123;
  const supportedLanguages = ['en', 'fr', 'de']
  let foundLanguage = supportedLanguages.find(lang => lang === param)
  return foundLanguage ?  true  : false
}" />

<WalkThruHeader />
<WalkThru lineNumber="1">
You must export a function named <code>match</code>. You will automatically receive the URL parameter you wish to test.
</WalkThru>
<WalkThru lineNumber="4">
If the language is supported, we return <code>true</code>, otherwise <code>false</code>.
</WalkThru>

<p class="my-2">
With our matcher in place, we need only to change the folder name from <code>[[lang]]</code> to <code>[[lang=supported_languages]]</code>.
</p>

<p class="my-2">
Now, Sveltekit will first test the <code>lang</code> param against the matcher. If it returns <code>true</code>, it continues, but if it returns <code>false</code>, a 404 is thrown.
</p>

<p class="my-2">
In our opinion, receiving a 404 is not a good user experience so, for all their potential, we find ourselves not using them. There are other ways of dealing with this issue.
</p>

<Prev prevLink="optional-dynamic-routes" prevText="Optional Dynamic Routes" />
<Next nextLink="rest-dynamic-routes" nextText="Dynamic Rest Routes" />
</main>