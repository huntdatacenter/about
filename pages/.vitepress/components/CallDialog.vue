<script lang="ts">
export default {
  name: "CallDialog",
  props: {
    title: { type: String, required: true, default: "Title" },
    elevation: { type: String, default: "1" },
    size: { type: String, default: "" },
    block: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
  },
  emits: [
    "input", // used to update value prop assigned from parent using v-model
  ],
  data() {
    return {
      requirements: [
        "<b>We care about your privacy.</b> Read our <a href='https://docs.hdc.ntnu.no/govern-science/privacy-statement/#privacy-statement-for-services-users' target='_blank' style='color: #00509e; font-weight: bold;;'>privacy statement</a> to learn how we process your personal data when you talk to us.",
      ],
      panel: 0,
      dialog: false,
      confirmedRequirements: false,
      part0prefix: "47",
      part1: "402",
      part2: "92",
      part3: "724",
      btnIcon: "mdi-phone",
    }
  },
  // watch: {
  //   variableName: function(after, before) {
  //     console.log(after);
  //   },
  // },
  mounted() {
    this.panel = 0
  },
  computed: {},
  methods: {
    closeBtn() {
      this.panel = 0
      this.dialog = false
      this.$emit("input", false)
    },
    confirmRequirements() {
      this.confirmedRequirements = true
      this.panel = 1
    },
  },
}
</script>

<template>
  <div>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <!-- rgba(37, 58, 85, 1) -->
        <v-btn
          v-bind="props"
          rounded="sm"
          :class="{
            'hc-text-dark': blue ? false : true,
            'hc-text-light': blue ? true : false,
          }"
          :block="block"
          :color="blue ? '#253a55' : '#fff'"
          :size="size"
          :elevation="elevation"
          :append-icon="isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right'"
          @click="dialog = true"
        >
          {{ title }}
          <template v-slot:append>
            <v-icon color="#ef8114" style="margin-top: 1px !important"></v-icon>
          </template>
        </v-btn>
      </template>
    </v-hover>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="960px">
      <v-card>
        <v-toolbar dark color="#00509e">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon fab @click="closeBtn">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-sheet class="pa-4">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title> Request details </v-expansion-panel-title>
              <v-expansion-panel-text class="mt-6">
                <v-row justify="center">
                  <v-col v-for="item in requirements" class="pb-0 pt-0" cols="12" :key="item" dense>
                    <p class="mb-2" v-html="item"></p>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" class="v-col-xs-12 v-col-sm-8 v-col-md-4">
                    <v-btn color="success" block @click="confirmRequirements"> Continue </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel :disabled="!confirmedRequirements">
              <v-expansion-panel-title> Get on call </v-expansion-panel-title>
              <v-expansion-panel-text class="mt-6">
                <v-row justify="center">
                  <v-col cols="10">
                    <p class="text-h6 body-1">Hi, my name is Signe&nbsp;Elisabeth&nbsp;Åsberg.</p>
                    <br />
                    <p>Whether you're just starting with AI or ready to accelerate, I can help you move forward.</p>
                    <p>Our digital labs can be set-up to according to your ambitions and budget.</p>
                  </v-col>
                </v-row>
                <v-row class="mt-8 mb-8" justify="center">
                  <v-col cols="12" class="v-col-xs-10 v-col-sm-8 v-col-md-6">
                    <v-btn size="x-large" color="primary" block :href="`tel:+${part0prefix}${part1}${part2}${part3}`">
                      <v-icon>{{ btnIcon }}</v-icon
                      >&nbsp; Call (+{{ part0prefix }}) {{ part1 }} {{ part2 }} {{ part3 }}
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="10" class="v-col-xs-8 v-col-sm-6 v-col-md-4">
                    <v-btn color="link" block @click="closeBtn"> Close </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped></style>
