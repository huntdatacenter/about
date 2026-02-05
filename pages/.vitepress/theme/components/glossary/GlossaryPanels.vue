<script lang="ts">
interface GlossaryItem {
  title: string
  text: string
  href: string
}

export default {
  props: {
    items: {
      type: Array<GlossaryItem>,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <!-- TODO: add search -->
  <v-expansion-panels>
    <v-expansion-panel
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :text="item.text"
    ></v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped></style>
