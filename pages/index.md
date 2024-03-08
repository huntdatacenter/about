---
title: Welcome
layout: page
sidebar: false
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
overview_by_role:
  title: 'Overview by role'
  subtitle: 'Read about our products from your own perspective.'
roles:
  - title: Scientist
    href: /roles/scientist/
    text: |
      Scientists working in a range of different fields use HUNT Cloud for their sensitive data explorations. Read on to see if we are a good fit for your needs.
  - title: Scientific leader
    href: /roles/scientific-leader/
    text: |
      Sensitive data represents a range of new oportunities in most scientific fields. At the same time, handling multiple projects, teams, legal and ethical complexities is a challenge. Our is for your team to thrive in this setting and succeed in ground-breaking science.
  - title: Scientific Administrator
    href: /roles/scientific-administrator/
    text: |
      Organizations owning large data values require trustworthy and predictable solutions. Scientific administrators are the unheralded drivers of scientific success in sensitive data. HUNT Cloud helps scientific administrators and organisations build data culture and promote trustworthy, high-ranking science.
  - title: Teacher
    href: /roles/teacher/
    text: |
      The next generation of scientists deserves to build their skills in real-life environments. They need to learn the tools of the future and be comfortable with the complexities that surround sensitive data. Our course packages are developed with this in mind. Read more to see how our set-up can be tailored to your course.
  - title: Scientific Administrator
    href: /roles/scientific-administrator/
    text: |
      Innovation projects, enterprises and private companies have spesific challenges and needs in dealing with sensitive data. The HUNT Cloud Invent program might be for you.
  - title: Department or clinic
    href: /roles/department/
    text: |
      HUNT Cloud works closely with departments and clinics from many organisations. Our product packages are tailored for different levels of sensitive data activities, while ensuring easy overview and organisational control.
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
        <SimpleButton title="Contact us" :href="$frontmatter.contact" target="_blank" size="x-large" elevation="2" />
      </div>
    </div>
  </div>

<!-- Block: Roles -->
<!-- Content: In this page header -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        {{ $frontmatter.overview_by_role.title }}
      </div>
      <div class="hc-container-subtitle">
        {{ $frontmatter.overview_by_role.subtitle }}
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[0].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[0].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[0].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[1].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[1].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[1].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[2].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[2].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[2].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[3].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[3].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[3].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[4].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[4].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[4].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>{{ $frontmatter.roles[5].title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  {{ $frontmatter.roles[5].text }}
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" :href="$frontmatter.roles[5].href" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <RoleSlider :roles="$frontmatter.roles" /> -->
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
        <v-col cols="12" class="align-self-start v-col-sm-4">
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
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
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
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
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
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>


<!-- Block: Pillars -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Pillars
      </div>
      <div class="hc-container-subtitle">
        HUNT Cloud rests on three pillars that guide our moral and philosophical approach to sensitive data.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Technology</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Technology changes fast and brings with it new solutionos and new oportunities. At NTNU we have a strong traditioon for experimentation and adoption of new technologies. Our dreamers and tinkerers work closely with scientists to ensure we know what moves and what will be available in the years to come.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Trust</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Trust is the foundation for everything we do. Since its beginning in 1984, HUNT has been pioneering trustworthy care for health data. We have continued the tradition with third-party verified trust, caring deeply for study participants and their data.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Collaboration</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  The lone scientists does no longer exists. Truly impactful science takes place accross traditional borders: across fields, sectors and countries. HUNT Cloud is tailored for such collaborations. We strongly support scientists who dream on a global scale and who are eager for international explorations.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
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
                  <SimpleButton size="small" href="place-link" title="Read more" />
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
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>

<!-- Block: .... -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Title
      </div>
      <div class="hc-container-subtitle">
        Subtitle.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" blue />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>


<!-- Block: .... -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Title
      </div>
      <div class="hc-container-subtitle">
        Subtitle.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Text
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="place-link" title="Read more" />
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
