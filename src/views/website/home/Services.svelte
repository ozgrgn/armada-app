<script>
    import { lang } from "../../../services/store";
    import { link } from "svelte-navigator";

    import {
    Translate,
  } from "../../../services/language.js";
export let treatments
console.log(treatments,"treatments")
</script>
<section
  id="testimonials"
  aria-labelledby="testimonials-title"
  class=" pt-20  mb-20 "
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-700">{$Translate("our_treatments_BIG")}</h2>

    <ul
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:max-w-none lg:grid-cols-4"
    >     {#each treatments as treatment}
    <a use:link href="treatments/{treatment.link[`${$lang}`]}"> 
    <li>
     
     
      
            <figure
              class="relative rounded-2xl bg-white shadow-xl shadow-slate-900/10"
            >
              <blockquote class="relative">
                <img
                  class="w-full rounded-t-2xl"
                  src="{`https://super--bucket.s3.eu-west-3.amazonaws.com/${treatment.image}`}"
                  alt=""
                  loading="lazy"
                />
              </blockquote>
              <figcaption
                class="relative mt-2 flex items-center justify-between "
              >
              
                <div>
                  <h2
                    class="px-2 py-1  text-xl font-extrabold tracking-tight text-gray-700"
                  >
                  {treatment.header[`${$lang}`]}
                  </h2>
                  <p class=" px-2 pb-5 text-md tracking-tight text-slate-700">
                    {treatment.smallDesc[`${$lang}`]}
                  </p>
                </div>
              </figcaption>
            </figure>
        
     
   
       
      </li >
    </a> 
     {/each}
    </ul>
  </div>
</section>
