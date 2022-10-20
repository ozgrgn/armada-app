
<script>
   import { slide } from "svelte/transition";

   let showModal = false;

let toggleModal=()=> {
  showModal = !showModal;
}
</script>

<div class="box shadow"><img src="/assets/img/certificates/health_tourism_certificate.jpeg" on:click="{toggleModal}" alt=""></div>

{#if showModal}
<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-[10000] outline-none focus:outline-none justify-center items-center flex w-full  text-center" on:click={toggleModal} transition:slide|local>
>
  <div class="relative w-auto my-6 mx-auto md:w-1/2">
    <!--content-->
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    >
      <!--header-->
      <div
        class="flex items-start justify-between  rounded-t "
      >
       
        <button
          class="p-1 ml-auto bg-transparent border-0 text-gray-700  float-right line leading-none font-semibold outline-none focus:outline-none"
         
        >
          <span
            class="bg-transparent text-gray-700  h-6 w-6 text-2xl leading-3 pt-2	 block outline-none focus:outline-none"
          >
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-2 flex-auto ">
        <img src="/assets/img/certificates/health_tourism_certificate.jpeg" on:click="{toggleModal}" alt="">
      </div>
    </div>
    <!--footer-->
  </div>
</div>

<div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}