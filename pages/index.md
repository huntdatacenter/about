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

  <div class="row">
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
  margin-bottom: 64px;
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
  margin-right: 40px;
}

.row {
  max-width: 960px;
  margin: 0 auto !important;
}

.column {
  float: left;
  width: 80%;
  min-height: 50px;
  padding-bottom: 32px;
  margin-left: 10vw;
  margin-right: 10vw;
}

@media (min-width: 720px) {

  .column {
    width: 33%;
    margin-left: 0;
    margin-right: 0;
  }

}

</style>
