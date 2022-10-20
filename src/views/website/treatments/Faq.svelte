<script>
  import { lang } from "../../../services/store";


  export let treatment;
  console.log(treatment, "faq treatment");
</script>

<div class="lg:pr-10">
  <div class=" mx-auto py-16   sm:pt-20 sm:pb-12 ">
    <div class="">
      <dl
        class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-10"
      >
        <div>
          <dt class="font-semibold text-gray-700">
            {treatment.faqs1Q[`${$lang}`]}
          </dt>
          <dd class="mt-3 text-gray-500">{treatment.faqs1A[`${$lang}`]}</dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-700">
            {treatment.faqs2Q[`${$lang}`]}
          </dt>
          <dd class="mt-3 text-gray-500">{treatment.faqs2A[`${$lang}`]}</dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-700">
            {treatment.faqs3Q[`${$lang}`]}
          </dt>
          <dd class="mt-3 text-gray-500">{treatment.faqs3A[`${$lang}`]}</dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-700">
            {treatment.faqs4Q[`${$lang}`]}
          </dt>
          <dd class="mt-3 text-gray-500">{treatment.faqs4A[`${$lang}`]}</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
