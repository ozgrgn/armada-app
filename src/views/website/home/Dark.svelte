<script>
  import { lang } from "../../../services/store";
import SmallForm from "../SmallForm.svelte";

export let treatments;
  export let home;
  console.log(home);


</script>

<section id="clinic">
  <div class="relative bg-primary py-0 lg:py-10 xl:py-20 mt-10 overflow-hidden">
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24  lg:h-80	"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 flex flex-col self-center			"
        >
          <div>
            <div class="mt-12 sm:mt-16 lg:mt-0 px-4 ">
              <h2
                class="text-3xl font-extrabold tracking-tight text-white mb-5"
              >
                {home.darkHeader[`${$lang}`]}
              </h2>

              <div
                class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense "
              >
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features1[`${$lang}`]}
                  </p>
                </dt>
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white" />
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features2[`${$lang}`]}
                  </p>
                </dt>
              </div>
              <div
                class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense "
              >
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features3[`${$lang}`]}
                  </p>
                </dt>
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white" />
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features4[`${$lang}`]}
                  </p>
                </dt>
              </div>
              <div
                class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense "
              >
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features5[`${$lang}`]}
                  </p>
                </dt>
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white" />
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features6[`${$lang}`]}
                  </p>
                </dt>
              </div>
              <div
                class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense "
              >
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features7[`${$lang}`]}
                  </p>
                </dt>
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white" />
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features8[`${$lang}`]}
                  </p>
                </dt>
              </div>
              <div
                class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense "
              >
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features9[`${$lang}`]}
                  </p>
                </dt>
                <dt class="mt-2 md:mt-4">
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9  text-lg leading-6 font-medium text-white" />
                  <p class="ml-9  text-lg leading-6 font-medium text-white">
                    {home.features10[`${$lang}`]}
                  </p>
                </dt>
              </div>
            </div>
          </div>
        </div>

        <div class="my-10 md:my-3">
        <SmallForm {treatments} />
        </div>
      </div>
    </div>
  </div>
</section>
