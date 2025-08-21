<script lang="ts">
  import { DoubletClass } from "./DoubletClass.js";
  import ChangeDoublet from "./ChangeDoublet.svelte";
  import DisplayChange from "./DisplayChange.svelte";

  // Create reactive state using runes - make the instance reactive
  let data = $state(new DoubletClass(10, 20));
  let extraParam = $state(30);

  // Helper function to update data reactively
  function updateData(changes: Partial<DoubletClass>) {
    data = data.update(changes);
  }
</script>

<h1>My First Rune Test App</h1>
<p>From Main: single extraParam = {extraParam}</p>
<p>From Main: data.a = {data.a}, data.b = {data.b}</p>
<br />

<!-- Bind the variables to share reactive state -->
<ChangeDoublet {data} {updateData} bind:extraParam />
<br />

<DisplayChange {data} {extraParam} />
