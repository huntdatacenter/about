<script lang="ts">

export default {
  props: {
    contact: { type: String, required: true },
  },
  data() {
    return {
      isHovering: false,
      // imgSrc: this.img,
    }
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <!-- <div class="hc-block hc-grey-block"> -->
  <div class="hc-block hc-blue-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        About HUNT Cloud
      </div>
      <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
      <div class="hc-section">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              rounded="sm"
              size="x-large"
              target="_blank"
              elevation="2"
              :href="contact"
              :append-icon="isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right'"
            >
              Contact us
              <template v-slot:append>
                <!-- :class="{'ml-1': isHovering, 'mr-1': !isHovering}" -->
                <v-icon color="#ef8114"></v-icon>
              </template>
            </v-btn>
          </template>
        </v-hover>
      </div>
    </div>
    <div class="hc-block-container">
      <p>
        Sub text on privacy etc.
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
