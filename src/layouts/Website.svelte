<script>
  import Footer from "../components/Footers/Footer.svelte";
  import RestService from "../services/rest";
  import IndexNavbar from "../components/Navbars/IndexNavbar.svelte";

  import { Router, Route } from "svelte-navigator";

  import AboutIndex from "../views/website/about/AboutIndex.svelte";
  import ClinicIndex from "../views/website/clinic/ClinicIndex.svelte";
  import TreatmentIndex from "../views/website/treatments/TreatmentIndex.svelte";
  import ContactIndex from "../views/website/contact/ContactIndex.svelte";
  import Index from "../views/website/home/Index.svelte";
  import Social from "../components/Social/Social.svelte";
  let general;
  let treatments;
  let menu;
  let form;

  const getGeneral = async () => {
    let response = await RestService.getGeneral();
    general = response["general"];
  };
  getGeneral();

  const getTreatments = async () => {
    let response = await RestService.getTreatments();
    treatments = response["treatments"];
    console.log(response, "treatments");
  };
  getTreatments();

  const getMenu = async () => {
    let response = await RestService.getMenu();
    menu = response["menu"];
    console.log(response, "menu");
  };
  getMenu();

  const getForm = async () => {
    let response = await RestService.getForm();
    form = response["form"];
    console.log(form, "form");
  };
  getForm();
</script>

{#if treatments && menu}
  <IndexNavbar {treatments} {menu} />
{/if}
{#if general}
  <Social {general} />
{/if}
<Router>
  {#if general && treatments && form}
    <Route path="/" component={Index} {general} {treatments} {form} />
  {/if}
  {#if general}
    <Route path="/about" component={AboutIndex} {general} />
  {/if}
  {#if general}
    <Route path="/clinic" component={ClinicIndex} {general} />
  {/if}
  {#if treatments && form}
    <Route
      path="/treatments/:treatmentlink"
      component={TreatmentIndex}
      {treatments}
      {form}
    />
  {/if}
  {#if general && treatments && form}
    <Route
      path="/contact"
      component={ContactIndex}
      {treatments}
      {general}
      {form}
    />
  {/if}
</Router>
{#if general && treatments}
  <Footer absolute="true" {general} {treatments} />
{/if}
