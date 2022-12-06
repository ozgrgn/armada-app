<script>
  import Banner from "./Banner.svelte";
  import Clinic from "./Clinic.svelte";
  import RestService from "../../../services/rest";
  import { lang } from "../../../services/store";

  import Dark from "./Dark.svelte";
  import Services from "./Services.svelte";
  import Reviews from "./Reviews.svelte";
  import Social from "./../../../components/Social/Social.svelte";
 export let form;
  let home;
  let reviews;
export let treatments


  const getHome = async () => {
    let response = await RestService.getHome();
    home = response["home"];
  };
  getHome();

  const getReviews = async () => {
    let response = await RestService.getReviews();
    reviews = response["reviews"];
  };
  getReviews();


</script>

{#if home}
  <Banner {home} />
{/if}
{#if reviews}
{#key $lang}
  <Reviews {reviews} />
  {/key}
{/if}
{#if home}
  <Clinic {home}/>
{/if}

{#if form && home && treatments }
  <Dark {form} {home} {treatments}/>
{/if}
{#if treatments }
<Services {treatments} />
{/if}
<div class="flex justify-center my-5">
  <script src="https://bookimed-assets.s3.eu-central-1.amazonaws.com/partners/widget/widget.js" async></script>
  <div id="bookimed-widget" data-bookimed-widget-id="3c6a8a78-402b-433b-a4d8-1e5a6c9a56ea" data-lang="en"></div>
</div>
<!-- <GalleryLine /> -->
