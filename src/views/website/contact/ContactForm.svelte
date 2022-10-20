<script>
    import { lang } from "../../../services/store";

   let name;
let phone;
let formStatus = undefined;
  let warn;
  export let treatments;
  const addRes = async () => {
    let date = new Date().toLocaleString("tr-TR");
    let bodyData = {
      name,
      phone,
      country,
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
<div class=" contact-form w-full text-center  ">
  <p class="text-xl font-extrabold  text-gray-600 py-3">
    İletişime Geçin
  </p>
  <form class="contact__form">
    <div
      class="alert alert-success contact__msg {formStatus == true
        ? 'block'
        : 'hidden'}"
      role="alert"
    >
      Your message was sent successfully.
    </div>
    <div
      class="alert-warn  contact__msg {warn == true
        ? 'block'
        : 'hidden'}"
      role="alert"
    >
      Please enter your name and phone
    </div>
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
          class="mt-1 w-52 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
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
          class="mt-1 w-52 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
          autocomplete="tel"
          bind:value={phone}
        />
      </li>
      <li>
        <select
          id="country"
          name="country"
          class="mt-3 w-52 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
          {#each treatments as treatment}
            <option>{treatment.header[`${$lang}`]}</option>
          {/each}
        </select>
      </li>
      <li>
        <button
          type="button"
          class="my-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          on:click={addRes}
        >
          Get Free Quote</button
        >
      </li>
      <li />
    </ul>
  </form>
</div>