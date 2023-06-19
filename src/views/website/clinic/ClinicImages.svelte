<script>
    import { lang } from "../../../services/store";

  export let general
</script>
<div class="bg-gray-50">
    <div class="max-w-2xl mx-auto px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
      <!-- Details section -->
      <section aria-labelledby="details-heading">
        <div class="flex flex-col items-center text-center">
          <h1 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl"> {general.clinicHeader[`${$lang}`]}</h1>
          <p class="mt-3 max-w-3xl text-lg text-gray-600">{@html general.clinicDesc[`${$lang}`]}</p>
        </div>
  
        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="assets/img/clinic/1.jpeg" alt="Drawstring top with elastic loop closure and textured interior padding." class="w-full h-full object-center object-cover">
            </div>
           
          </div>
          <div>
            <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="assets/img/clinic/11.jpeg" alt="Front zipper pouch with included key ring." class="w-full h-full object-center object-cover">
            </div>
            
          </div>  </div>
          <h2 id="details-heading" class="colspan-2 text-2xl mt-4 font-extrabold tracking-tight text-gray-700 sm:text-2xl"> {general.branch1Header[`${$lang}`]}</h2>
          <p class=" text-base text-gray-500"> {general.branch1Desc[`${$lang}`]}</p>
      
      </section>
    </div>
  </div>
  