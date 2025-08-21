<script lang="ts">
  import type { DoubletClass } from "./DoubletClass.js";

  // Props using runes syntax
  let {
    data,
    updateData,
    extraParam = $bindable(),
  }: {
    data: DoubletClass;
    updateData: (changes: Partial<DoubletClass>) => void;
    extraParam: number;
  } = $props();
</script>

<h1>Change a b c</h1>
<p>From Child Change: single extraParam = {extraParam}</p>
<p>From Child Change: dual.a = {data.a}, dual.b = {data.b}</p>

<div style="margin: 20px 0;">
  <button
    onclick={() =>
      updateData({
        a: data.a + 1,
      })}>Update A</button
  >

  <button
    onclick={() =>
      updateData({
        b: data.b + 1,
      })}>Update B</button
  >

  <button
    onclick={() => {
      extraParam += 10;
    }}>Update ExtraParam</button
  >

  <button
    onclick={() => {
      updateData({
        a: data.a + 1,
        b: data.b + 2,
      });
      extraParam += 10;
    }}>Update All</button
  >
</div>
