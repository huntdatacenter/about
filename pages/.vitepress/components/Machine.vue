<script>
export default {
  name: 'Machine',
  props: {
    computeId: { type: Number, default: () => 0 },
    flavors: { type: Array, default: () => [] },
    gpus: { type: Array, default: () => [] },
    machines: { type: Array, default: () => [] },
    availableGpus: { type: Array, default: () => [] },
  },

  emits: ["close"],

  data() {
    return {
    formData: {
      id: null,
      name: null,
      flavor: null,
      gpu: null,
      subscription: null,
    },
    overlay: true,
    multipliers: {
      COMMITMENT1Y: 1,
      COMMITMENT3Y: 1 / 3,
      ONDEMAND1D: 365,
      ONDEMAND1M: 365,
      ONDEMAND1Y: 365,
      BLUE1D: 365,
      BLUE1M: 365,
      BLUE1Y: 365,
    },
    periods: {
      COMMITMENT1Y: "1 Year",
      COMMITMENT3Y: "3 Years",
      ONDEMAND1D: "1 Day",
      ONDEMAND1M: "1 Month",
      ONDEMAND1Y: "1 Year",
      BLUE1D: "1 Day",
      BLUE1M: "1 Month",
      BLUE1Y: "1 Year",
    },
    subscriptions: [
      { text: "Commitment (1 Year)", value: "COMMITMENT1Y" },
      { text: "Commitment (3 Years)", value: "COMMITMENT3Y" },
      { text: "On demand (1 Day)", value: "ONDEMAND1D" },
      { text: "On demand (1 Month)", value: "ONDEMAND1M" },
      { text: "On demand (1 Year)", value: "ONDEMAND1Y" },
      { text: "Blue (1 Day)", value: "BLUE1D" },
      { text: "Blue (1 Month)", value: "BLUE1M" },
      { text: "Blue (1 Year)", value: "BLUE1Y" },
    ],
  };
  },  

  computed: {
    getPeriod() {
      return this.formData.flavor && this.formData.subscription
        ? this.periods[this.formData.subscription]
        : null;
    },

    //Lurer på om jeg skal endre denne til å bli noe som getFlavor som henter ut det itemet, så kan jeg bruke den rundt om kring i koden
    getPrice() {
      if (!this.formData.flavor && !this.formData.subscription) {
        return 0;
      }
      const subscriptionType = this.formData.subscription.slice(0, -2);
      const commitmentLength = this.formData.subscription.slice(-2);
      console.log(this.flavors)
      if (subscriptionType === "ONDEMAND" || subscriptionType === "BLUE") {
          const price = this.flavors.find((item) => item["service.unit"] === this.formData.flavor && item["service.level"] === subscriptionType)
          return price ? parseInt(price["price.nok.ex.vat"]) : 0;
      }
      const price = this.flavors.find(
        (item) => item["service.unit"] === this.formData.flavor && item["service.level"] === subscriptionType && item["service.commitment"] === commitmentLength)
      console.log(price)
      return price ? parseInt(price["price.nok.ex.vat"]) : 0;

    },
    // Litt bugs her med blue og ONDEMAND
    getGpuPrice() {
      if (!this.formData.flavor && !this.formData.subscription) {
        return 0;
      }
      const subscriptionType = this.formData.subscription.slice(0, -2);
      const price = this.gpus.find(
        (item) => item["service.unit"] === this.formData.gpu && item["service.level"] === subscriptionType)

      console.log(price)
      return price ? parseInt(price["price.nok.ex.vat"]) : 0;
    },
    getYearPrice() {
      return this.formData.flavor && this.formData.subscription
        ? parseFloat(
            (
              this.getPrice *
              this.multipliers[this.formData.subscription]
            ).toFixed(2)
          )
        : 0;
    },
    getGpuSubscription() {
      // NOTE GPU does not have blue subscription hence taken as on demand in case blue is selected for compute
      return this.formData.subscription
        ? this.formData.subscription.replace("BLUE", "ONDEMAND")
        : this.formData.subscription;
    },
    getGpuYearPrice() {
      return this.formData.gpu && this.getGpuSubscription
        ? parseFloat(
            (
              parseInt(this.getGpuPrice) *
              this.multipliers[this.getGpuSubscription]
            ).toFixed(2)
          )
        : 0;
    },
    getFlavors() {
      if (!this.formData.subscription) {
        return [];
      }
      return this.machines.filter((item) => item)
    },
    getGpus() {
      return this.availableGpus.map((item) => {
          return{
            title: item["type"] + " - " + item["ram"] + "GB",
            value: item["type"],
            };
          }
      );
    },
  },

  created() {
    this.formData.id = this.computeId;
    this.formData.name = `machine-${this.computeId}`;
  },

  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      if (!this.formData.flavor) {
        console.log("No machine type selected");
        return;
      }
      const name = this.formData.gpu
        ? `${this.formData.name} (incl. GPU)`
        : this.formData.name;
      const flavor = this.formData.gpu
        ? `${this.formData.flavor["MACHINENAME"]}.${this.formData.gpu["GPUTYPE"]}`
        : this.formData.flavor["MACHINENAME"];
      const totalPrice = this.getYearPrice + this.getGpuYearPrice;
      const type = null;
      this.$emit("close", {
        id: this.formData.id,
        name: name,
        flavor: flavor,
        cpu: this.formData.flavor ? parseInt(this.formData.flavor["CPU"]) : 0,
        ram: this.formData.flavor ? parseInt(this.formData.flavor["RAM"]) : 0,
        ramMb: this.formData.flavor
          ? 1024 * parseInt(this.formData.flavor["RAM"])
          : 0,
        type: type,
        period: this.getPeriod,
        price: totalPrice,
      });
    },
  },
};
</script>

<template>
  <v-overlay v-model="overlay" >
    <v-card max-width="600px" light>
      <v-card-title>
        <span class="text-h5">Add Compute</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="formData.name"
                label="Name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="formData.subscription"
                :items="subscriptions"
                item-title="text"
                item-value="value"
                label="Subscription type"
                required
                outlined
              >
            
            </v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="formData.flavor"
                :items="getFlavors"
                label="Machine type"
                outlined
                required
                :disabled="!formData.subscription"
              >
                <template #item="{ item, props }">
                    <VDivider v-if="'divider' in item.raw" />
                    <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header"/>
                    <VListItem v-else v-bind="props" :title="item.title" :value="item.value"/>
                  </template>
            </v-autocomplete>
              <!-- Fortsett her neste gang. item Titlte. -->
            </v-col>
            <v-col v-show="formData.flavor" cols="12" sm="6">
              <v-text-field
                v-model="getPrice"
                label="Compute Price"
                suffix="NOK ex. VAT"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-show="formData.flavor" cols="12" sm="6">
              <v-text-field
                v-model="getYearPrice"
                label="Compute Price / Year"
                suffix="NOK ex. VAT / Year"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="formData.gpu"
                :items="getGpus"
                label="GPU type (optional)"
                outlined
                clearable
                :disabled="!formData.subscription"
              ></v-select>
            </v-col>
            <v-col v-show="formData.gpu" cols="12" sm="6">
              <v-text-field
                v-model="getGpuPrice"
                label="GPU Price"
                suffix="NOK ex. VAT"
                readonly
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-show="formData.gpu" cols="12" sm="6">
              <v-text-field
                v-model="getGpuYearPrice"
                label="GPU Price / Year"
                suffix="NOK ex. VAT / Year"
                readonly
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close()"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
