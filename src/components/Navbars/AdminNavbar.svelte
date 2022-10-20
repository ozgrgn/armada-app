<script>
  import { lang } from "../../services/store";
  import { Translate } from "../../services/language";
  const langTrigger = (_lang) => {
    document.documentElement.setAttribute("lang", _lang);
    setTimeout(() => {
      lang.set(_lang);
    }, 1); // cause svelte is faster than browser
  };

  import UserDropdown from "../Dropdowns/UserDropdown.svelte";
</script>

<!-- Navbar -->
<nav
  class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
>
  <div
    class="w-full mx-autp items-center flex justify-end lg:justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  >
    <!-- Brand -->
    <a
      class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
      href="#pablo"
      on:click={(e) => e.preventDefault()}
    >
     İÇERİK YÖNETİM PANELİ
    </a>
    <!-- Form -->

    <!-- User -->

    <!-- <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <div class="mr-2">
        <a
          class="font-bold uppercase text-white mr-2"
          on:click={() => langTrigger("tr")}
          href={"#"}>TR</a
        >
        <a
          class="font-bold uppercase text-white mr-2"
          on:click={() => langTrigger("en")}
          href={"#"}>EN</a
        >
      </div>

      <UserDropdown />
    </ul> -->
  </div>
</nav>
<!-- End Navbar -->
