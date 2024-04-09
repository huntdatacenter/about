---
title: Products
subtitle: HUNT Cloud provides trusted research environments.
layout: page
sidebar: false
contact: https://docs.hdc.ntnu.no/about/contact/
products:
  - title: Explore
    href: /products/explore/
    img: /img/product-explore.png
    subtitle: Your journey awaits.
    text: |
      Explore and analyse your data within trusted research environments with easy access to your favorite tools in Workbench.
  - title: Evolve
    href: /products/evolve/
    img: /img/product-evolve.png
    subtitle: Take your ideas to the next level.
    text: |
      Manage and grow your research portfolio, your team and scientific career seamlessly through our Evolve package.
  - title: Scientific Suite
    href: /products/scientific-suite/
    img: /img/product-scientific-suite.png
    subtitle: Gathering great minds.
    text: |
      For research centers and large-scale research efforts who require additional resources, speed and portfolio management.
---
<ContentHeader src="/img/HAD_banner_960_3.jpg" srcset="/img/HAD_banner_1280_5.jpg 960w, /img/HAD_banner_1920_1.jpg 1280w" />

<div class="hc-page pb-5">
  <div class="hc-block-container">
    <div class="hc-container-title">
      {{ $frontmatter.title }}
    </div>
    <div class="hc-container-subtitle">
      {{ $frontmatter.subtitle }}
    </div>
  </div>
  <!-- https://vuetifyjs.com/en/components/cards/ -->
  <v-row>
    <v-col cols="12">
      <ProductSlider :products="$frontmatter.products" />
    </v-col>
  </v-row>
</div>

<div class="hc-block hc-blue-block">
  <div class="hc-block-container">
    <div class="hc-container-title">
      Open science
    </div>
    <div class="hc-container-subtitle">
      The open-source playground where ideas flourish and analysis thrives!
    </div>
  </div>
</div>

<div class="hc-block hc-light-block">
  <div class="hc-block-container">
    <div class="hc-container-title">
      Lorem ipsum
    </div>
    <div class="hc-container-subtitle">
      Lorem ipsum dolor sit amet.
    </div>
  </div>
</div>

<FooterBlock :contact="$frontmatter.contact" />

<style scoped></style>
