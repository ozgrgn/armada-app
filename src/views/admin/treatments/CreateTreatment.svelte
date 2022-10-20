<script>
  import RestService from "../../../services/rest.js";
  import { navigate } from "svelte-navigator";
  import Input from "../../../components/Form/Input.svelte";
  import Select from "../../../components/Form/Select.svelte";
  import Textarea from "../../../components/Form/Textarea.svelte";

  import Image from "../../../components/Form/Image.svelte";
  import ToastService from "../../../services/toast";
  import {
    Translate,
    TranslateApiMessage,
  } from "../../../services/language.js";
  let header = { tr: "", en: "" };
  let heroHeader1 = { tr: "", en: "" };
  let heroHeader2 = { tr: "", en: "" };
  let smallDesc = { tr: "", en: "" };
  let text = { tr: "", en: "" };
  let image;
  let link = { tr: "", en: "" };
  let faqs1Q = { tr: "", en: "" };
  let faqs1A = { tr: "", en: "" };
  let faqs2Q = { tr: "", en: "" };
  let faqs2A = { tr: "", en: "" };
  let faqs3Q = { tr: "", en: "" };
  let faqs3A = { tr: "", en: "" };
  let faqs4Q = { tr: "", en: "" };
  let faqs4A = { tr: "", en: "" };
  let sort = { tr: "", en: "" };

  let platforms = [{ p: "TrustPilot" }, { p: "Google" }, { p: "Facebook" }];
  let stars = [{ s: "1" }, { s: "2" }, { s: "3" }, { s: "4" }, { s: "5" }];
  const addTreatment = async () => {
    let data = {
      header,
      heroHeader1,
      heroHeader2,
      image,
      link,
      smallDesc,
      text,
      faqs1Q,
      faqs1A,
      faqs2Q,
      faqs2A,
      faqs3Q,
      faqs3A,
      faqs4Q,
      faqs4A,
      sort,
    };
    let response = await RestService.addTreatment(data);
    if (response["status"]) {
      ToastService.success($Translate("Successfully-completed"));

      navigate("/admin/treatments");
    } else {
      ToastService.error($TranslateApiMessage(response.message));
    }
  };
</script>

<div class="flex flex-wrap mt-4 h-screen relative">
  <div class="w-full mb-12 px-2 lg:px-4 ">
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
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-100"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="text-center flex justify-between">
          <h3 class="font-semibold text-lg text-blueGray-700">Tedavi Ekle</h3>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                  bind:value={sort.tr}
                  placeholder="(Dental Implants)"
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
                  bind:value={sort.en}
                  placeholder="(Dental Implants)"
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
                  bind:value={header.tr}
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
                  bind:value={header.en}
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
                  bind:value={link.tr}
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
                  LINK EN
                </label>

                <Input
                  bind:value={link.en}
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
                  for="treatmentstr"
                >
                  SLOGAN1 TR
                </label>

                <Input
                  bind:value={heroHeader1.tr}
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
                  bind:value={heroHeader1.en}
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
                  bind:value={heroHeader2.tr}
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
                  bind:value={heroHeader2.en}
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
                  bind:value={smallDesc.tr}
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
                  bind:value={smallDesc.en}
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
                  bind:value={text.tr}
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
                  bind:value={text.en}
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
                  bind:value={faqs1Q.tr}
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
                  bind:value={faqs1Q.en}
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
                  bind:value={faqs1A.tr}
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
                  bind:value={faqs1A.en}
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
                  bind:value={faqs2Q.tr}
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
                  bind:value={faqs2Q.en}
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
                  bind:value={faqs2A.tr}
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
                  bind:value={faqs2A.en}
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
                  bind:value={faqs3Q.tr}
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
                  bind:value={faqs3Q.en}
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
                  bind:value={faqs3A.tr}
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
                  bind:value={faqs3A.en}
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
                  SORU1 TR
                </label>

                <Input
                  bind:value={faqs1Q.tr}
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
                  for="faqqtr-4"
                >
                  SORU4 EN
                </label>

                <Input
                  bind:value={faqs4Q.en}
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
                  bind:value={faqs4A.tr}
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
                  bind:value={faqs4A.en}
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

                <Image bind:value={image} />
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 text-right mt-2">
              <button
                on:click={addTreatment}
                class="bg-red-400 disabled:bg-red-300 text-white active:bg-secondary font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                {$Translate("Save")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
