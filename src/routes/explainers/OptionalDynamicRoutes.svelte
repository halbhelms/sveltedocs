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

<PageTitle title="Optional Dynamic Routes" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
We know how to deal with <i>dynamic routes</i> <SeeMoreLink linkedText="Dynamic Routes" />, but things can get more complicated than we've accounted for so far. Suppose we have a route that greets a user, telling them the current date.
</p>

<img src="../today-greeting.png" alt="greeting" width=350 class="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg p-2">

<p class="my-2">
But people are <i>sensitive</i>, these days. What if I want to be greeted in French or German? (This might be out most contrived example yet...)
</p>

<p class="my-2">
Contrived though the example might be, it gives us a chance to explore what we're calling <i>optional dynamic routing</i>. Here's what our route tree might look like:
</p>

<img src="../optional-dynamic-routing-route-tree.png" alt="route tree" width=400>

<p class="my-2">
That [[lang]] indicates to Sveltekit that we <i>might</i> have a URL param named <code>lang</code>. But we might just skip that part.
</p>

<p class="my-2">
No files go in the <code>[[lang]]</code> folder. Instead, let's examine the <code>+page.server.js</code> file in the <code>greeting</code> folder.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const load = async (request) => &#123;
  const days = ['Sunday', 'Monday', 'Tuesday', 
  'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 
  'April', 'May', 'June', 'July', 'August', 
  'September', 'October', 'November', 'December'];

  const date = new Date();
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayNumber = date.getDate();
  const dateString = `Today is $&#123;dayName}, $&#123;monthName} $&#123;dayNumber}.`;
  
  const lang = request.params.lang ?? 'en';
  
  let greeting = '' 
  
  switch(lang) &#123;
    case 'en':
      greeting = 'Hello'
      break;
    case 'fr':
      greeting = 'Bonjour'
      break;
    case 'de':
      greeting = 'Guten Tag'
      break;
  default:
    greeting = 'Hello'
}

  return &#123;
   greeting: `$&#123;greeting}! $&#123;dateString}`
  }
}" />

<WalkThruHeader />
<WalkThru lineNumber="12">
All of the nonsense above this line number is needed because the people charged with implementing dates in JavaScript were apparently lost at sea in a mysterious and tragic <i>cruise ship disappearance event</i>.
</WalkThru>
<WalkThru lineNumber="14">
If the URL is something like <code>svelteinfo.com/fr/greeting</code>, the value of <code>lang</code> will be <code>fr</code>. If, on the other hand, the <code>lang</code> part is missing, like this: <code>svelteinfo.com/greeting</code>, <code>lang</code> will default to <code>en</code>.
</WalkThru>

<WalkThru lineNumber="18">
A <code>switch</code> statement uses the value of <code>lang</code> to determine the appropriate greeting.
</WalkThru>

<WalkThru lineNumber="32">
We return <code>greeting</code> so that it can be used in <code>+page.svelte</code>
</WalkThru>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let data
  const &#123; greeting } = data
</script>

<p>&#123;greeting}</p>" />

<p class="my-2">
And with that, we can now have optional dynamic routes.
</p>

<Prev prevLink="url-params" prevText="URL Params" />
<Next nextLink="route-matchers" nextText="Route Matchers" />
</main>