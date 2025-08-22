<script lang="ts">
  import { DoubletClass } from "./DoubletClass.svelte.js";
  import ChangeDoublet from "./ChangeDoublet.svelte";
  import DisplayChange from "./DisplayChange.svelte";

  // Create reactive state using runes - make the instance reactive
  let data = $state(new DoubletClass(10, 20));
  let extraParam = $state(30);
</script>

<h1>My First Rune Test App</h1>
<p>From Main: single extraParam = {extraParam}</p>
<p>From Main: data.a = {data.a}, data.b = {data.b}</p>
<br />

<!-- Bind the variables to share reactive state -->
<ChangeDoublet bind:data bind:extraParam />
<br />

<DisplayChange {data} {extraParam} />
