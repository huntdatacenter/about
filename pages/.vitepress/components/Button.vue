<script lang="ts">

export default {
  // name: 'ContentHeader',
  props: {
    title: { type: String, required: true },
    href: { type: String, default: "" },
    elevation: { type: String, default: "1" },
    target: { type: String, default: "" },
    size: { type: String, default: "" },
    block: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
    // height: { type: String, default: "400px" },
  },
  data() {
    return {
      // item: null,
    }
  },
  mounted() {
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn
        v-bind="props"
        rounded="sm"
        :block="block"
        :color="blue ? '#253a55' : '#fff'"
        :size="size"
        :target="target"
        :elevation="elevation"
        :href="href"
        :append-icon="isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right'"
      >
        {{ title }}
        <template v-slot:append>
          <!-- :class="{'ml-1': isHovering, 'mr-1': !isHovering}" -->
          <v-icon class="mt-1" color="#ef8114"></v-icon>
        </template>
      </v-btn>
    </template>
  </v-hover>
</template>

<style scoped>

</style>
