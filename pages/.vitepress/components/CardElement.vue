<script lang="ts">
export default {
  props: {
    title: { type: String, required: true, default: "Title" },
    subtitle: { type: String, required: false, default: "" },
    text: { type: String, required: true, default: "" },
    href: { type: String, required: false, default: "" },
    link: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      // item: null,
    }
  },
  // watch: {
  //   variableName: function(after, before) {
  //     console.log(after);
  //   },
  // },
  mounted() {
    console.log("mounted")
  },
  computed: {
    // TODO
  },
  methods: {
    hoverIcon(isHovering: Boolean) {
      return isHovering ? "mdi-chevron-triple-right" : "mdi-chevron-right"
    },
  },
}
</script>

<template>
  <v-col cols="12" class="v-col-sm-12 v-col-md-6 align-self-stretch">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card
          v-bind="props"
          class="h-100"
          color="#3E628A"
          variant="tonal"
          :title="title"
          :subtitle="subtitle"
          :href="href"
          :link="link ? true : false"
          :append-icon="link ? hoverIcon(isHovering) : ''"
        >
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-body-1">{{ text }}</div>
              </v-col>
            </v-row>
            <br />
          </v-card-text>
          <template v-slot:append>
            <v-icon color="#ef8114" style="margin-top: 1px !important"></v-icon>
          </template>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>

<style scoped></style>
