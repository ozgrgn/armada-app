<script>
  import { onDestroy } from "svelte";
  import { navigate, Route, Router } from "svelte-navigator";
  import RestService from "../services/rest";
  import { token, type, email } from "../services/store";

  let userAuthSubscription = token.subscribe(async (auth) => {
    if (!auth) {
      if (window.location.pathname.indexOf("admin") != -1) {
        navigate("/auth/login");
      }
    } else {
      let response = await RestService.verifyToken();

      if (response && response.status) {
        type.set(response.type);
        email.set(response.email);

        if (
          window.location.pathname == "/auth/login" ||
          window.location.pathname == "/admin" ||
          window.location.pathname == "/admin/"
        ) {
          navigate("/admin/general");
        }
      } else {
        if (window.location.pathname.indexOf("admin") != -1) {
          navigate("/auth/login");
        }
      }
    }
  });
  onDestroy(() => {
    userAuthSubscription;
  });
</script>

<div>
  {#await import("../components/Sidebar/Sidebar.svelte") then component}
    <svelte:component this={component.default} />
  {/await}

  <div class="relative md:ml-64 bg-blueGray-100">
    {#await import("../components/Navbars/AdminNavbar.svelte") then component}
      <svelte:component this={component.default} />
    {/await}

    <div class="relative bg-secondary md:pt-32 pb-32 pt-12" />

    <div class="lg:px-4 lg:px-10 mx-auto w-full -m-24">
      <Router url="admin">
        <Route path="general">
          {#await import("../views/admin/General.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
        <Route path="menu">
          {#await import("../views/admin/Menu.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
        <Route path="home">
          {#await import("../views/admin/Home.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
        <Route path="form">
          {#await import("../views/admin/Form.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>

        <!-- REVIEWS -->
        <Route path="reviews">
          {#await import("../views/admin/reviews/Reviews.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
        <Route path="update-review/:reviewId">
          {#await import("../views/admin/reviews/UpdateReview.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>

        <Route path="create-review">
          {#await import("../views/admin/reviews/CreateReview.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>

        <!-- TREATMENTS -->
        <Route path="treatments">
          {#await import("../views/admin/treatments/Treatments.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
        <Route path="update-treatment/:treatmentId">
          {#await import("../views/admin/treatments/UpdateTreatment.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>

        <Route path="create-treatment">
          {#await import("../views/admin/treatments/CreateTreatment.svelte") then component}
            <svelte:component this={component.default} />
          {/await}
        </Route>
      </Router>

      {#await import("../components/Footers/FooterAdmin.svelte") then component}
        <svelte:component this={component.default} />
      {/await}
    </div>
  </div>
</div>
