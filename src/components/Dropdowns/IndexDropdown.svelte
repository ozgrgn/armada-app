<script>
  import { link } from "svelte-navigator";
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  // core components
  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = (event) => {
    console.log("manamana")
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };

  const addRes = async () => {
    console.log("manamana")
  }
</script>

<div>
  <a
    class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-xs uppercase font-bold"
    href="#pablo"
    bind:this={btnDropdownRef}
   
  >
    TEDAVİLER
  </a>

  <div
    bind:this={popoverDropdownRef}
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
      ? 'block'
      : 'hidden'}"
  >
    <!-- <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
    >
      Admin Layout
    </span> -->
    <a
      use:link
      href="/treatments/dental-implants"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      on:click={addRes}
    >
      Dental Implants
    </a>
    <a
      use:link
      href="/admin/settings"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Zirconium Crowns
    </a>
    <a
      use:link
      href="/admin/tables"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Bone Grafting
    </a>
    <a
      use:link
      href="/admin/maps"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Laminate Veneers
    </a>

    <a
      use:link
      href="/auth/login"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Sinus Lifting
    </a>
    <a
      use:link
      href="/auth/login"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Smile Makeover
    </a>
    <a
      use:link
      href="/auth/register"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Teeth Whitening
    </a>

    <a
      use:link
      href="/landing"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      E-max Crowns
    </a>
  </div>
</div>
