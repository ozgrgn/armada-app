<!-- App.svelte -->
<script>
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Route,Router } from "svelte-navigator";

  let general;
</script>

<SvelteToast />

<Router>
  <Route path="auth/*auth">
    {#await import("./layouts/Auth.svelte") then component}
      <svelte:component this={component.default} />
    {/await}
  </Route>
  <Route path="admin/*admin">
    {#await import("./layouts/Admin.svelte") then component}
      <svelte:component this={component.default} />
    {/await}
  </Route>

  <Route path="/*">
    {#await import("./layouts/Website.svelte") then component}
      <svelte:component this={component.default} />
    {/await}
  </Route>
</Router>
