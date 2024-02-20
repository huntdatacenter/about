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
    text: Get easy access to trusted research environments and commonly used tools with our Explore package.
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

<!-- Block: Freedom to explore -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-title-main">
        Freedom to Explore
      </div>
      <div class="hc-subtitle-main">
        Welcome to HUNT Cloud! We provide scientists with tools and guidance to explore and evolve their magical world of sensitive data science.
      </div>
    </div>
  </div>

<!-- Block: Core products -->
<!-- Content: In this page header -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Core products
      </div>
      <div class="hc-container-subtitle">
      HUNT Cloud provides trusted research environments.
      </div>
      <ProductSlider :products="$frontmatter.products" />
    </div>
  </div>

<!-- Block: Contact us -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Contact us
      </div>
      <div class="hc-container-subtitle">
        Contact us to get started, to ask how your science may prosper from our services, or just to share the joy and excitement of data-driven science!
      </div>
      <div class="hc-section">
        <v-btn rounded="1" size="x-large" target="_blank" :href="$frontmatter.contact">Contact us</v-btn>
      </div>
    </div>
  </div>

<!-- Block: Roles -->
<!-- Content: In this page header -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Roles
      </div>
      <div class="hc-container-subtitle">
        Read about our products from your own perspective.
      </div>
      <div class="hc-row">
        <div class="hc-col">
          <b>Scientist</b>
        </div>
        <div class="hc-col">
          <b>Scientific leader</b><br>
          Text something.
        </div>
        <div class="hc-col">
          <b>Scientific administrator</b>
        </div>
        <div class="hc-col">
          <b>Teacher</b>
        </div>
        <div class="hc-col">
          <b>Private enterprise</b>
        </div>
        <div class="hc-col">
          <b>Department or clinic</b>
        </div>
      </div>
<!--      <RoleSlider :roles="$frontmatter.roles" /> -->
    </div>
  </div>


<!-- Content: ISO -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        ISO certificates
      </div>
      <div class="hc-container-subtitle">
        Trust is crucial in science. HUNT Cloud holds third-party verified ISO certificates for information security, privacy and quality.
      </div>
      <div class="hc-row">
        <div class="hc-col">
          <b>Quality management</b>
        </div>
        <div class="hc-col">
          <b>Information security</b>
        </div>
        <div class="hc-col">
          <b>Information privacy</b>
        </div>
      </div>
    </div>
  </div>


<!-- Content: Scientific tools -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Scientific tools
      </div>
      <div class="hc-container-subtitle">
        Value statement on tools.
      </div>
      <ToolsSlider />
    </div>
  </div>

<!-- Block: Pillars -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Pillars
      </div>
      <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
      <div class="hc-row">
        <div class="hc-col">
          Trust
        </div>
        <div class="hc-col">
          Technology
        </div>
        <div class="hc-col">
          Collaboration
        </div>
      </div>
    </div>
  </div>

<!-- Block: Agreements -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Agreements
      </div>
      <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
    </div>
  </div>


<!-- Block: Prices -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Prices
      </div>
      <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
    </div>
  </div>


<!-- Block: About HUNT -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        About HUNT Cloud
      </div>
      <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div>
      <div class="hc-section">
        <v-btn rounded="1" size="x-large" target="_blank" :href="$frontmatter.contact">Contact us</v-btn>
      </div>
    </div>
  </div>


<!-- Block: Bottom text -->

  <div class="hc-block hc-grey-block">
    <div class="hc-block-container">
      <p>
        Sub text on privacy etc.
      </p>
    </div>
  </div>

</div>


<style scoped>

/* CSS scoped specifically to this page */

</style>
