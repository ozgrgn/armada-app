<script>
  import { link } from "svelte-navigator";
  import { lang } from "../../services/store";
  import { Translate } from "../../services/language";

  let navbarOpen = false;

  const langTrigger = (_lang) => {
    document.documentElement.setAttribute("lang", _lang);
    setTimeout(() => {
      lang.set(_lang);
    }, 1); // cause svelte is faster than browser
  };

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
</script>

<nav
  class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        use:link
        class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
        href="/"
      >
        {$Translate("Big-Brand")}
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={setNavbarOpen}
      >
        <i class="text-white fas fa-bars" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-opacity-0 lg:shadow-none rounded shadow-lg {navbarOpen
        ? 'block'
        : 'hidden'}"
      id="example-navbar-warning"
    >
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <!-- <li class="flex items-center">
          <PagesDropdown />
        </li> -->
        <!-- <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F%23%2F"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Svelte%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Svelte%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Tweet</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-auth-navbar"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li> -->
        <li class="flex items-center w-full justify-center md:mr-4">
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
        </li>

        <li class="flex items-center w-full justify-center">
          <button
            class="flex flex-row items-center gap-2 bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-envelope" />
            {$Translate("Contact")}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
