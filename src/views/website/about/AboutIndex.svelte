<script>
  import Clinic from "./Clinic.svelte";
  import Chairman from "./Chairman.svelte";
  import Logos from "./logos.svelte";
  import { navbar,lang } from "../../../services/store";

  import { Translate } from "../../../services/language.js";
  export let general;
</script>
<svelte:head>
{#if general}
<title>Armada Smile Dental Clinic | About Us</title>
<meta property="description" content={general.smallDesc[`${$lang}`]} />
{/if}
</svelte:head>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="">
  <div class=" ">
    <div class="relative h-96 ">
      <div class="absolute inset-0 ">
        <img
          class="w-full h-full object-cover"
          src="assets/img/clinic/1.jpeg"
          alt=""
        />
        <div
          class="absolute inset-0 bg-zinc-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div
        class="relative max-w-7xl mx-auto pt-24 px-4 sm:pt-24 sm:px-6 lg:px-8 "
      >
        <p
          class="text-center mt-20 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl {$navbar ==
            true
              ? 'hidden'
              : 'block'}"
        >
          {$Translate("about")}
        </p>
        <div class="flex justify-center">
          <div class=" text-center w-52">
            <img
              class="text-center inline pt-2 {$navbar ==
                true
                  ? 'hidden'
                  : 'block'}"
              src="assets/img/logos/smilewhite.png"
              alt=""
            />
          </div>
        </div>
      </div> 
    </div>
      <nav class="mb-auto flex relative -mt-10 {$navbar ==
        true
          ? 'hidden'
          : 'block'}" aria-label="Breadcrumb">
        <ol  class="flex items-center space-x-4 mb-5 ml-5">
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
            <div class="flex items-center  ">
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
              <div
                class="ml-4  text-md font-medium text-blueGray-100 hover:text-gray-300"
              >
                {$Translate("about")}
              </div>
            </div>
          </li>
        </ol>
      </nav>
   
  </div>
</div>
<Clinic {general} />
<Chairman {general} />
<Logos />
