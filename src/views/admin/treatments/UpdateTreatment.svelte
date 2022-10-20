<script>
  import RestService from "../../../services/rest.js";
  import ToastService from "../../../services/toast";
  import { navigate } from "svelte-navigator";
  import { TranslateApiMessage, Translate } from "../../../services/language";
  import { useParams } from "svelte-navigator";
  import Input from "../../../components/Form/Input.svelte";
  import Select from "../../../components/Form/Select.svelte";
  import Textarea from "../../../components/Form/Textarea.svelte";
  import Image from "../../../components/Form/Image.svelte";
  const params = useParams();

  let treatment;


  const updateTreatment = async () => {
    let response = await RestService.updateTreatment(treatment._id, treatment);
    if (response["status"]) {
      ToastService.success($Translate("Successfully-completed"));
      navigate("/admin/treatments");
    } else {
      ToastService.error($TranslateApiMessage(response.message));
    }
  };

  const getTreatment = async () => {
    let response = await RestService.getTreatment($params.treatmentId);
    if (response["status"]) {
      treatment = response["treatment"];

      console.log(treatment)
    } else {
      ToastService.error($TranslateApiMessage(response.message));
    }
  };

  getTreatment();

  const deleteTreatment = async () => {
    let response = await RestService.deleteTreatment($params.treatmentId);
    if (response["status"]) {
      ToastService.success("İşlem başarılı");
      navigate("/admin/treatments");
    } else {
      ToastService.success("İşlem başarılı");
    }
  };
</script>

<svelte:head>
  <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<div class="flex flex-wrap mt-4 h-screen relative">
  <div class="w-full mb-12 px-2 lg:px-4 ">
    <div class="flex justify-between">
      <button
        class="bg-white text-red-500 hover:text-red-700 mb-2 border rounded font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        on:click={() => {
          navigate("/admin/treatments");
        }}
      >
        <i class="fa fa-arrow-left" />
        {$Translate("Back")}
      </button>

      <button
        class="bg-white text-red-500 hover:text-red-700 mb-2 border rounded font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        on:click={deleteTreatment}
      >
        <i class="fa fa-trash" />
        Sil
      </button>
    </div>

    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-100"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="text-center flex justify-between">
          <h3 class="font-semibold text-lg text-blueGray-700">
           Tedaviyi Güncelle
          </h3>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        {#if treatment}
          <form>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="headertr"
                  >
                    SIRALAMA TR
                  </label>
  
                  <Input
                    bind:value={treatment.sort.tr}
                    placeholder="(dis-implanti)"
                    required="false"
                    type="number"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="headeren"
                  >
                  SIRALAMA EN
                  </label>
  
                  <Input
                    bind:value={treatment.sort.en}
                    placeholder="(dental-implants)"
                    required="false"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="headertr"
                  >
                    BAŞLIK TR
                  </label>
  
                  <Input
                    bind:value={treatment.header.tr}
                    placeholder="(Dental Implants)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="headeren"
                  >
                    BAŞLIK EN
                  </label>
  
                  <Input
                    bind:value={treatment.header.en}
                    placeholder="(Dental Implants)"
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
                    for="headertr"
                  >
                    LINK TR
                  </label>
  
                  <Input
                    bind:value={treatment.link.tr}
                    placeholder="(dis-implanti)"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="headeren"
                  >
                  LINK EN
                  </label>
  
                  <Input
                    bind:value={treatment.link.en}
                    placeholder="(dental-implants)"
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
                    SLOGAN1 TR
                  </label>
  
                  <Input
                    bind:value={treatment.heroHeader1.tr}
                    placeholder="(Implant Tedavilerinde)"
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
                    SLOGAN1 EN
                  </label>
  
                  <Input
                    bind:value={treatment.heroHeader1.en}
                    placeholder="(Implant Tedavilerinde)"
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
                    SLOGAN2 TR
                  </label>
  
                  <Input
                    bind:value={treatment.heroHeader2.tr}
                    placeholder="(%100 Memnuniyet)"
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
                    SLOGAN2 EN
                  </label>
  
                  <Input
                    bind:value={treatment.heroHeader2.en}
                    placeholder="(%100 Memnuniyet)"
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
                    KISA AÇIKLAMA TR
                  </label>
  
                  <Textarea
                    bind:value={treatment.smallDesc.tr}
                    placeholder="(1-2 Cümle)"
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
                    KISA AÇIKLAMA EN
                  </label>
  
                  <Textarea
                    bind:value={treatment.smallDesc.en}
                    placeholder="(1-2 Cümle)"
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
                    METİN TR
                  </label>
  
                  <Textarea
                    bind:value={treatment.text.tr}
                    placeholder="Uzun Metin"
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
                    METİN EN
                  </label>
  
                  <Textarea
                    bind:value={treatment.text.en}
                    placeholder="Uzun Metin"
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
                    for="faqqtr-1"
                  >
                    SORU1 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs1Q.tr}
                    placeholder="Faq Soru 1 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqqtr-1"
                  >
                    SORU1 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs1Q.en}
                    placeholder="Faq Soru 1 EN"
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
                    for="faqatr-1"
                  >
                    CEVAP1 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs1A.tr}
                    placeholder="Faq Cevap 1 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqaen-1"
                  >
                    CEVAP1 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs1A.en}
                    placeholder="Faq Cevap 1 TR"
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
                    for="faqqtr-1"
                  >
                    SORU2 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs2Q.tr}
                    placeholder="Faq Soru 2 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqqtr-2"
                  >
                    SORU2 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs2Q.en}
                    placeholder="Faq Soru 2 EN"
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
                    for="faqatr-2"
                  >
                    CEVAP2 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs2A.tr}
                    placeholder="Faq Cevap 2 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqaen-2"
                  >
                    CEVAP2 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs2A.en}
                    placeholder="Faq Cevap 2 TR"
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
                    for="faqqtr-3"
                  >
                    SORU3 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs3Q.tr}
                    placeholder="Faq Soru 3 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqqtr-3"
                  >
                    SORU3 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs3Q.en}
                    placeholder="Faq Soru 3 EN"
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
                    for="faqatr-3"
                  >
                    CEVAP3 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs3A.tr}
                    placeholder="Faq Cevap 3 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqaen-3"
                  >
                    CEVAP3 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs3A.en}
                    placeholder="Faq Cevap 3 TR"
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
                    for="faqqtr-1"
                  >
                    SORU4 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs4Q.tr}
                    placeholder="Faq Soru 4 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqqtr-4"
                  >
                    SORU4 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs4Q.en}
                    placeholder="Faq Soru 4 EN"
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
                    for="faqatr-4"
                  >
                    CEVAP4 TR
                  </label>
  
                  <Input
                    bind:value={treatment.faqs4A.tr}
                    placeholder="Faq Cevap 4 TR "
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="faqaen-4"
                  >
                    CEVAP4 EN
                  </label>
  
                  <Input
                    bind:value={treatment.faqs4A.en}
                    placeholder="Faq Cevap 4 TR"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="grid-logo"
                  >
                    Resim
                  </label>
  
                  <Image bind:value={treatment.image} />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4 text-right mt-5">
                <button
                  on:click={updateTreatment}
         
                  class="bg-red-400 disabled:bg-red-300 text-white active:bg-secondary font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  {$Translate("Update")}
                </button>
              </div>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
