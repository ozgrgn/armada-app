<script>
  import { lang } from "../../services/store";
  import ENV from "../../env";
  import { Translate } from "../../services/language.js";

  let name;
  let phone;
  let selectedTreatment;
  let formStatus = undefined;
  let warn;
  export let treatments;
  console.log(treatments, "smallform treatments");
  const addRes = async () => {
    let date = new Date().toLocaleString("tr-TR");
    let bodyData = {
      name,
      phone,
      selectedTreatment,
      date,
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
</script>

<div class="flex justify-center">
  <div
    class="bg-white rounded-xl shadow flex content-center justify-between w-80"
  >
    <div class=" contact-form w-full text-center  ">
      <p class="text-xl font-extrabold  text-gray-600 py-3">
        {$Translate("diagnosis")} <br /> {$Translate("in_minutes")}
       
      </p>
      <form class="contact__form">
   
       
        <ul class={formStatus == true ? "no-display" : "display"}>
          <li style=" height:50px !important;">
            <input
              style="
                            background: url('/assets/img/icons/user.png') no-repeat
                              scroll 7px 8px;
                            background-size: 20px 20px;
                            padding-left: 35px; 
                           
                          "
              type="text"
              class="mt-1 w-4/5 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
              name="name"
              placeholder="Name Surname"
              autocomplete="name"
              bind:value={name}
            />
          </li>
          <li>
            <input
              style="
                            background: url('/assets/img/icons/smartphone.png') no-repeat
                              scroll 7px 8px;
                            background-size: 20px 20px;
                            padding-left: 35px;
                          "
              type="tel"
              name="tel"
              placeholder="Phone"
              class="mt-1 w-4/5  focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
              autocomplete="tel"
              bind:value={phone}
            />
          </li>
          <li>
            <select
              id="country"
              name="country"
              class="mt-3 w-4/5  focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
              bind:value={selectedTreatment}
              >
              {#each treatments as treatment}
                <option>{treatment.header[`${$lang}`]}</option>
              {/each}
            </select>
          </li>
          <div
          class="alert-warn  text-red-500 text-sm contact__msg {warn == true ? 'block' : 'hidden'}"
          role="alert"
        >
        {$Translate("form_validation")}
        </div>
        <div
        class="alert  pt-5 text-green-500 text-sm  contact__msg {formStatus == true
          ? 'block'
          : 'hidden'}"
        role="alert"
      >
      {$Translate("success_message")}
      </div>
          <li>
            <button
              type="button"
              class="my-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              on:click={addRes}
            >{$Translate("contact_us")}
              </button
            >
          </li>
          <li />
        </ul>
      </form>
    </div>
  </div>
</div>
