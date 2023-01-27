---
layout: page
sidebar: false
---

<script setup>

import VPButton from '@theme/components/VPButton.vue'
import VPImage from '@theme/components/VPImage.vue'

//const members = []
</script>

<div class="hunt-cloud-container">
  <div class="hunt-cloud-header">
    <div class="hunt-cloud-header-img"></div>
  </div>

  <!-- <VPImage
    image="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2"
    alt="Heading"
    height="300"
    width="300"
  /> -->
  <!-- theme = brand / alt /sponsor -->

  <div class="row" style="max-width: 960px;
  margin: 0 auto !important;">
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="brand"
        text="Do science"
        href="#do-science"
      />
    </div>
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="alt"
        text="Administer science"
        href="#administer-science"
      />
    </div>
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="sponsor"
        text="Find out"
        href="#find-out"
      />
    </div>
  </div>

</div>

<style scoped>

.hunt-cloud-header {
  width: 100vw;
  max-width: 100%;
  margin-bottom: 50px;
}

.hunt-cloud-header-img {
  background-image: url("https://assets.hdc.ntnu.no/assets/artworks/hunt-cloud_explore_medium.jpg");
  background-position: 50% 72%;
  //background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #004c7b;
  width: 100vw;
  max-width: 100%;
  height: 350px;
  object-fit: fill;
  margin: 0 auto !important;
}

.hunt-cloud-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px
}

.column {
  float: left;
  width: 33.33%;
}

</style>
