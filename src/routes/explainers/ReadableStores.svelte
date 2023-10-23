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

<PageTitle title="Readable Stores" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
While some data does need to be global &mdash; the very thing Svelte stores provide &mdash; not all data needs to be <em>writable</em>. Often, all that's required is that some components have read access to that data. For this, Svelte offers <em>readable</em> stores. They are very similar to writable stores. The difference is that attempting to change the value in a readable store will generate an error.
</p>

<p class="my-2">
Creating a readable store is only slightly different from creating a writable store. Let's create a readable store: for an example, let's say we want to have a user profile with the following:
</p>

<ul class="list-disc list-inside">
  <li>first name</li>
  <li>last name</li>
  <li>user id</li>
  <li>date of signup</li>
  <li>photo of user</li>
</ul>

<p class="my-2">
This isn't a definitive list, of course. Depending on the application, we might want different user properties. Let's see the code we might use to create a <code>userProfile</code> store.
</p>

<CodeSnippetHeader text="src/stores/index.js" />
<CodeSnippet code="import &#123; readable } from 'svelte/store'

// Simulate fetching user profile data from a server
const fetchUserProfile = async () => &#123;
  const response = await fetch('/api/user/profile')
  if (response.ok) &#123;
    const userData = await response.json()
    return userData
  } else &#123;
    throw new Error('Failed to fetch user profile.')
  }
}

// Create a readable store for the user's profile
export const userProfile = readable(null, (set) => &#123;
  fetchUserProfile()
    .then((userData) => &#123;
      set(userData) // Set the store's value when data is available
    })
    .catch((error) => &#123;
      console.error(error); // Handle errors here
    });
})" />

<WalkThruHeader />
<WalkThru lineNumber="1">
Instead of importing <code>writable</code>, we import <code>readable</code>.
</WalkThru>
<WalkThru lineNumber="4">
Lines 4-12 simulate getting user data from an API
</WalkThru>
<WalkThru lineNumber="15">
With <code>userData</code> available, we create the <code>userProfile</code> store. This is a little different than how we created a writable store, where we simply gave the <code>writable</code> function an initial value. With readable stores, we can provide an initial value &mdash; but we also have a <code>set</code> function. In our code, we set the initial value of <code>userProfile</code> to <code>null</code>
</WalkThru>
<WalkThru lineNumber="16">
We execute the <code>fetchUserProfile</code> function...
</WalkThru>
<WalkThru lineNumber="17">
...then...
</WalkThru>
<WalkThru lineNumber="18">
...use the <code>set</code> function to set the store's value to <code>userData</code>
</WalkThru>

<p class="my-2">
Now, any components needing read-only access to the <code>userProfile</code> store get access to it by importing <code>userProfile</code> from <code>/src/stores/index.js</code> and using <code>$userProfile</code> to both subscribe and get access to the user profile.
</p>

<p class="my-2">
There's one more use case that's interesting. We made <code>userProfile</code> a readable store, but if we have a spot in our app for the user to change their profile information, having the store readable will prevent us from updating it. Still, we don't want everyone having write access to the store. Hmmm...
</p>

<p class="my-2">
Svelte offers a solution: we can import <code>readonly</code> from <code>svelte/store</code>. We can then make <code>userProfile</code> <em>writable</em> and create a new read-only store, <code>readableUserProfile</code>. If we have a route like <code>user/[id]/edit</code>, we can have this route's <code>+page.svelte</code> import the (now) <em>writable</em> <code>userProfile</code>. Everyone else can import the new read-only store. The code would look like this:
</p>

<CodeSnippetHeader text="src/stores/index.js" />
<CodeSnippet code="import &#123; readonly, writable } from '/src/stores'
export const userProfile = writable(...) // initialize the writable store
export const readableUserProfile = readonly(userProfile)" />

<p class="my-2">
And with that, the problem is solved.
</p>


<Prev prevLink="writable-stores" prevText="Writable Stores" />
<Next nextLink="derived-stores" nextText="Derived Stores" />
</main>