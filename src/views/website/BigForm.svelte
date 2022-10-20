<script>
  import { lang } from "../../services/store";
  import Image from "../../components/Form/Image.svelte";
  import ENV from "../../env";
  import { Translate } from "../../services/language";
  export let treatment;

  console.log(treatment, "bigform treatment");
  const addRes = async () => {
    if (treatment) {
      selectedTreatment = treatment.header[`${$lang}`];
    }
    let date = new Date().toLocaleString("tr-TR");
    let bodyData = {
      name,
      phone,
      date,
      image,
      message,
      selectedTreatment,
    };
    if (!name || !phone) {
      warn = true;
      return;
    }
    warn = false;
    formStatus = true;
    console.log(bodyData, "bodydata");

    // https://armada-lp-backend.herokuapp.com
    const res = await fetch(`${ENV.API_URL}`, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await res.json();
    console.log(json);
  };
  let name;
  let phone;
  let image;
  let message;
  let warn;
  let formStatus;
  let selectedTreatment;
</script>

<div class="mt-5 lg:mt-0 md:col-span-1 bg-white shadow md:rounded-r-xl">
  <form action="#" method="POST">
    <div class="sm: sm:overflow-hidden">
      <div
        class="px-4 py-5 bg-gray-150 space-y-6 sm:py-6 sm:lg:px-5  md:rounded-r-xl"
      >
        <div class="grid grid-cols-2 gap-5">
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              {$Translate("name")}
            </label>
            <div class="mt-1 ">
              <input
                style="
                          background: url('/assets/img/icons/user.png') no-repeat
                            scroll 7px 8px;
                          background-size: 20px 20px;
                          padding-left: 35px; 
                          width:100%
                         
                        "
                type="text"
                class="mt-1 w-1/1 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                name="name"
                placeholder=" {$Translate('name')}"
                autocomplete="name"
                bind:value={name}
              />
            </div>
          </div>

          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              {$Translate("phone")}
            </label>
            <div class="mt-1 ">
              <input
                style="
                background: url('/assets/img/icons/smartphone.png') no-repeat
                  scroll 7px 8px;
                background-size: 20px 20px;
                padding-left: 35px;
                width:100%
              "
                type="tel"
                name="tel"
                placeholder=" {$Translate('phone')}"
                class="mt-1 w-1/1  focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                autocomplete="tel"
                bind:value={phone}
              />
            </div>
          </div>
        </div>

        <div>
          <label for="about" class="block text-sm font-medium text-gray-700">
            {$Translate("message")}
          </label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder={$Translate("message")}
              bind:value={message}
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" for="photo">
            {$Translate("photo")}
          </label>
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-3 mtext-center">
              <div class="flex text-sm text-gray-600">
                <Image bind:value={image} />
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF Max 10 MB</p>
            </div>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            {$Translate("photo_detail")}
          </p>
        </div>
      </div>
      <div
        class="alert-warn px-5  text-red-500 text-sm contact__msg {warn == true
          ? 'block'
          : 'hidden'}"
        role="alert"
      >
        {$Translate("form_validation")}
      </div>
      <div
        class="alert  px-5 text-green-500 text-sm  contact__msg {formStatus ==
        true
          ? 'block'
          : 'hidden'}"
        role="alert"
      >
        {$Translate("success_message")}
      </div>
      <div class="px-4 py-3 bg-white text-right sm:px-6 md:rounded-r-xl">
        <button
          type="button"
          class="my-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 "
          on:click={addRes}>{$Translate("send_BIG")}</button
        >
      </div>
    </div>
  </form>
</div>
