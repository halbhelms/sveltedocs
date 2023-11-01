<script>
  import Snapshots from '../example-apps/snapshots/Snapshots.svelte'
  import Screenshot from '$lib/components/page-elements/Screenshot.svelte'
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

<PageTitle title="Snapshots" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
A "snapshot" in software usually refers to capturing the current state of something at a particular moment in time. Think of it like taking a photo of your room. That photo captures the exact state of your room at the time the photo was taken. If you clean up your room (or make it messier) and then take another photo, that's another snapshot. Svelte has a special directive that makes it easy to implement snapshots. That's the good news. The bad news...let's concentrate on the good news for now, then we'll see how serious the fly in the ointment is.
</p>

<p class="my-2">
Imagine this scenario: you're on a page has a long form that, at the end, asks you for a verification code. To get one, you click on the helpful "Click here to get your verification code" &mdash; but in a most <em>unhelpful</em> way, off your page goes to another page that has the verification code. You copy it, click the back button &mdash; only to find that your entire form is blank. You are not happy.
</p>

<p class="my-2">
But if <em>you</em> wrote the code for this site, <em>your</em> user would be happy. (We'll forget about the egregious 'replace the page' thing). Why would they be happy? Because you implemented <em>snapshots</em>. Let's see how you did it.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let verificationCode
  let zipcode

  export const snapshot = &#123;
    capture: () => zipcode,
    restore: (value) => zipcode = value
  }
</script>

<input bind:value=&#123;zipcode} placeholder='Zip code' /><br />
<input bind:value=&#123;verificationCode} placeholder='Verification code' /><br />
<a href='somesite.com/verification-code'>Click here to get a verification code</a>" />

<WalkThruHeader />
<WalkThru lineNumber="2" end="3">
Create reactive variables for <code>verificationCode</code> and <code>zipcode</code>
</WalkThru>

<WalkThru lineNumber="5" end="8">
Export an object, <code>snapshot</code>, that has two functions: <code>capture</code> and <code>restore</code>
</WalkThru>

<WalkThru lineNumber="6">
Use the pattern: <code>capture: () => x</code>, where <code>x</code> is the variable you wish to persist
</WalkThru>

<WalkThru lineNumber="7">
Use the pattern: <code>restore: (value) => x = value</code>, where <code>x</code> is the variable you specified in <code>capture</code>
</WalkThru>

<WalkThru lineNumber="11" end="12">
Use <code>input:bind</code> to bind the values of the input fields to the appropriate variables create in your <code>script</code> section
</WalkThru>

<p class="my-2">
That's all there is to it. If your user navigates away and then returns, their info is still there.
</p>

<p class="my-2">
Now, for the not-so-good news: this works when you place your capture in a <code>+page.svelte</code> or a <code>+layout.svelte</code> file. If, like us, you prefer to have forms as separate components, you'll have to fashion your own mechanism for snapshotting. Not all that difficult, but not as easy as if you stay with the restrictions imposed by SvelteKit.
</p>

</main>