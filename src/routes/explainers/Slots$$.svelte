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

<PageTitle title="$$slots" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
<i>Slot fallbacks</i> allow us to provide default content if no content is passed to us. It's great that we have that, but there are times when that's not quite enough. Look at this:
</p>

<img src="../card-mozart.png" width="350" alt="Mozart card">

<p class="my-2">Here's the code for that:</p>

<CodeSnippetHeader text="StunningCard.svelte" />
<CodeSnippet code="<div class='card'>
  <div class='card-header'><slot name='header'></slot></div>
  <div class='card-content'><slot name='content'></slot></div>
  <div class='card-footer border-4 border-black'><slot name='footer'></slot></div>
</div>" />

<p class="my-2">
Nothing special (other than named slots <SeeMoreLink linkedText="Named Slots" /> )
</p>

<p class="my-2">
And here is <code>+page.svelte</code> that uses <code>StunningCard</code>:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<main>
  <StunningCard>
    <svelte:fragment slot='header'>
      Wolfgang Amadeus Mozart
    </svelte:fragment>

    <svelte:fragment slot='content'>
      Symphonies: 41
    </svelte:fragment>
    
    <svelte:fragment slot='footer'>
      See also: Salieri
    </svelte:fragment>
  </StunningCard>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber=3>
If you're confused by <code>svelte:fragment</code>, it's used when you need a "wrapper", but you don't want to introduce an actual HTML element. <SeeMoreLink linkedText="svelte:fragment" />
</WalkThru>

<p class="my-2">What, though, if our <code>+page.svelte</code> sent only the named slots, <code>header</code> and <code>content</code>?</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<main>
  <StunningCard>
    <svelte:fragment slot='header'>
      Wolfgang Amadeus Mozart
    </svelte:fragment>

    <svelte:fragment slot='content'>
      Symphonies: 41
    </svelte:fragment>
  </StunningCard>
</main>" />

<p class="my-2">That would produce this: <img src="../card-mozart-missing.png" alt="Mozart card" width="350"> </p>

<p class="my-2">The border that was meant to highlight related topics is now just...let's call it less than <i>stunning</i>. If there was no slot named <code>footer</code> sent to the component, we should not show the bordered div at all. And that's where <code>$$slots</code> comes to our assistance.</p>

<p class="my-2">
<code>$$slots</code> is a built-in object that contains all the slots available. Here, we can use it to check if <code>$$slots.footer</code> is present, showing the named slot code only if it is -- like this:
</p>

<CodeSnippetHeader text="StunningCard.svelte" />
<CodeSnippet code="<div class='card'>
  <div class='card-header'><slot name='header'></slot></div>
  <div class='card-content'><slot name='content'></slot></div>
  &#123;#if $$slots.footer}
  <div class='card-footer'><slot name='footer'></slot></div>
  &#123;/if}
</div>" />

<p class="my-2">
Which restores us to a <i>stunning</i> card:
<img src="../card-mozart-missing-good.png" width="350" alt="Missing footer corrected">
</p>
</main>