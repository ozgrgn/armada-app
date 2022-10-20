<script>
  import RestService from "../../services/rest";
  import ToastService from "../../services/toast";
  import { navigate } from "svelte-navigator";
  import Select from "../../components/Form/Select.svelte";
  import Input from "../../components/Form/Input.svelte";
  import Textarea from "../../components/Form/Textarea.svelte";

  let home;
  const getHome = async () => {
    let response = await RestService.getHome();
    home = response["home"];
    console.log(response);
  };
  getHome();

  const updateHome = async () => {
    let response = await RestService.updateHome(home);

    console.log(home);
    if (response["status"]) {
      ToastService.success("Başarıyla Güncellendi");
    } else {
      ToastService.error(response.message[0]);
    }
  };
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-lg text-blueGray-700">Home</h3>
        {#if home}
          <form>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="abouttr"
                  >
                    GİRİŞ BAŞLIK TR
                  </label>

                  <Input
                    bind:value={home.entHeader.tr}
                    placeholder="Smile Perfection"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="abouten"
                  >
                    GİRİŞ BAŞLIK EN
                  </label>

                  <Input
                    bind:value={home.entHeader.en}
                    placeholder="Smile Perfection"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentstr"
                  >
                    İKİNCİ MODÜL BAŞLIK TR
                  </label>

                  <Input
                    bind:value={home.secondHeader.tr}
                    placeholder="(ARMADA SMILE)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentsen"
                  >
                    İKİNCİ MODÜL BAŞLIK EN
                  </label>

                  <Input
                    bind:value={home.secondHeader.en}
                    placeholder="(ARMADA SMILE TURKEY)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentstr"
                  >
                    İKİNCİ MODÜL TEXT TR
                  </label>

                  <Textarea
                    bind:value={home.secondText.tr}
                    placeholder="4-5 paragraflık metin"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentsen"
                  >
                    İKİNCİ MODÜL TEXT EN
                  </label>

                  <Textarea
                    bind:value={home.secondText.en}
                    placeholder="4-5 paragraflık metin"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentstr"
                  >
                    ÖZELLİKLER BAŞLIK TR
                  </label>

                  <Input
                    bind:value={home.darkHeader.tr}
                    placeholder="(Why to Choose Armada Smile?)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="treatmentsen"
                  >
                    ÖZELLİKLER BAŞLIK EN
                  </label>

                  <Input
                    bind:value={home.darkHeader.en}
                    placeholder="(Why to Choose Armada Smile?)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1tr"
                  >
                    ÖZELLİKLER1 TR
                  </label>

                  <Input
                    bind:value={home.features1.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1en"
                  >
                    ÖZELLİKLER1 EN
                  </label>

                  <Input
                    bind:value={home.features1.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features2tr"
                  >
                    ÖZELLİKLER2 TR
                  </label>

                  <Input
                    bind:value={home.features2.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features2en"
                  >
                    ÖZELLİKLER2 EN
                  </label>

                  <Input
                    bind:value={home.features2.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features3tr"
                  >
                    ÖZELLİKLER3 TR
                  </label>

                  <Input
                    bind:value={home.features3.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features3en"
                  >
                    ÖZELLİKLER3 EN
                  </label>

                  <Input
                    bind:value={home.features3.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features4tr"
                  >
                    ÖZELLİKLER4 TR
                  </label>

                  <Input
                    bind:value={home.features4.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1en"
                  >
                    ÖZELLİKLER4 EN
                  </label>

                  <Input
                    bind:value={home.features4.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features5tr"
                  >
                    ÖZELLİKLER5 TR
                  </label>

                  <Input
                    bind:value={home.features5.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features5en"
                  >
                    ÖZELLİKLER5 EN
                  </label>

                  <Input
                    bind:value={home.features5.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1tr"
                  >
                    ÖZELLİKLER6 TR
                  </label>

                  <Input
                    bind:value={home.features6.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1en"
                  >
                    ÖZELLİKLER6 EN
                  </label>

                  <Input
                    bind:value={home.features6.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1tr"
                  >
                    ÖZELLİKLER7 TR
                  </label>

                  <Input
                    bind:value={home.features7.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features7en"
                  >
                    ÖZELLİKLER7 EN
                  </label>

                  <Input
                    bind:value={home.features7.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1tr"
                  >
                    ÖZELLİKLER8 TR
                  </label>

                  <Input
                    bind:value={home.features8.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1en"
                  >
                    ÖZELLİKLER8 EN
                  </label>

                  <Input
                    bind:value={home.features8.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1tr"
                  >
                    ÖZELLİKLER9 TR
                  </label>

                  <Input
                    bind:value={home.features9.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features1en"
                  >
                    ÖZELLİKLER9 EN
                  </label>

                  <Input
                    bind:value={home.features9.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features10tr"
                  >
                    ÖZELLİKLER10 TR
                  </label>

                  <Input
                    bind:value={home.features10.tr}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="features10en"
                  >
                    ÖZELLİKLER10 EN
                  </label>

                  <Input
                    bind:value={home.features10.en}
                    placeholder="(FDA® Latest Technology)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4 text-right mt-5">
                <button
                  on:click={updateHome}
                  class="bg-red-400 disabled:bg-red-300 text-white active:bg-secondary font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Güncelle
                </button>
              </div>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
