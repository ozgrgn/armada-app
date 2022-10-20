<script>
  import { onDestroy } from "svelte";
  import { TranslateApiMessage } from "../../services/language";
  import { createFieldValidator } from "../Validators/validation.js";
  import { requiredValidator } from "../Validators/validator.js";
  export let value;
  export let values;
  export let valuesKey;
  export let valuesTitleKey;
  export let title = "Select";
  export let change = () => {};
  export let customClass = "";
  export let isValid;
  export let required;

  let validate, validity;

  let validations = [];

  if (required) {
    validations = [...validations, requiredValidator()];
  }

  [validity, validate] = createFieldValidator(...validations);

  const validityUnsub = validity.subscribe((_validity) => {
    if (value && value == "disabled") {
      isValid = false;
    } else {
      isValid = _validity.valid;
    }
  });

  onDestroy(validityUnsub);
</script>

<select
  class="{customClass
    ? ''
    : 'border-0'} text-sm rounded shadow ease-linear transition-all duration-150 {customClass}"
  class:field-danger={!$validity.valid}
  class:field-success={$validity.valid}
  use:validate={value}
  bind:value
  on:change={change(value)}
>
  <option disabled value={"disabled"}>{title}</option>
  {#each values as _value}
    <option value={_value[valuesKey]}>{_value[valuesTitleKey]}</option>
  {/each}
</select>

{#if $validity.dirty && !$validity.valid}
  <span class="text-red-500 text-xs">
    {$TranslateApiMessage($validity.message)}
  </span>
{/if}

<style>
  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ef4444' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  }
</style>
