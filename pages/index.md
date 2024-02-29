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
    subtitle: Come through the portal, it's time to explore.
    text: Science is hard and with good reason, you are not diving into the unknown becasue it is easy. Working with sensitive data means entering a land of laws, regulations and agreements; but this is also where scientific progress happens every day. We are here to make sure you get to do the hard things.
  - title: Evolve
    # href: /evolve/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: alt
    img: ./img/product-evolve.png
    subtitle: Take your ideas to the next level.
    text: As your ideas develop, you grown you project portfolio, team and scientific career. You are ready to expand and we got you covered for this next phase of your journey.
  - title: Scientific Suite
    # href: /scientific-suite/
    href: https://docs.hdc.ntnu.no/administer-science/services/overview/
    # theme: sponsor
    img: ./img/product-scientific-suite.png
    subtitle: Gathering great minds.
    text: Collaboration is where the magic happens, where ideas take flight in new directions, young scientists grow up and multidisiplinary teams make discoveries that change worlds. Our scientific suites are for you, set up for the complexities you phase as you take on the grand challenges.
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
      <div class="hc-title-main font-weight-black">
        Freedom to Explore
      </div>
      <div class="hc-subtitle-main">
        Enable your scientists with tools and guidance to explore and evolve the world of sensitive data science!
        <!-- Welcome to HUNT Cloud! We provide scientists with tools and guidance to explore and evolve their magical world of sensitive data science. -->
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
        <hc-button title="Contact us" :href="$frontmatter.contact" target="_blank" size="x-large" elevation="2" />
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
      <v-row align="center">
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Scientist</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Scientific leader</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Scientific administrator</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Teacher</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Private enterprise</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Department or clinic</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <RoleSlider :roles="$frontmatter.roles" /> -->
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
      <v-row align="center">
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Quality management</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Information security</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Information privacy</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
      <!-- <div class="hc-container-subtitle">
        Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
      </div> -->
      <v-row align="center">
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Trust</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Technology</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Collaboration</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>

<!-- Block: Agreements -->

  <div class="hc-block">
    <div class="hc-block-container">
      <v-row class="my-4">
        <!-- Agreements -->
        <v-col col="6">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card elevation="0">
            <v-card-title>Agreements</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Prices -->
        <v-col col="6">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card elevation="0">
            <v-card-title>Prices</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <hc-button size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>


<!-- Block: About HUNT Cloud -->

<FooterBlock :contact="$frontmatter.contact" />

</div>


<style scoped>

/* CSS scoped specifically to this page */

</style>
