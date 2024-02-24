<script lang="ts">

export default {
  props: {
    contact: { type: String, required: true },
  },
  data() {
    return {
    //   imgSrc: this.img,
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
        <v-btn rounded="1" size="x-large" target="_blank" :href="contact">Contact us</v-btn>
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
