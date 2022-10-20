<script>

  import { lang } from "../../../services/store";
import BigForm from "../BigForm.svelte";

export let treatment;
export let form;

console.log(form,"formda form")
</script>

<div>
  <div id="form" class="bg-gray-100  mb-10">
    <div class="lg:grid lg:grid-cols-2 ">
      <div class="px-4 sm:px-0 bg-primary  md:rounded-l-xl shadow border-r">
        <div class="md:col-span-1">
          <h3
            class="text-xl md:text-3xl px-5 py-5 font-extrabold tracking-tight text-gray-100 "
          >
            <span>
             { @html form.noCostHeader[`${$lang}`]}
          </h3>
          <div class="pb-5">
          <div class="py-2 lg:px-5 ">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost1[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost2[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost3[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost4[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost5[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost6[`${$lang}`]}
            </p>
          </div>
          <div class="py-2 lg:px-5">
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
            <p class="ml-9  text-md leading-6 font-medium text-gray-100">
              {form.noCost7[`${$lang}`]}
            </p>
          </div>
        </div>
      </div>
      </div>
 <BigForm {treatment}/>
    </div>
  </div>
</div>
