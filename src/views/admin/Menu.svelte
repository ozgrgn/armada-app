<script>
  import RestService from "../../services/rest";
  import ToastService from "../../services/toast";
  import { navigate } from "svelte-navigator";
  import Select from "../../components/Form/Select.svelte";
  import Input from "../../components/Form/Input.svelte";

  let menu;
  const getMenu = async () => {
    let response = await RestService.getMenu();
    menu = response["menu"];
    console.log(response);
  };
  getMenu();

  const updateMenu = async () => {
    let response = await RestService.updateMenu(menu);

    console.log(menu);
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
        <h3 class="font-semibold text-lg text-blueGray-700">Menu</h3>
        {#if menu}
          <form>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="smalldesc"
                  >
                    ABOUT TR
                  </label>

                  <Input
                    bind:value={menu.about.tr}
                    placeholder="About Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="smalldescs"
                  >
                    ABOUT EN
                  </label>

                  <Input
                    bind:value={menu.about.en}
                    placeholder="About İngilizce"
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
                    TEDAVİLER TR
                  </label>

                  <Input
                    bind:value={menu.treatments.tr}
                    placeholder="Tedaviler Türkçe"
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
                    TEDAVİLER EN
                  </label>

                  <Input
                    bind:value={menu.treatments.en}
                    placeholder="Tedaviler İngilizce"
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
                    for="clinicstr"
                  >
                    KLİNİKLER TR
                  </label>

                  <Input
                    bind:value={menu.clinics.tr}
                    placeholder="Klinikler Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="clinicsen"
                  >
                    KLİNİKLER EN
                  </label>

                  <Input
                    bind:value={menu.clinics.en}
                    placeholder="Klinikler İngilizce"
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
                    for="contacttr"
                  >
                    İLETİŞİM TR
                  </label>

                  <Input
                    bind:value={menu.contact.tr}
                    placeholder="Klinikler Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="contacten"
                  >
                    İLETİŞİM EN
                  </label>

                  <Input
                    bind:value={menu.contact.en}
                    placeholder="Klinikler İngilizce"
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
                    for="contacttr"
                  >
                    BUTON TR
                  </label>

                  <Input
                    bind:value={menu.button.tr}
                    placeholder="Buton Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>

              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="contacten"
                  >
                    BUTON EN
                  </label>

                  <Input
                    bind:value={menu.button.en}
                    placeholder="Buton İngilizce"
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
                      for="buttonLinktr"
                    >
                      BUTON LINK TR
                    </label>
  
                    <Input
                      bind:value={menu.buttonlink.tr}
                      placeholder="Buton Türkçe"
                      required="false"
                      type="text"
                    />
                  </div>
                </div>
  
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="buttonLinkrn"
                    >
                      BUTON LINK EN
                    </label>
  
                    <Input
                      bind:value={menu.buttonlink.en}
                      placeholder="Buton İngilizce"
                      required="false"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4 text-right mt-5">
                <button
                  on:click={updateMenu}
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
