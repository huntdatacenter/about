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

<div class="hc-container">
  <div class="hc-header">
    <div class="hc-header-img"></div>
  </div>

  <div class="hc-row">
    <div class="hc-column">
      <VPButton
        class="hc-section"
        tag="a"
        size="medium"
        theme="brand"
        text="Explore"
        href="/explore/"
      />
    </div>
    <div class="hc-column">
      <VPButton
        class="hc-section"
        tag="a"
        size="medium"
        theme="alt"
        text="Evolve"
        href="/evolve/"
      />
    </div>
    <div class="hc-column">
      <VPButton
        class="hc-section"
        tag="a"
        size="medium"
        theme="sponsor"
        text="Scientific Suite"
        href="/scientific-suite/"
      />
    </div>
  </div>

</div>

<style scoped>

.hc-header {
  width: 100vw;
  max-width: 100%;
  margin-bottom: 64px;
}

.hc-header-img {
  background-image: url("/img/HAD_banner_960_3.jpg");
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

.hc-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
}

.hc-row {
  max-width: 960px;
  margin: 0 auto !important;
}

.hc-column {
  float: left;
  width: 80%;
  min-height: 50px;
  padding-bottom: 32px;
  margin-left: 10vw;
  margin-right: 10vw;
}

@media (min-width: 720px) {

  .hc-column {
    width: 33%;
    margin-left: 0;
    margin-right: 0;
  }

}

@media (min-width: 960px) {
  .hc-header-img {
    background-image: url("/img/HAD_banner_1280_5.jpg");
    height: 350px;
  }
}

@media (min-width: 1280px) {
  .hc-header-img {
    background-image: url("/img/HAD_banner_1920_1.jpg");
    height: 450px;
  }
}

@media (min-width: 1920px) {
  .hc-header-img {
    background-image: url("/img/HAD_banner_1920_1.jpg");
    height: 700px;
  }
}

</style>
