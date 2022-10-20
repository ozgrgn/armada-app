<script>
    import { link } from "svelte-navigator";
    import { lang } from "../../services/store";

    export let general;
  </script>
<div class="hidden md:block">
    <!-- Social Sharing Bar -->
    <div class="fixed  shadow-xl right-0 rounded-l-xl top-1/2 z-50 px-1 py-3 bg-gray-100 flex flex-col space-y-3 ">
        <!-- Facebook -->
        <a  use:link href="tel:{general.branch1Tel[`${$lang}`]}" target="_blank" 
        ><img
          class="ml-1"
          src="/assets/img/icons/phone.webp"
          height="30"
          alt="armada"
          loading="lazy"
        /></a
      >
      <a
        use:link
        href={general.facebook[`${$lang}`]}
        target="_blank"
      >
        <img
          class="ml-1"
          src="/assets/img/icons/facebook2.png "
          height="30"
          alt="armada"
          loading="lazy"
        /></a
      >
      <a
        use:link
        href={general.instagram[`${$lang}`]}
        target="_blank"
      >
        <img
          class="ml-1"
          src="/assets/img/icons/instagram2.png"
          height="30"
          alt="armada"
          loading="lazy"
        /></a
      >

      <a
        use:link
        href={general.whatsapp[`${$lang}`]}
        target="_blank"
      >
        <img
          class="ml-1"
          src="/assets/img/icons/whatsappthin.png"
          height="30"
          alt="armada"
          loading="lazy"
        /></a
      >
    </div>
  </div>

