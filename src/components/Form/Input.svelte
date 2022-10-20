<script>
  import {
    emailValidator,
    requiredValidator,
  } from "../Validators/validator.js";
  import { createFieldValidator } from "../Validators/validation.js";
  import { TranslateApiMessage } from "../../services/language";
  import { onDestroy } from "svelte";
  export let value;
  export let isValid;
  export let required;
  export let type;
  export let placeholder = "Please type something";
  export let customClass = "";
  let validate, validity;

  let validations = [];

  if (required) {
    validations = [...validations, requiredValidator()];
  }

  if (type && type == "email") {
    validations = [...validations, emailValidator()];
  }
  [validity, validate] = createFieldValidator(...validations);

  const validityUnsub = validity.subscribe((_validity) => {
    isValid = _validity.valid;
  });

  onDestroy(validityUnsub);
</script>

<input
  class="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 {customClass}"
  type="text"
  bind:value
  {placeholder}
  class:field-danger={!$validity.valid}
  class:field-success={$validity.valid}
  use:validate={value}
/>

{#if $validity.dirty && !$validity.valid}
  <span class="text-red-500 text-xs">
    {$TranslateApiMessage($validity.message)}
  </span>
{/if}
