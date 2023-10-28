<script>import MyComponent from './MyComponent.svelte'</script>

<!-- sending data via a prop -->
<MyComponent name="Rich Harris" />
<hr class="border-gray-400 w-1/2 border-t-2 mt-2 mb-2"/>

<!-- sending HTML that will be picked up with MyComponent's slot tag -->
<MyComponent name="Rich Harris">
<p>Rich Harris is the creator of Svelte. A few facts about the man:</p>
<ul>
  <li>He has a background in journalism, even serving a stint at <em>The Guardian</em></li>
  <li>He's been involved in creating other tools and libraries, like Rollup.js</li>
  <li>Rich has a contrarian view, citing the dangers of complexity in frameworks like React and Angular</li>
</ul>
</MyComponent>
<hr class="border-gray-400 w-1/2 border-t-2 mt-2 mb-2"/>

<MyComponent name="Rich Harris"/>
<hr class="border-gray-400 w-1/2 border-t-2 mt-2 mb-2"/>

<MyComponent name="Rich Harris">
  <p>Svelte is an amazing framework.</p>
  <div slot="contributors">
    <p>Major contributors include:</p>
    <ul>
      <li class="list-disc list-inside">Alan Faubert</li>
      <li class="list-disc list-inside">Tan Li Hau</li>
      <li class="list-disc list-inside">Ben McCann</li>
      <li class="list-disc list-inside">Simon Holthausen</li>
    </ul>
  </div>
</MyComponent>