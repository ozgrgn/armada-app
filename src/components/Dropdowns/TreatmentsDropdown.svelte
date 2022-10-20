<script>
  import { link } from "svelte-navigator";
  import { lang } from "../../services/store";
  import { createPopper } from "@popperjs/core";
  import { Translate } from "../../services/language.js";

  export let navbarClose = () => {};
  export let treatments;

  console.log(treatments, "treatments dropdown");
  // core components
  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = (event) => {
   
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
  const toggleDropdown2 = (event) => {
   
   event.preventDefault();
   if (dropdownPopoverShow) {
     dropdownPopoverShow = false;
   } else {
     dropdownPopoverShow = true;
     createPopper(btnDropdownRef, popoverDropdownRef, {
       placement: "bottom-start",
     });
    
   } navbarClose();
 };
</script>

<div>
  <a
    class="hover:text-blueGray-300 text-blueGray-100 px-3 py-2 flex items-center text-sm uppercase font-bold"
    href="#pablo"
    bind:this={btnDropdownRef}
    on:click={toggleDropdown}
  >
    {$Translate("our_treatments_BIG")}
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
    {#each treatments as treatment}
      <a
        use:link
        href="/treatments/{treatment.link[`${$lang}`]}"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 "
        on:click={toggleDropdown2}
      >
        {treatment.header[`${$lang}`]}
      </a>
    {/each}
  </div>
</div>
