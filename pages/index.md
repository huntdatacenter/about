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
  <div class="hc-content">
    <div class="hc-title">
      <h1>Welcome to the HUNT Cloud documentation</h1>
    </div>
    <div class="hc-row">
      <div class="hc-column-4">
        <a href="/do-science/"><img alt="knowledge" src="/img/hunt-cloud_bottle-of-knowledge_200px.png" /></a>
        <VPButton
          class="hunt-cloud-section"
          tag="a"
          size="medium"
          theme="brand"
          text="Do science"
          href="/do-science/"
        />
        <p>
          Practical matters such as how to get started, how to use the HUNT Workbench and similar.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/coordination/"><img alt="custom keys" src="/img/hunt-cloud_the-keymakers_200px.jpg" /></a>
        <VPButton
          class="hunt-cloud-section"
          tag="a"
          size="medium"
          theme="brand"
          text="Administer science"
          href="/coordination/"
        />
        <p>
          How to oranize your scientific group in HUNT Cloud, including compliance, training, data handling, financal aspects and similar.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/governance/"><img alt="strategic compass" src="/img/hunt-cloud_strategic-compass_200px.png" /></a>
        <VPButton
          class="hunt-cloud-section"
          tag="a"
          size="medium"
          theme="brand"
          text="Govern science"
          href="/governance/"
        />
        <p>
          The content focuses on scientific and trust governance in HUNT Cloud, including privacy and security.
        </p>
      </div>
    </div>
    <div class="hc-row">
      <div class="hc-column-8">
        <h2>About HUNT Cloud</h2>
        <p>
          HUNT Cloud is a scientific computing environment located at <a href="https://www.ntnu.edu/">NTNU</a> in Norway.
        </p>
        <p>
          These pages contains official user documentation for HUNT Cloud.
        </p>
        <p>
          See <a href="https://www.ntnu.edu/mh/huntcloud">About HUNT Cloud</a> for introductory information on our scientific services.
        </p>
        <p>Read <a href="/about">about the team</a>, the technologies and the thinking behind HUNT Cloud.</p>
      </div>
      <div class="hc-column-4">
        <div class="mascot"></div>
      </div>
    </div>
  </div>
</div>


<style scoped>

.theme-default-content {
  max-width: none !important;
  padding: 0 !important;
}

.hc-header {
  width: 100vw;
  max-width: 100%;
  margin-bottom: 12px;
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

.hc-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 16px;
  /* width: 90%; */
}

.hc-title {
  display: block;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  max-width: 960px;
  margin: 0 auto !important;
  padding-left: 12px;
  padding-right: 12px;
}

.hc-title > h1 {
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 48px;
}

.hc-content {
  display: grid;
  max-width: 960px;
  margin: 0 auto !important;
}

.hc-row {
  justify-content: center;
  align-items: start;
  vertical-align: top;
}

.hc-column-4 {
  justify-self: start;
  display: grid;
  float: left;
  width: 100%;
  min-height: 12px;
  padding-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: justify;
  justify-content: center;
  align-items: center;
}

.hc-column-4 a {
  justify-self: center;
  padding-bottom: 24px;
}

.hc-column-4 > a > img {
  height: 180px;
  max-height: 180px;
  /* max-height: 150px; */
}

.hc-column-4 p {
  justify-self: center;
  padding-left: 32px;
  padding-right: 32px;
}

.hc-column-4:has(div.mascot) {
  display: flex;
  margin-left: 0;
  margin-right: 0;
  min-height: 100px;
}

div .mascot {
  flex: 100%;
  min-height: 250px;
}

.hc-column-8 {
  justify-self: start;
  display: grid;
  float: left;
  /* width: 100%; */
  min-height: 12px;
  padding-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: justify;
}

.hc-column-8:has(p) {
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 720px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_960.jpg");
    height: 300px;
  }

  .hc-column-8 {
    width: 60%;
    margin-left: 0;
    margin-right: 0;
  }

  .hc-column-4 {
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
