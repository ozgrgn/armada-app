<script>
  import { Translate } from "../../services/language";
  import { type } from "../../services/store";
  import { useLocation } from "svelte-navigator";

  import { link } from "svelte-navigator";

  import UserDropdown from "../Dropdowns/UserDropdown.svelte";

  let collapseShow = "hidden";

  function toggleCollapseShow(classes) {
    collapseShow = classes;
  }
  const location = useLocation();
</script>

<nav
  class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-100 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
  <div
    class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  >
    <!-- Toggler -->
    <button
      class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      on:click={() => toggleCollapseShow("bg-white m-2 py-3 px-6")}
    >
      <i class="fas fa-bars" />
    </button>
    <!-- Brand -->
    <a
      use:link
      on:click={() => toggleCollapseShow("hidden")}
      class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      href="/admin/dashboard"
    >
      <img src="/assets/img/logos/armada-smile-logo2.png" alt="">
    </a>
    <!-- User -->
    <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <UserDropdown />
      </li>
    </ul>
    <!-- Collapse -->
    <div
      class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
    >
      <!-- Collapse header -->
      <div
        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
      >
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              href="/"
            >
              {$Translate("Big-Brand")} | PANEL
            </a>
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              on:click={() => toggleCollapseShow("hidden")}
            >
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        YÖNETİM
      </h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none">


        {#if $type == "SUPER"}
          <li class="items-center">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              href="/admin/general"
              class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
                '/admin/general'
              ) !== -1
                ? 'text-red-500 hover:text-red-600'
                : 'text-blueGray-700 hover:text-blueGray-500'}"
            >
              <i
                class="fas fa-building text-sm {$location.pathname.indexOf(
                  '/admin/general'
                ) !== -1
                  ? 'opacity-75'
                  : 'text-blueGray-300'}"
              />

              <span class="col-span-4"> GENEL</span>
            </a>
          </li>
        {/if}

        {#if $type == "SUPER"}
          <li class="items-center">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              href="/admin/menu"
              class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
                '/admin/menu'
              ) !== -1
                ? 'text-red-500 hover:text-red-600'
                : 'text-blueGray-700 hover:text-blueGray-500'}"
            >
              <i
                class="fas fa-person-booth text-sm {$location.pathname.indexOf(
                  '/admin/menu'
                ) !== -1
                  ? 'opacity-75'
                  : 'text-blueGray-300'}"
              />
              <span class="col-span-4"> MENU</span>
            </a>
          </li>
        {/if}

        <li class="items-center gap-8">
          <a
            use:link
            href="/admin/home"
            class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
              '/admin/home'
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <div>
              <i
                class="fas fa-network-wired text-sm {$location.pathname.indexOf(
                  '/admin/home'
                ) !== -1
                  ? 'opacity-75'
                  : 'text-blueGray-300'}"
              />
            </div>
            <span class="col-span-4"> ANASAYFA </span>
          </a>
        </li>
        <li class="items-center gap-8">
          <a
            use:link
            href="/admin/reviews"
            class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
              '/admin/reviews'
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <div>
              <i
                class="fas fa-network-wired text-sm {$location.pathname.indexOf(
                  '/admin/reviews'
                ) !== -1
                  ? 'opacity-75'
                  : 'text-blueGray-300'}"
              />
            </div>
            <span class="col-span-4"> YORUMLAR </span>
          </a>
        </li>


        {#if $type == "SUPER"}
          <li class="items-center gap-8">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              href="/admin/form"
              class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
                '/admin/form'
              ) !== -1
                ? 'text-red-500 hover:text-red-600'
                : 'text-blueGray-700 hover:text-blueGray-500'}"
            >
              <div>
                <i
                  class="fas fa-tag text-sm {$location.pathname.indexOf(
                    '/admin/form'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
              </div>
              <span class="col-span-4"> FORM</span>
            </a>
          </li>
        {/if}

        {#if $type == "MANAGER" || $type == "STAFF"}
          <li class="items-center gap-8">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              href="/admin/product-tags"
              class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
                '/admin/product-tags'
              ) !== -1
                ? 'text-red-500 hover:text-red-600'
                : 'text-blueGray-700 hover:text-blueGray-500'}"
            >
              <div>
                <i
                  class="fas fa-tag text-sm {$location.pathname.indexOf(
                    '/admin/product-tags'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
              </div>
              <span class="col-span-4"> {$Translate("Product-tags")}</span>
            </a>
          </li>
        {/if}
        {#if $type == "SUPER"}
          <li class="items-center gap-8">
            <a
              use:link
              on:click={() => toggleCollapseShow("hidden")}
              href="/admin/treatments"
              class="text-xs uppercase py-3 grid grid-cols-5 gap-2 font-bold block {$location.pathname.indexOf(
                '/admin/treatments'
              ) !== -1
                ? 'text-red-500 hover:text-red-600'
                : 'text-blueGray-700 hover:text-blueGray-500'}"
            >
              <div>
                <i
                  class="fas fa-edit text-sm {$location.pathname.indexOf(
                    '/admin/treatments'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
              </div>
              <span class="col-span-4">TEDAVİLER</span>
            </a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
