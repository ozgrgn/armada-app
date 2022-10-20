<script>
  import RestService from "../../../services/rest";
  import { TranslateApiMessage, Translate } from "../../../services/language";
  import { navigate } from "svelte-navigator";
  import ToastService from "../../../services/toast";
  import Select from "../../../components/Form/Select.svelte";
  let treatments;
  let limit = 10;
  let skip = 0;
  let totalDataCount = 0;

  const getTreatments = async () => {
    let response = await RestService.getTreatments();
    console.log(response, "sdff");
    treatments = response["treatments"];
    totalDataCount = response["count"];
  };
  getTreatments();

  const deleteTreatment = async (treatmentId) => {
    let response = await RestService.deleteTreatment(treatmentId);
    if (response["status"]) {
      ToastService.success($Translate("Successfully-deleted"));
      getTreatments();
    } else {
      ToastService.error($TranslateApiMessage(response.message));
    }
  };
  const ceilAndCalculate = () => {
    if (Math.ceil(skip / limit) != Math.ceil(totalDataCount / limit) - 1) {
      skip = skip + limit;
      getTreatments();
    }
  };

  const pages = () => {
    if (totalDataCount > limit) {
      return new Array(Math.ceil(totalDataCount / limit));
    } else {
      return [1];
    }
  };

  export let color = "light";
</script>

<div class="flex flex-wrap mt-4 h-screen relative">
  <div class="w-full mb-12 px-2 lg:px-4 ">
    <button
      class="bg-white text-red-500 hover:text-red-700 mb-2 border rounded font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="button"
      on:click={() => {
        navigate("/admin/create-treatment");
      }}
    >
      <i class="fa fa-plus" />
      {$Translate("Add")}
    </button>

    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-lg text-blueGray-700">Yorumlar</h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        {#if treatments}
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold  {color ===
                  'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Başlık
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold  {color ===
                  'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  Slogan
                </th>
                <th
                class="px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold  {color ===
                'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-red-700 text-red-200 border-red-600'}"
              >
              
              </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  {color ===
                  'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-red-700 text-red-200 border-red-600'}"
                />
              </tr>
            </thead>
            <tbody>
              {#each treatments as treatment}
                <tr>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    {treatment?.header?.tr}
                  </td>
                  <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                >
                  {treatment?.heroHeader1?.tr} {treatment?.heroHeader2?.tr}
                </td>
        
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    <button
                      class="bg-white text-red-500 hover:bg-secondary hover:text-white border border-red-500 rounded font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      on:click={navigate(
                        `/admin/update-treatment/${treatment._id.toString()}`
                      )}
                    >
                      {$Translate("Edit")}
                    </button>
                    <button
                      on:click={deleteTreatment(treatment._id.toString())}
                      class="bg-white text-red-500 hover:bg-secondary hover:text-white border border-red-500 rounded font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                    >
                      {$Translate("Delete")}
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
      </div>
      <hr class="my-4 md:min-w-full" />
      {#if treatments}
        <div
          class="flex flex-row pr-4 pb-4 flex-wrap lg:flex-nowrap w-full gap-1 justify-center lg:justify-end items-center"
        >
          <Select
            bind:value={limit}
            change={() => {
              getTreatments();
            }}
            values={[
              { limit: 10 },
              { limit: 20 },
              { limit: 50 },
              { limit: 100 },
            ]}
            title={"Select page"}
            valuesKey={"limit"}
            valuesTitleKey={"limit"}
            customClass={"border border-red-500 text-red-500 py-1 w-full mx-16 lg:mx-0 lg:w-auto"}
          />

          <button
            class="bg-secondary text-white active:bg-orange-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            on:click={() => {
              skip != 0 ? (skip = skip - limit) : (skip = skip);
              getTreatments();
            }}
          >
            {$Translate("Prev")}
          </button>
          {#each pages() as page, i}
            <button
              class="border {skip == limit * i
                ? 'bg-secondary text-white'
                : 'bg-white text-red-500 border-red-500'} font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              class:hidden={i - skip / limit > 5 || skip / limit - i > 5}
              type="button"
              on:click={() => {
                skip = limit * i;
                getTreatments();
              }}
            >
              {i + 1}
            </button>
          {/each}

          <button
            onclick={ceilAndCalculate}
            class="bg-secondary text-white active:bg-orange-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            {$Translate("Next")}
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
