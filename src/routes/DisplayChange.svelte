<script lang="ts">
  import { DoubletClass } from "./DoubletClass";

  // Props using runes syntax
  let {
    data,
    extraParam = $bindable(),
  }: {
    data: DoubletClass;
    extraParam: number;
  } = $props();
</script>

<h1>Display Change</h1>
<p>From Main: classA = {data.a}, classB = {data.b}, single={extraParam}</p>
