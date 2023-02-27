---
title: Welcome
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
    <div class="hc-header-img"></div>
  </div>

  <div class="row">
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="brand"
        text="Explore"
        href="#testing1"
      />
    </div>
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="alt"
        text="Evolve"
        href="#testing2"
      />
    </div>
    <div class="column">
      <VPButton
        class="hunt-cloud-section"
        tag="a"
        size="medium"
        theme="sponsor"
        text="Scientific Suite"
        href="#testing3"
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

.hc-header-img {
  background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_640.jpg");
  background-position: 50% 50%;
  //background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #004c7b;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  object-fit: fill;
  margin: 0 auto !important;
  box-shadow: inset 0px -3px 5px rgba(0, 0, 0, 0.1);
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
  
@media (min-width: 960px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1280.jpg");
    height: 350px;
  }
}

@media (min-width: 1280px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 450px;
  }
}

@media (min-width: 1920px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 700px;
  }
}

</style>
