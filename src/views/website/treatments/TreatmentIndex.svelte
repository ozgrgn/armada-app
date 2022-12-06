<script>
  import { lang,navbar } from "../../../services/store";
  import Faq from "./Faq.svelte";
  import List from "./List.svelte";
  import Nocost from "./Nocost.svelte";
  import SmallForm from "../SmallForm.svelte";
  import SmallReviews from "./SmallReviews.svelte";
import Reviews from "../home/Reviews.svelte";
import RestService from "../../../services/rest";
import SmallCertificate from "./SmallCertificate.svelte";

  export let form;
  export let treatmentlink;
  export let treatments;
  let reviews
  const getReviews = async () => {
    let response = await RestService.getReviews();
    reviews = response["reviews"];
  };
  getReviews();

  $: treatment = treatments.find((filtered) => {
    return filtered.link[`${$lang}`] == treatmentlink;
  });
  function scrollIntoView({ target }) {
   
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return; console.log(el)
    el.scrollIntoView({
      behavior: "smooth",
    });
  }


</script>

<div class="">
  <div class=" ">
    <div class="relative h-96 ">
      <div class="absolute inset-0 ">
        <div
          class="absolute inset-0 bg-primary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div
        class="relative max-w-7xl mx-auto pt-24 px-4 sm:pt-24 sm:px-6 lg:px-8 {$navbar ==
        true
          ? 'hidden'
          : 'block'}"
      >
        <h1
          class=" text-center  drop-shadow-lg text-3xl mt-3 tracking-tight font-extrabold text-gray-100 sm:text-3xl md:text-5xl"
        >
          {#if treatment.heroHeader1 && treatment.heroHeader2}
            <span class="leading-relaxed "
              >{treatment?.heroHeader1[`${$lang}`]}</span
            > <br />
            <span class="   ">{treatment?.heroHeader2[`${$lang}`]} </span>
          {/if}
        </h1>
        <div class="flex justify-center">
          <div class=" text-center w-52">
            <img
              class="text-center inline pt-2"
              src="/assets/img/logos/smilewhite.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <nav
      class="mb-auto flex relative -mt-10  {$navbar == true
        ? 'hidden'
        : 'block'}"
      aria-label="Breadcrumb"
    >
      <ol class="flex items-center space-x-4 mb-5 ml-5">
        <li>
          <div>
            <a href="/" class="text-blueGray-100 hover:text-gray-300">
              <svg
                class="flex-shrink-0 h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>

        <li>
          <div class="flex items-center ">
            <svg
              class="flex-shrink-0 h-6 w-6 text-blueGray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <p
             
              class="ml-4  text-md font-medium text-blueGray-100 hover:text-gray-300"
              >{treatment?.header[`${$lang}`]}</p
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-5 lg:gap-3 mt-16 ">
  <div class="container px-4  order-2 md:order-1">
    <List {treatments} />
    <div class="mt-10 hidden md:block">
    <SmallForm {treatments} /></div>
    {#if reviews}
    {#key $lang}
      <SmallReviews {reviews}/>
      {/key}
    {/if}
<div class="w-full flex justify-center">
  <SmallCertificate/>
  
  </div>
</div>
  <div class=" col-span-4 mx-5 order-1  md:order-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3  ">
      <div class="f">
        <h1
          class="text-4xl drop-shadow-sm tracking-tight font-extrabold secondary sm:text-5xl md:text-67xl"
        >
          {treatment?.header[`${$lang}`]}
        </h1>

        <p class="pt-4 mt-3 text-gray-500">
          {@html treatment?.text[`${$lang}`]}
        </p>
        {#if $lang == "en"}
          <div class="flex">
            <button
              class=" w-full  bg-button text-white active:bg-secondary text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  lg:mb-0  my-4 ease-linear transition-all duration-150"
              type="button"
              href="#form"
              on:click|preventDefault={scrollIntoView}
            >
              Get Free Quote & Get Prices
            </button>
          </div>
        {/if}
      </div>

      <div class="lg:px-10">
        <img
          class="rounded-lg shadow-lg"
          src="/assets/img/services/details/1.jpg"
          alt=""
        />
      </div>
    </div>
    <Faq {treatment} />
    <section id="form" class="pt-5">
    <div  class=" {$lang == "tr"
      ? 'hidden'
      : 'block'}" >
    <Nocost {form} {treatment} /></div>
  </section>
  </div>

</div>

