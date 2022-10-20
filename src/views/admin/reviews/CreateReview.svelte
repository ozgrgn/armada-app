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
  let reviewLang;
  let reviewSort;
  let reviewAvatar;
  let avatarIsValid;
  let reviewName;
  let reviewDate;
  let reviewPlatform;
  let reviewStars;
  let reviewText;
  let reviewLink;
  let platforms = [{ p: "TrustPilot" }, { p: "Google" }, { p: "Facebook" }];
  let stars = [{ s: "1" }, { s: "2" }, { s: "3" }, { s: "4" }, { s: "5" }];
  let langs = [{ l: "tr" }, { l: "en" }];
  const addReview = async () => {
    console.log(reviewAvatar, "reviewAvatar");
    let data = {
      reviewLang,
      reviewSort,
      reviewAvatar,
      reviewName,
      reviewDate,
      reviewPlatform,
      reviewText,
      reviewLink,
    };
    let response = await RestService.addReview(data);
    if (response["status"]) {
      ToastService.success($Translate("Successfully-completed"));

      navigate("/admin/reviews");
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
        navigate("/admin/reviews");
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
          <h3 class="font-semibold text-lg text-blueGray-700">Yorum Ekle</h3>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div class="flex flex-wrap my-4">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  İsim Soyisim
                </label>

                <Input
                  bind:value={reviewName}
                  placeholder="Yorum Yapanın Adı Soyadı"
                  required={false}
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Link
                </label>

                <Input
                  bind:value={reviewLink}
                  placeholder="Yorum Linki"
                  required={false}
                />
              </div>
            </div>

            <div class="w-full lg:w-2/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Dil
                </label>

                <Select
                  bind:value={reviewLang}
                  values={langs}
                  valuesKey={"l"}
                  valuesTitleKey={"l"}
                  title="DİL"
                  required={false}
                  customClass={"w-full border-0 uppercase"}
                />
              </div>
            </div>
            <div class="w-full lg:w-1/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  No
                </label>

                <Input
                  bind:value={reviewSort}
                  placeholder="1"
                  required={false}
                />
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Tarih
                </label>

                <Input
                  bind:value={reviewDate}
                  placeholder="28.05.2021"
                  required={false}
                />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Platform
                </label>

                <Select
                  bind:value={reviewPlatform}
                  values={platforms}
                  valuesKey={"p"}
                  valuesTitleKey={"p"}
                  title="Platform"
                  placeholder="28.05.2021"
                  required={false}
                  customClass={"w-full border-0"}
                />
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Yıldız
                </label>

                <Select
                  bind:value={reviewStars}
                  values={stars}
                  valuesKey={"s"}
                  valuesTitleKey={"s"}
                  title="Yıldız"
                  required={false}
                  customClass={"w-full border-0"}
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-name"
                >
                  Yorum
                </label>

                <Textarea
                  bind:value={reviewText}
                  placeholder="Yorum Yapanın Adı Soyadı"
                  required={false}
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-logo"
                >
                  Avatar
                </label>

                <Image bind:value={reviewAvatar} bind:isValid={avatarIsValid} />
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4 text-right mt-2">
              <button
                on:click={addReview}
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
