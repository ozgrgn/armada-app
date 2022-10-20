<script>
  import RestService from "../../services/rest";
  import ToastService from "../../services/toast";
  import Input from "../../components/Form/Input.svelte";
  import Textarea from "../../components/Form/Textarea.svelte";

  let general;
  const getGeneral = async () => {
    let response = await RestService.getGeneral();
    general = response["general"];
    console.log(response);
  };
  getGeneral();

  const updateGeneral = async () => {
    let response = await RestService.updateGeneral(general);

    console.log(general);
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
        <h3 class="font-semibold text-lg text-blueGray-700">Genel</h3>
        {#if general}
          <form>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="smalldesc"
                  >
                    Kısa Açıklama TR
                  </label>

                  <Textarea
                    bind:value={general.smallDesc.tr}
                    placeholder="Kısa Açıklama Girin"
                    required="false"
                   
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="smalldescs"
                  >
                    Kısa Açıklama EN
                  </label>

                  <Textarea
                    bind:value={general.smallDesc.en}
                    placeholder="Kısa Açıklama Girin"
                    required="false"
                  
                  />
                </div>
              </div>
            </div>
            <h6 class="secondary px-4 font-bold text-sm">ŞUBE 1 DETAYLAR</h6>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Headertr"
                  >
                    ŞUBE 1 İSİM TR
                  </label>

                  <Input
                    bind:value={general.branch1Header.tr}
                    placeholder="Şube 1 Adını Girin"
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
                    ŞUBE 1 İSİM EN
                  </label>

                  <Input
                    bind:value={general.branch1Header.en}
                    placeholder="Şube 1 Adını Girin"
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
                    Şube 1 Açıklama TR
                  </label>

                  <Textarea
                    bind:value={general.branch1Desc.tr}
                    placeholder="Şube 1 Açıklama Girin"
                    required="false"
                   
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Headeren"
                  >
                    Şube 1 Açıklama EN
                  </label>

                  <Textarea
                    bind:value={general.branch1Desc.en}
                    placeholder="Şube 1 Açıklama Girin"
                    required="false"
                   
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
                    ŞUBE 1 ADRES TR
                  </label>

                  <Textarea
                    bind:value={general.branch1Address.tr}
                    placeholder="Şube 1 Adresini Girin"
                    required="false"
                   
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch1Addressen"
                  >
                    ŞUBE 1 ADRES EN
                  </label>

                  <Textarea
                    bind:value={general.branch1Address.en}
                    placeholder="Şube 1 Adresini Girin"
                    required="false"
                    
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
                    Şube 1 Telefon TR
                  </label>

                  <Input
                    bind:value={general.branch1Tel.tr}
                    placeholder="Kısa Açıklama Girin"
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
                    Şube 1 Telefon EN
                  </label>

                  <Input
                    bind:value={general.branch1Tel.en}
                    placeholder="Kısa Açıklama Girin"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <h6 class="secondary px-4 font-bold text-sm">ŞUBE 2 DETAYLAR</h6>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Headertr"
                  >
                    ŞUBE 2 İSİM TR
                  </label>

                  <Input
                    bind:value={general.branch2Header.tr}
                    placeholder="Şube 2 Adını Girin"
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
                    ŞUBE 2 İSİM EN
                  </label>

                  <Input
                    bind:value={general.branch2Header.en}
                    placeholder="Şube 2 Adını Girin"
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
                    Şube 2 Açıklama TR
                  </label>

                  <Textarea
                    bind:value={general.branch2Desc.tr}
                    placeholder="Şube 2 Açıklama Girin"
                    required="false"
                    
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Headeren"
                  >
                    Şube 2 Açıklama EN
                  </label>

                  <Textarea
                    bind:value={general.branch2Desc.en}
                    placeholder="Şube 2 Açıklama Girin"
                    required="false"
                    
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
                    ŞUBE 2 ADRES TR
                  </label>

                  <Textarea
                    bind:value={general.branch2Address.tr}
                    placeholder="Şube 2 Adresini Girin"
                    required="false"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="branch2Addressen"
                  >
                    ŞUBE 2 ADRES EN
                  </label>

                  <Textarea
                    bind:value={general.branch2Address.en}
                    placeholder="Şube 2 Adresini Girin"
                    required="false"
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
                    Şube 2 Telefon TR
                  </label>

                  <Input
                    bind:value={general.branch2Tel.tr}
                    placeholder="Kısa Açıklama Girin"
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
                    Şube 2 Telefon EN
                  </label>

                  <Input
                    bind:value={general.branch2Tel.en}
                    placeholder="Kısa Açıklama Girin"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <h6 class="secondary px-4 font-bold text-sm">İLETİŞİM</h6>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="whatsapptr"
                  >
                    EMAIL TR
                  </label>

                  <Input
                    bind:value={general.email.tr}
                    placeholder="info@armadasmile.com"
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
                  EMAIL EN
                  </label>

                  <Input
                    bind:value={general.email.en}
                    placeholder="info@armadasmile.com"
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
                    WHATSAPP TR
                  </label>

                  <Input
                    bind:value={general.whatsapp.tr}
                    placeholder="https://wa.me/+905452451254"
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
                    WHATSAPP EN
                  </label>

                  <Input
                    bind:value={general.whatsapp.en}
                    placeholder="https://wa.me/+905452451254"
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
                    FACEBOOK TR
                  </label>

                  <Input
                    bind:value={general.facebook.tr}
                    placeholder="https://www.facebook.com/Armada-Smile-653493654802568"
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
                    FACEBOOK EN
                  </label>

                  <Input
                    bind:value={general.facebook.en}
                    placeholder="https://www.facebook.com/Armada-Smile-653493654802568"
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
                    INSTAGRAM TR
                  </label>

                  <Input
                    bind:value={general.instagram.tr}
                    placeholder="https://www.facebook.com/Armada-Smile-653493654802568"
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
                    INSTAGRAM EN
                  </label>

                  <Input
                    bind:value={general.instagram.en}
                    placeholder="https://www.facebook.com/Armada-Smile-653493654802568"
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
                    COPYRIGHT TR
                  </label>

                  <Input
                    bind:value={general.copyright.tr}
                    placeholder="© 2022 Armada Smile. Tüm Hakları Saklıdır."
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
                    COPYRIGHT EN
                  </label>

                  <Input
                    bind:value={general.copyright.en}
                    placeholder="© 2022 Armada Smile. All rights reserved"
                    required="false"
                    type="text"
                    />
                </div>
              </div>
            </div>
            <h6 class="secondary px-4 font-bold text-sm">HAKKIMIZDA BÖLÜMÜ</h6>

            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="aboutHeadertr"
                  >
                    HAKKIMIZDA BAŞLIK TR
                  </label>

                  <Input
                    bind:value={general.aboutHeader.tr}
                    placeholder="Hakkımızda Başlık TR"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="aboutHeaderen"
                  >
                    HAKKIMIZDA BAŞLIK EN
                  </label>

                  <Input
                    bind:value={general.aboutHeader.en}
                    placeholder="Hakkımızda Başlık EN"
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
                    for="aboutDesctr"
                  >
                    HAKKIMIZDA AÇIKLAMA TR
                  </label>

                  <Textarea
                    bind:value={general.aboutDesc.tr}
                    placeholder="Hakkımızda Açıklama TR"
                    required="false"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="aboutDescen"
                  >
                    HAKKIMIZDA AÇIKLAMA EN
                  </label>

                  <Textarea
                    bind:value={general.aboutDesc.en}
                    placeholder="Hakkımızda Açıklama EN"
                    required="false"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="chairmanTitletr"
                  >
                    BAŞHEKİM İSİM TR
                  </label>

                  <Input
                    bind:value={general.chairmanName.tr}
                    placeholder="Başhekim İsim TR"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="chairmanTitleen"
                  >
                    BAŞHEKİM İSİM EN
                  </label>

                  <Input
                    bind:value={general.chairmanName.en}
                    placeholder="Başhekim İsim EN"
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
                    for="chairmanTitletr"
                  >
                    BAŞHEKİM ÜNVAN TR
                  </label>

                  <Input
                    bind:value={general.chairmanTitle.tr}
                    placeholder="Başhekim TR"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="chairmanTitleen"
                  >
                    BAŞHEKİM ÜNVAN EN
                  </label>

                  <Input
                    bind:value={general.chairmanTitle.en}
                    placeholder="Başhekim EN"
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
                    for="chairmanTexttr"
                  >
                    BAŞHEKİM METİN TR
                  </label>

                  <Textarea
                    bind:value={general.chairmanText.tr}
                    placeholder="Başhekim Metin TR"
                    required="false"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="chairmanTexten"
                  >
                    BAŞHEKİM METİN EN
                  </label>

                  <Textarea
                    bind:value={general.chairmanText.en}
                    placeholder="Başhekim Metin EN"
                    required="false"
                  />
                </div>
              </div>
            </div>
            <h6 class="secondary px-4 font-bold text-sm">KLİNİKLER BÖLÜMÜ</h6>
            <div class="flex flex-wrap my-4">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="clinicHeadertr"
                  >
                    KLİNİK BAŞLIK TR
                  </label>

                  <Input
                    bind:value={general.clinicHeader.tr}
                    placeholder="Klinik Başlık TR"
                    required="false"
                    type="text"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="clinicHeaderen"
                  >
                    KLİNİK BAŞLIK EN
                  </label>

                  <Input
                    bind:value={general.clinicHeader.en}
                    placeholder="Klinik Başlık EN"
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
                    for="clinicDesctr"
                  >
                    KLİNİK AÇIKLAMA TR
                  </label>

                  <Textarea
                    bind:value={general.clinicDesc.tr}
                    placeholder="Klinik Açıklama TR"
                    required="false"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="clinicDescen"
                  >
                    KLİNİK AÇIKLAMA EN
                  </label>

                  <Textarea
                    bind:value={general.clinicDesc.en}
                    placeholder="Klinik Açıklama EN"
                    required="false"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap my-4">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="breadcrumbtr"
                    >
                      KLİNİK BREADCRUMB TR
                    </label>
  
                    <Textarea
                      bind:value={general.clinicBC.tr}
                      placeholder="Klinik Breadcrumb TR"
                      required="false"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="breadcrumben"
                    >
                      KLİNİK BREADCRUMB EN
                    </label>
  
                    <Textarea
                      bind:value={general.clinicBC.en}
                      placeholder="Klinik Breadcrumb EN"
                      required="false"
                      
                    />
                  </div>
                </div>
              </div>


            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4 text-right mt-5">
                <button
                  on:click={updateGeneral}
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
