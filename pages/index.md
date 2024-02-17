---
title: Welcome
layout: page
sidebar: false
products:
  - title: Explore
    # href: /explore/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: brand
    # theme: sponsor
    img: ./img/product-explore.png
    text: Scientists are explorers. This section is aimed at those who use data to discover knowledge for a better world in HUNT Cloud.
  - title: Evolve
    # href: /evolve/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: alt
    img: ./img/product-evolve.png
    text: Scientific administrators are keymakers. This section is aimed at administrators that enables scientific explorations.
  - title: Scientific Suite
    # href: /scientific-suite/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: sponsor
    img: ./img/product-scientific-suite.png
    text: Trust enables science. This section is aimed at data controllers and scientific centers that guides the development of HUNT Cloud.
roles:
  - title: Scientist
    # href: /roles/scientist/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    text: Scientists are explorers. This section is aimed at those who...
  - title: Scientific leader
    # href: /roles/scientific-leader/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    text: Scientists are explorers. This section is aimed at those who...
  - title: Administrator
    # href: /roles/administrator/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    text: Scientists are explorers. This section is aimed at those who...
  - title: Teacher
    # href: /roles/teacher/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    text: Scientists are explorers. This section is aimed at those who...
  - title: Inventor (SME)
    # href: /roles/sme-inventor/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    text: Scientists are explorers. This section is aimed at those who...
contact: https://docs.hdc.ntnu.no/about/contact/
---

<!-- <script setup></script> -->

<div class="hc-home-page">
  <div class="hc-header">
    <div class="hc-header-img"></div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-title-main">
        Freedom to Explore
      </div>
      <div class="hc-subtitle-main">
        HUNT Cloud provides scientists with the tools and guidance to explore the world of science and research.
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Core products
      </div>
      <ProductSlider :products="$frontmatter.products" />
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Contact us
      </div>
      <div class="hc-container-subtitle">
        HUNT Cloud provides scientists with the tools and guidance to explore the world of science and research.
      </div>
      <div class="hc-section">
        <v-btn rounded="1" size="x-large" target="_blank" :href="$frontmatter.contact">Contact us</v-btn>
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Roles
      </div>
      <RoleSlider :roles="$frontmatter.roles" />
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        About ISO
      </div>
      <div class="hc-row">
        <div class="hc-col">
          Abc
        </div>
        <div class="hc-col">
          Def
        </div>
        <div class="hc-col">
          Ghi
        </div>
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Scientific Tools
      </div>
      <div class="hc-row">
        <div class="hc-col">
          Abc
        </div>
        <div class="hc-col">
          Def
        </div>
        <div class="hc-col">
          Ghi
        </div>
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Pillars
      </div>
      <div class="hc-row">
        <div class="hc-col">
          Abc
        </div>
        <div class="hc-col">
          Def
        </div>
        <div class="hc-col">
          Ghi
        </div>
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Agreements
      </div>
      <div class="hc-container-title">
        Prices
      </div>
    </div>
  </div>

  <div class="hc-block hc-grey-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        About HUNT Cloud
      </div>
      <div class="hc-container-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
      <p>
        Ut luctus dui sit amet tellus hendrerit, ac tincidunt nulla porta. Praesent tempus lacus vel nunc dictum vestibulum. Praesent fermentum quam a dolor maximus euismod et eu nulla. Donec consequat ultricies est, at congue ante blandit vitae. Praesent semper et ligula sit amet aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in sem id massa pretium faucibus.
      </p>
      <div class="hc-section">
        <v-btn rounded="1" size="x-large" target="_blank" :href="$frontmatter.contact">Contact us</v-btn>
      </div>
    </div>
  </div>

</div>




<style scoped>

/* CSS scoped specifically to this page */

</style>
