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
      Sensitive data represents a range of new oportunities. Our goal is for your team to thrive and succeed in ground-breaking science, all the while keeping their data protected.
  - title: Teacher
    href: /roles/teacher/
    text: |
      The next generation of scientists deserves to build their skills in real-life environments. Our course packages are developed with this in mind. Read more to see how our set-up can be tailored to your course. 
  - title: Department
    href: /roles/department/
    text: |
      HUNT Cloud works closely with departments from many organisations. Our product packages are tailored for different levels of sensitive data activities, while ensuring easy overview and organisational control
  - title: Clinic
    href: /roles/clinic/
    text: |
      Clinics use HUNT Cloud for research and data processing during production. We are ISO/IEC certified and compliant with Helesnormen, while our trusted research environments can be tailored to your security needs.
  - title: Private enterprise
    href: /roles/private-enterprise/
    text: |
      Innovation projects, enterprises and private companies have spesific challenges and needs in dealing with sensitive data. The HUNT Cloud Invent program might be for you.
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
                  Our management systems follows the international standard ISO9001. We strive to provide the best possible services for our users, their organisations and collaborators.
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
                  HUNT Cloud holds the ISO certificate for information security, ISO27001. Our information security management system includes vetting people, policies and technology in accordance with the standard.
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
                  HUNT Clouds holds the ISO certificate for privacy information management, ISO27701, a global standard that goes beyond GDPR in protection of privacy information management.
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
                  Truly impactful science takes place accross traditional borders: across fields, sectors and countries. HUNT Cloud is tailored for such collaborations. We strongly support scientists who dream on a global scale and who are eager for international explorations.
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
                  A solid agreement framework is the key to enable your scientists with the freedom to explore.
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
                  HUNT Cloud use a total cost model and run our services with zero profit.
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

<!-- Block: sensitive AI -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Sensitive AI
      </div>
      <div class="hc-container-subtitle">
        With access to GPUs and scaleable resources, our trusted research environments are ready for your next sensitive AI project.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Compliance and GPUs</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Combining GPUs and scaleable resources with our extensive compliance program enables our users to undertake multiple sensitive AI approaches. 
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
            <v-card-title>Creative freedom</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  With our trusted research environments you can do machine learning, large language models, natural language models and much more, using your favorite tools such as R, python, tensorflow and pytorch.
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
            <v-card-title>Activate sensitive data</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Combining SFT servers and a rolebased agreement framework allows data controllers to transfer data directly into your trusted research environment.
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


<!-- Block: activate your data -->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Activate your data
      </div>
      <div class="hc-container-subtitle">
        We work closely with data providers to make sure data is activated for impact.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Title</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Our passion is knowledge generation from sensitive data. Nothing makes us happier than scientists succeeding in their explorations, and for that to happen data must be available.
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
                  We work closely with data providers to activate their data for research. Our trusted research environments, agreement system and ISO certificates enable a flexible high-trust environment where your data can be made available for research. 
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
                  Our approach to data activation mirrors that of a publishing house. Valuable data deserve a marketing team that can send data on impactfull data journeys. We will help you on the way to ensure your data makes the biggest possible impact. 
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
