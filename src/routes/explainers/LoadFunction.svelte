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

<PageTitle title="The Load Function" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
There are four different files that <code>load</code> functions can appear in (and be <code>export</code>ed from):
</p>

<ul class="list-disc list-inside ml-10">
  <li>+layout.server.js</li>
  <li>+layout.js</li>
  <li>+page.server.js</li>
  <li>+page.js</li>
</ul>

<p class="my-2">
In any/all cases, the purpose of the load function is to provide data by either a <code>+layout.svelte</code> component, a <code>+page.svelte</code> component &mdash; or both. Data is made available to these two types of files by <code>return</code>ing an object. <SeeMoreLink linkedText="Page Data" />
</p>

<p class="my-2">
Here is an example of a <code>+page.server.js</code> file that returns an Explainer based on the slug found in the URL.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="import &#123; models } from '$lib/server/db/index.js'
const &#123; Link } = models

export async function load(&#123; params }) &#123;
  const explainer = await Link.getLinkBySlug(params.slug)
  return &#123;explainer}
}" />

<p class="my-2">
As part of fulfilling their basic purpose, the <code>load</code> function can also:
</p>

<ul class="list-inside list-disc">
  <li><code>get</code> and <code>set</code> cookies. The <code>cookies</code> object belongs to the <code>event</code> passed into <code>load</code>.</li>
  <li>set headers for a response. The function, <code>setHeaders</code> belongs to the <code>event</code> passed into <code>load</code>. (Calling <code>setHeaders</code> within a <code>+page.js</code> file has no effect.)</li>
  <li>use data returned by a parent component. This one requires some explanation. Let's look at a <code>+layout.server.js</code> file in a <code>parent</code> route:
  <CodeSnippetHeader text="parent/+layout.server.js" />
  <CodeSnippet code="export async function load(event) &#123;
  return &#123;
    league: 'NFL',
    mostWins: [
      &#123;league: 'NBA', team: 'Boston Celtics'},
      &#123;league: 'NFL', team: 'Green Bay Packers'},
      &#123;league: 'MLB', team: 'San Francisco Giants'},
      &#123;league: 'NHL', team: 'Montreal Canadiens'},
    ]
  }
}" />
<p class="my-2">
Now for a <code>+layout.server.js</code> file in a <code>parent/child</code> route:
</p>

<CodeSnippetHeader text="/parent/child/+layout.server.js" />
<CodeSnippet code="export async function load(event) &#123;
  const &#123; parent } = event
  const &#123; league, mostWins } = await parent()
  const winningestTeam = mostWins.find(team => team.league === league)
  return &#123;
    team: winningestTeam.team
  }
}" />

<WalkThruHeader />
<WalkThru lineNumber="3">
Here we want to use <code>league</code> and <code>mostWins</code> returned by the <code>parent</code>'s <code>load</code> function. But if we have reason to believe that the code needed to generate these variables may take some time (perhaps it requires a database fetch), we can add the <code>await parent()</code>, ensuring that the <code>child</code> will not attempt to destructure <code>league</code> and <code>mostWins</code> until the <code>parent</code> has returned them.
</WalkThru>

<p class="my-2">
Finally, we can make use of the data returned by both parent and child:
</p>

<CodeSnippetHeader text="/parent/child/+page.svelte" />
<CodeSnippet code="<script>
  export let data
  const &#123; team, league } = data
</script>

<p>The team with the most wins in the &#123;league} is &#123;team}</p>" />
</li>

<li>use URL data (<SeeMoreLink linkedText="URL data" />)</li>

<li>make fetch requests. A Svelte-specific, improved <code>fetch</code> function is available with the <code>event</code> argument.</li>

<li><code>redirect</code> the user.
<CodeSnippetHeader text="+layout.server.js" />
<CodeSnippet code="import &#123; redirect } from '@sveltejs/kit';

export function load(&#123; locals }) &#123;
  if (!locals.user) &#123;
    throw redirect(307, '/login');
  }
}" />
</li>
</ul>
<Next nextLink="rerunning-load-functions" nextText="Rerunning Load Functions" />
</main>