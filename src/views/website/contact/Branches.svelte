<script>
  import Map from "./Map.svelte";
  import { lang } from "../../../services/store";
  import { Translate } from "../../../services/language";
  import { link } from "svelte-navigator";
  export let general;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <!-- <div class="lg:grid lg:grid-cols-3 lg:gap-8">
    <div class="flex flex-col items-center text-center">
      <h1 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl"> wfefwf</h1>
      <p class="mt-3 max-w-3xl text-lg text-gray-600">ewfwefewf</p>
    </div>
    <ContactForm {treatments} />
    </div> -->
    <div class="divide-y-2 divide-gray-200">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2
            class="text-2xl secondary font-extrabold text-gray-900 sm:text-2xl"
          >
            {general.branch1Header[`${$lang}`]}
          </h2>
          <div>
            <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
              {$Translate("phone")}
            </h3>

            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Phone number</dt>
                <dd>{general.branch1Tel[`${$lang}`]}</dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                E-mail
              </h3>
              <div>
                <dt class="sr-only">Email</dt>
                <dd>{general.email[`${$lang}`]}</dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                {$Translate("address")}
              </h3>
              <div class="mt-1">
                <dt class="sr-only">Adress</dt>
                <dd>
                  {@html general.branch1Address[`${$lang}`]}
                </dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                {$Translate("social")}
              </h3>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>
                  <div class="flex  mt-3 pt-1 ">
                    <a
                      use:link
                      href="tel:{general.branch1Tel[`${$lang}`]}"
                      target="_blank"
                      ><img
                        class="ml-1"
                        src="/assets/img/icons/phone.webp"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                    <a
                      use:link
                      href={general.facebook[`${$lang}`]}
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/facebook2.png "
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                    <a
                      use:link
                      href={general.instagram[`${$lang}`]}
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/instagram2.png"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >

                    <a
                      use:link
                      href={general.whatsapp[`${$lang}`]}
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/whatsappthin.png"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="map mt-5 md:mt-0 ">
          <Map />
        </div>
      </div>
      <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2
            class="text-2xl secondary font-extrabold text-gray-900 sm:text-2xl"
          >
          {general.branch2Header[`${$lang}`]}
          </h2>
          <div>
            <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
              Telefon
            </h3>

            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Phone number</dt>
                <dd>{general.branch2Tel[`${$lang}`]}</dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                E-mail
              </h3>
              <div>
                <dt class="sr-only">Email</dt>
                <dd>{general.email[`${$lang}`]}</dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                {$Translate("address")}
              </h3>
              <div class="mt-1">
                <dt class="sr-only">Adress</dt>
                <dd>
                  {@html general.branch2Address[`${$lang}`]}
                </dd>
              </div>
              <h3 class="text-lg mt-5 leading-3 font-medium text-gray-900">
                {$Translate("social")}
              </h3>
              <div class="mt-1">
                <dt class="sr-only">Phone number</dt>
                <dd>
                  <div class="flex  mt-3 pt-1 ">
                    <a use:link  href="tel:{general.branch2Tel[`${$lang}`]}"
                      ><img
                        class="ml-1"
                        src="/assets/img/icons/phone.webp"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                    <a
                      use:link
                      href="https://www.facebook.com/Armada-Smile-653493654802568"
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/facebook2.png "
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                    <a
                      use:link
                      href="https://www.instagram.com/armada_smile/"
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/instagram2.png"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >

                    <a
                      use:link
                      href="https://api.whatsapp.com/send?phone=+905452451254&text=Hello,%0a  I would like to get information about dental Implants."
                      target="_blank"
                    >
                      <img
                        class="ml-1"
                        src="/assets/img/icons/whatsappthin.png"
                        height="30"
                        alt="armada"
                        loading="lazy"
                      /></a
                    >
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="map mt-5 md:mt-0 w-1">
          <Map />
        </div>
      </div>
    </div>
  </div>
</div>
