<script>
    let name;
    let phone;
    let formStatus = undefined;
    let warn;
    let region = "uk";
  
    const addRes = async () => {};
  </script>
<div class="hidden md:block flex mt-10 justify-center">
    <div
      class="bg-white rounded-xl shadow flex content-center justify-between w-full"
    >
      <div class=" contact-form w-full text-center  ">
        <p class="text-md font-extrabold  text-gray-600 py-3">
          Diagnosis And Cost <br /> In Minutes
        </p>
        <form class="contact__form">
          <div
            class="alert alert-success contact__msg {formStatus ==
            true
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
                          background: url('/assets/img/icons/{region}.png') no-repeat
                            scroll 7px 8px;
                          background-size: 20px 20px;
                          padding-left: 35px;
                        "
                type="tel"
                name="tel"
                placeholder="Phone"
                class="mt-1 w-4/5 focus:ring-gray-500 focus:border-gray-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                autocomplete="tel"
                bind:value={phone}
              />
            </li>

            <li>
              <button
                type="button"
                class="my-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                on:click={addRes}
              >
                Get Free Quote</button
              >
              <!-- <input
                        type="submit"
                        obc
                        name="submit"
                        value="Get Free Quote"
                      /> -->
            </li>
            <li />
          </ul>
        </form>
      </div>
    </div>
  </div>