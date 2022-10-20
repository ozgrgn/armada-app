<script>
  export let general;
  console.log(general,"aboutun cliniğinin içindeki general")
  import { lang } from "../../../services/store";
  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }
  function closeModal() {}
</script>
{#if general}
<section id="clinic">
  <div on:click={closeModal}>
    <div class="relative  pt-20 pb-10 overflow-hidden">
      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 md:h-full lg:h-full 	"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 flex flex-col self-center			"
          >
            <div>
              <div class="">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-700 "
                >
                {general.aboutHeader[`${$lang}`]}
                </h2>
                <p class="mt-4 text-gray-500 text-md ">
                {@html general.aboutDesc[`${$lang}`]}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 lg:mt-0  mt-16 px-4 flex justify-center flex-col self-center		 ">
            <div
              class=" md:pl-4 md:-mr-48 sm:pl-6 md:-mr-16 lg:relative lg:h-full sm:w-full sm:h-auto"
              on:click={toggleModal}
            >
              <img
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:left-0 lg:h-auto lg:w-full lg:max-w-none"
                src="/assets/img/clinic/armada-smile.webp"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

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
              <h3 class="text-xl font-semibold">ARMADA SMILE CLINIC</h3>
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
            <div class="relative p-2 flex-auto w-100">
              <iframe
                title="armada-smile"
                style="width:80vw  ;height:90vh;mx-5"
                src="https://my.matterport.com/show/?m=xbZRPcPkpvr"
                frameborder="0"
                allowfullscreen=""
                allow="xr-spatial-tracking"
              />
            </div>
          </div>
          <!--footer-->
        </div>
      </div>

      <div class="opacity-25 fixed inset-0 z-40 bg-black" />
    {/if}
  </div>
</section>
{/if}

