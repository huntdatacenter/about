---
title: Welcome
layout: page
sidebar: false
buttons:
  - text: Explore
    # href: /explore/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: brand
    theme: sponsor
  - text: Evolve
    # href: /evolve/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    theme: alt
  - text: Scientific Suite
    # href: /scientific-suite/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    theme: sponsor
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
      <div class="hc-row">
        <div class="hc-col">
          <VPButton
            tag="a"
            size="medium"
            :theme="$frontmatter.buttons[0].theme"
            :text="$frontmatter.buttons[0].text"
            :href="$frontmatter.buttons[0].href"
          />
        </div>
        <div class="hc-col">
          <VPButton
            tag="a"
            size="medium"
            :theme="$frontmatter.buttons[1].theme"
            :text="$frontmatter.buttons[1].text"
            :href="$frontmatter.buttons[1].href"
          />
        </div>
        <div class="hc-col">
          <VPButton
            tag="a"
            size="medium"
            :theme="$frontmatter.buttons[2].theme"
            :text="$frontmatter.buttons[2].text"
            :href="$frontmatter.buttons[2].href"
          />
        </div>
      </div>
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
        <VPButton
          tag="a"
          size="medium"
          theme="sponsor"
          text="Contact us"
          :href="$frontmatter.contact"
        />
      </div>
    </div>
  </div>

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Roles
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
        <VPButton
          tag="a"
          size="medium"
          theme="sponsor"
          text="Contact us"
          :href="$frontmatter.contact"
        />
      </div>
    </div>
  </div>

</div>




<style scoped>

/* CSS scoped specifically to this page */

</style>