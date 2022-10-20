<script>
    import { lang } from "../../../services/store";
      import { link } from "svelte-navigator";
      import { Translate } from "../../../services/language";
      export let treatments;
</script>
<nav class="hidden md:block space-y-1 border rounded-xl bg-white" aria-label="Sidebar">
    <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 border-b mx-2 hover:text-gray-900" -->
 <div
      class="bg-white-100 font-medium text-gray-700 flex items-center px-3 py-2  rounded-md"
      aria-current="page"
    >
      <span class="truncate "><strong>  {$Translate("our_treatments_BIG")}</strong> </span>
 </div>
{#each treatments as treatment}
    <a
    use:link
        href="/treatments/{treatment.link[`${$lang}`]}"
      class="text-gray-600 border-b mx-2 active:bg-gray-100 hover:bg-gray-50 mx-3 hover:text-gray-900 flex items-center px-3 py-2  font-medium rounded-md"

    >
      <span class="truncate">  {treatment.header[`${$lang}`]} </span>
    </a>
{/each}

  </nav>