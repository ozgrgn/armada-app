<script>
  import { link } from "svelte-navigator";
  import { lang } from "../../services/store";
  import { navbar } from "../../services/store";

  import { Translate } from "../../services/language";

  import TreatmentsDropdown from "../Dropdowns/TreatmentsDropdown.svelte";
  import LangSelect from "../Form/LangSelect.svelte";
  import BigForm from "../../views/website/BigForm.svelte";
  $: navbarOpen = false;
  const langTrigger = (_lang) => {
    document.documentElement.setAttribute("lang", _lang);
    setTimeout(() => {
      lang.set(_lang);
    }, 1); // cause svelte is faster than browser
  };
  const navbarTrigger = (_navbarOpen) => {
    document.documentElement.setAttribute("navbarOpen", _navbarOpen);
    setTimeout(() => {
      navbar.set(_navbarOpen);
    }, 1);
  };
  export let treatments;
  console.log(treatments, "navbar-treatments");
  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }
  function closeModal() {}
  export let menu;
  console.log(menu, "navbar-menu");

  function setNavbarClose() {
    navbarOpen = false;
    navbarTrigger(navbarOpen);
  }

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
    navbarTrigger(navbarOpen);
    console.log("ef");
  }
</script>

<!-- {$lang} -->

<!-- <p>{hakkimizda[`${$lang}_title`]}</p> -->
<nav
  class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent "
>
  <div
    class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
  >
    <a
      use:link
      class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      href="/"
    >
      <img
        class="navbar-brand h-10 w-auto sm:h-10"
        src="/assets/img/logos/armada-smile-logo.png"
        alt="armada"
      />
    </a>
    <button
      class="cursor-pointer text-xl text-white leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
      on:click={setNavbarOpen}
    >
      <i class="fas fa-bars" />
    </button>
  </div>
  <div
    class="lg:flex flex-grow items-center {navbarOpen ? 'block' : 'hidden'}"
    id="example-navbar-warning"
  >
    <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-sm uppercase font-bold"
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index-navbar"
          >
            <i class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />
            Docss
          </a>
        </li>
      </ul> -->
    <ul class="  flex flex-col lg:flex-row list-none lg:ml-auto">
      <li>
        <a
          class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-sm uppercase font-bold "
          href="/about"
          use:link
          on:click={setNavbarClose}
        >
          {menu.about[`${$lang}`]}
        </a>
      </li>
      <li>
        <a
          class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-sm uppercase font-bold"
          href="/clinic"
          use:link
          on:click={setNavbarClose}
        >
          {menu.clinics[`${$lang}`]}
        </a>
      </li>
      <li class="flex items-center">
        <TreatmentsDropdown {treatments} navbarClose={setNavbarClose} />
      </li>
      <!-- <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-sm uppercase font-bold"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F%23%2F"
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-facebook text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-sm uppercase font-bold"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-svelte%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Svelte%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Svelte%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-twitter text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Tweet</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-sm uppercase font-bold"
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index-navbar"
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-github text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li> -->

      <!-- <li>
          <a
            class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-sm uppercase font-bold"
            href="#pablo"
          >
            SSS
          </a>
        </li> -->
      <li>
        <a
          class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-sm uppercase font-bold"
          href="/contact"
          use:link
        >
          {menu.contact[`${$lang}`]}
        </a>
      </li>
      <li class="flex items-center">
        <button
          class=" hidden md:block bg-button text-white active:bg-secondary text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          type="button"
          on:click={toggleModal}
        >
          <i class="fas fa-arrow-alt-circle-down" />
          {menu.button[`${$lang}`]}
        </button>
      </li>

      <!-- <li class="flex items-center">
        <LangSelect
          value={$lang}
          change={(value) => langTrigger(value)}
          values={[{ lang: "en" }]}
          title={""}
          valuesKey={"lang"}
          valuesTitleKey={"lang"}
          required={false}
          customClass={"bg-transparent border-none shadow-none  text-white  uppercase focus:border-none  focus:shadow-none hover:border-none"}
        />
      </li> -->
    </ul>
  </div>
</nav>
{#if showModal}
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto  ">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <!--header-->
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t "
        >
          <h3 class="text-xl font-semibold">{$Translate("contact_us")}</h3>
          <button
            class="p-1 ml-auto bg-transparent border-0 text-gray-700  float-right line leading-none font-semibold outline-none focus:outline-none"
            on:click={toggleModal}
          >
            <span
              class="bg-transparent text-gray-700  h-6 w-6 text-2xl leading-3	 block outline-none focus:outline-none"
            >
              ×
            </span>
          </button>
        </div>
        <!--body-->
        <BigForm />
      </div>
      <!--footer-->
    </div>
  </div>

  <div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}
