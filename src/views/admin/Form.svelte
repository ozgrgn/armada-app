<script>
  import RestService from "../../services/rest";
  import ToastService from "../../services/toast";
  import Input from "../../components/Form/Input.svelte";
  import Textarea from "../../components/Form/Textarea.svelte";

  let form;
  const getForm = async () => {
    let response = await RestService.getForm();
    form = response["form"];
    console.log(response);
  };
  getForm();

  const updateForm = async () => {
    let response = await RestService.updateForm(form);

    console.log(form);
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
        <h3 class="font-semibold text-lg text-blueGray-700">Form</h3>
        {#if form}
          <form>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="smalldesc"
                  >
                    İSİM SOYİSİM TR
                  </label>

                  <Input
                    bind:value={form.fullName.tr}
                    placeholder="İsim Soyisim Türkçe"
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
                    İSİM SOYİSİM EN
                  </label>

                  <Input
                    bind:value={form.fullName.en}
                    placeholder="İsim Soyisim İngilizce"
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
                    for="branch1Headertr"
                  >
                    İSİM SOYİSİM PH TR
                  </label>

                  <Input
                    bind:value={form.fullNamePH.tr}
                    placeholder="Placeholder Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Headeren"
                  >
                    İSİM SOYİSİM PH EN
                  </label>

                  <Input
                    bind:value={form.fullNamePH.en}
                    placeholder="Placeholder İngilizce"
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
                    for="branch1Headertr"
                  >
                    Telefon TR
                  </label>

                  <Input
                    bind:value={form.phone.tr}
                    placeholder="Telefon Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Headeren"
                  >
                    Telefon EN
                  </label>

                  <Input
                    bind:value={form.phone.en}
                    placeholder="Telefon İngilizce"
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
                    for="branch1Addresstr"
                  >
                    TELEFON PH TR
                  </label>

                  <Textarea
                    bind:value={form.phonePH.tr}
                    placeholder="Placeholder Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Addressen"
                  >
                    TELEFON PH EN
                  </label>

                  <Textarea
                    bind:value={form.phonePH.en}
                    placeholder="Placeholder İngilizce"
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
                    for="smalldesc"
                  >
                    EMAIL TR
                  </label>

                  <Input
                    bind:value={form.email.tr}
                    placeholder="Email Türkçe"
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
                    EMAIL EN
                  </label>

                  <Input
                    bind:value={form.email.en}
                    placeholder="Email İngilizce"
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
                    for="branch2Headertr"
                  >
                    EMAIL PH TR
                  </label>

                  <Input
                    bind:value={form.emailPH.tr}
                    placeholder="Placeholder Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Headeren"
                  >
                    EMAIL PH EN
                  </label>

                  <Input
                    bind:value={form.emailPH.en}
                    placeholder="Placeholder İngilizce"
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
                    for="branch2Headertr"
                  >
                    MESAJ TR
                  </label>

                  <Input
                    bind:value={form.message.tr}
                    placeholder="Mesaj Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Headeren"
                  >
                    MESAJ EN
                  </label>

                  <Input
                    bind:value={form.message.en}
                    placeholder="Mesaj İngilizce"
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
                    for="branch2Addresstr"
                  >
                    MESAJ PH TR
                  </label>

                  <Input
                    bind:value={form.messagePH.tr}
                    placeholder="Placeholder Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Addressen"
                  >
                    MESAJ PH EN
                  </label>

                  <Input
                    bind:value={form.messagePH.en}
                    placeholder="Placeholder İngilizce"
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
                    for="smalldesc"
                  >
                    FOTOĞRAF TR
                  </label>

                  <Input
                    bind:value={form.photo.tr}
                    placeholder="Fotoğraf Türkçe"
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
                    FOTOĞRAF EN
                  </label>

                  <Input
                    bind:value={form.photo.en}
                    placeholder="Fotoğraf İngilizce"
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
                    for="whatsapptr"
                  >
                    FOTOĞRAF PH TR
                  </label>

                  <Input
                    bind:value={form.photoPH.tr}
                    placeholder="Placeholder Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="whatsappen"
                  >
                    FOTOĞRAF PH EN
                  </label>

                  <Input
                    bind:value={form.photoPH.en}
                    placeholder="Placeholder Türkçe"
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
                    for="whatsapptr"
                  >
                    FOTOĞRAF AÇIKLAMA TR
                  </label>

                  <Input
                    bind:value={form.photoDesc.tr}
                    placeholder="Foto Açıklama Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="whatsappen"
                  >
                    FOTOĞRAF AÇIKLAMA EN
                  </label>

                  <Input
                    bind:value={form.photoDesc.en}
                    placeholder="Foto Açıklama İngilizce"
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
                    for="instatr"
                  >
                    ÜCRETSİZ SERVİSLER BAŞLIK TR
                  </label>

                  <Input
                    bind:value={form.noCostHeader.tr}
                    placeholder="The <span class='text-green-500 drop-shadow'>'NO COST' </span> Services We Offer To Our International Patients"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="instaen"
                  >
                    ÜCRETSİZ SERVİSLER BAŞLIK EN
                  </label>

                  <Input
                    bind:value={form.noCostHeader.en}
                    placeholder="The <span class='text-green-500 drop-shadow'>'NO COST' </span> Services We Offer To Our International Patients"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS1 TR
                  </label>

                  <Input
                    bind:value={form.noCost1.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS1 EN
                  </label>

                  <Input
                    bind:value={form.noCost1.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS2 TR
                  </label>

                  <Input
                    bind:value={form.noCost2.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS2 EN
                  </label>

                  <Input
                    bind:value={form.noCost2.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS3 TR
                  </label>

                  <Input
                    bind:value={form.noCost3.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS3 EN
                  </label>

                  <Input
                    bind:value={form.noCost3.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS4 TR
                  </label>

                  <Input
                    bind:value={form.noCost4.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS4 EN
                  </label>

                  <Input
                    bind:value={form.noCost4.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS5 TR
                  </label>

                  <Input
                    bind:value={form.noCost5.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS5 EN
                  </label>

                  <Input
                    bind:value={form.noCost5.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS6 TR
                  </label>

                  <Input
                    bind:value={form.noCost6.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS6 EN
                  </label>

                  <Input
                    bind:value={form.noCost6.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS7 TR
                  </label>

                  <Input
                    bind:value={form.noCost7.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS7 EN
                  </label>

                  <Input
                    bind:value={form.noCost7.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS8 TR
                  </label>

                  <Input
                    bind:value={form.noCost8.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS8 EN
                  </label>

                  <Input
                    bind:value={form.noCost8.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS9 TR
                  </label>

                  <Input
                    bind:value={form.noCost9.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS9 EN
                  </label>

                  <Input
                    bind:value={form.noCost9.en}
                    placeholder="Ücretsiz Servis İngilizce"
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
                    for="thisone"
                  >
                    ÜCRETSİZ SERVİS10 TR
                  </label>

                  <Input
                    bind:value={form.noCost10.tr}
                    placeholder="Ücretsiz Servis Türkçe"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="thisone"
                  >
                  ÜCRETSİZ SERVİS10 EN
                  </label>

                  <Input
                    bind:value={form.noCost10.en}
                    placeholder="Ücretsiz Servis İngilizce"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
              <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4 text-right mt-5">
                  <button
                    on:click={updateForm}
                    class="bg-red-400 disabled:bg-red-300 text-white active:bg-secondary font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Güncelle
                  </button>
                </div>
              </div>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
