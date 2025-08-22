<script lang="ts">
  /** * The optical doublet instance passed in by the parent. * If not bound, a
new `DoubletClass` will be created internally. */
  import type { DoubletClass } from "./DoubletClass.svelte";

  /**
   * The optical doublet instance passed in by the parent.
   * If not bound, a new `DoubletClass` will be created internally.
   */
  let { data = $bindable<DoubletClass>(), extraParam = $bindable<number>() } =
    $props();
</script>

<h1>Change a b c</h1>
<p>From Child Change: single extraParam = {extraParam}</p>
<p>From Child Change: dual.a = {data.a}, dual.b = {data.b}</p>

<div style="margin: 20px 0;">
  <button
    onclick={() => {
      data.a += 1;
    }}>Update A</button
  >

  <button
    onclick={() => {
      data.b += 1;
    }}>Update B</button
  >

  <button
    onclick={() => {
      extraParam += 10;
    }}>Update ExtraParam</button
  >

  <button
    onclick={() => {
      data.a += 1;
      data.b += 2;
      extraParam += 10;
    }}>Update All</button
  >
</div>
