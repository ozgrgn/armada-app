<script>
  // core components
  import CardStats from "../Cards/CardStats.svelte";
  import { Translate } from "../../services/language";
  import { type } from "../../services/store";
</script>

<!-- Header -->
<div class="relative">
  <div class="w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap justify-center">
        {#if $type == "SUPER"}
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle={$Translate("Companies")}
              statTitle="0"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-secondary"
            />
          </div>
        {/if}
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle={$Translate("Tags")}
            statTitle="0"
            statDescripiron="Since last week"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </div>

        {#if $type == "SUPER"}
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle={$Translate("Managers")}
              statTitle="0"
              statDescripiron="Since yesterday"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
        {/if}
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle={$Translate("Staffs")}
            statTitle="0"
            statDescripiron="Since last month"
            statIconName="fas fa-user"
            statIconColor="bg-emerald-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>
