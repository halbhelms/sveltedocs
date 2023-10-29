<!-- <script>
  import TreeView from './TreeView.svelte';

  let tree = {
    label: "Root",
    children: [
      {
        label: "Child 1",
        children: [
          { label: "Grandchild 1" },
          { label: "Grandchild 2" }
        ]
      },
      {
        label: "Child 2",
        children: [
          {
            label: "Grandchild 3",
            children: [
              { label: "Great-Grandchild 1" }
            ]
          }
        ]
      }
    ]
  };
</script>

<TreeView node={tree} />
 -->

<script>
  import ButtonOrLink from './ButtonOrLink.svelte'
</script>

<ButtonOrLink text="Click moi" />

<ButtonOrLink useLink={true} href="/some-page" text="Visit Page" />