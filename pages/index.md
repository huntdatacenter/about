---
title: Welcome
layout: page
sidebar: false
products:
  - title: Explore
    href: /products/explore/
    img: /img/product-explore.png
    subtitle: Make it easy.
    text: |
      Start to explore and analyse your sensitive data in trusted research environments with easy access to preferred tools in HUNT Workbench.
  - title: Evolve
    href: /products/evolve/
    img: /img/product-evolve.png
    subtitle: Evolve your ideas.
    text: |
      Evolve is for scientific groups that aims to evolve and expand their ideas, careers, collaborations, data and methods with flexible choices.
  - title: Scientific Suite
    href: /products/scientific-suite/
    img: /img/product-scientific-suite.png
    subtitle: Gather great minds.
    text: |
      Scientific suite allows research centers and large-scale collaborations flexibility and control over diverse research portfolios.

overview_by_role:
  title: 'Solutions by role'
  subtitle: 'Read about our solutions from your own perspective.'
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


<!----------------------------------------------->
<!-- Block: Freedom to explore -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-title-main font-weight-black">
        Freedom to Explore
      </div>
      <div class="hc-subtitle-main">
        Enabling scientists to explore and evolve the exciting world of sensitive data science!
      </div>
      <div class="hc-section">
        <v-row justify="center">
          <v-col cols="12" class="v-col-xs-12 v-col-sm-4 v-col-md-4">
            <ContactDialog title="Book a demo" subject="Book a demo" size="x-large" elevation="2" block />
          </v-col>
          <v-col cols="12" class="v-col-xs-12 v-col-sm-5 v-col-md-4">
            <CallDialog title="Talk to an expert" size="x-large" elevation="2" block />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>


<!----------------------------------------------->
<!-- Block: Core products -->
<!----------------------------------------------->
<!-- Content: In this page header -->

  <!-- <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Core products
      </div>
      <div class="hc-container-subtitle">
        HUNT Cloud provides tools, guidance and digital labs for sensitive data explorations. Choose among our three main trusted research environment products.
      </div>
      <ProductSlider :products="$frontmatter.products" />
    </div>
  </div> -->

<!----------------------------------------------->
<!-- Block: Contact us -->
<!----------------------------------------------->

<!--
  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Contact us
      </div>
      <div class="hc-container-text">
        At HUNT Cloud, our mission is to empower you with the creative freedom you need to excel in sensitive data research. We ensure that your data is secure so your team can explore, innovate, try new things and collaborate effectively. In our cloud environments, you get access to digital labs for storing, analyzing, and collaborating on your data.
      </div>
      <div class="hc-section">
        <ContactDialog title="Contact us" subject="You got me at sensitive data" size="x-large" elevation="2" />
      </div>
    </div>
  </div> -->

<!----------------------------------------------->
<!-- Content: Scientific tools -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Scientific tools
      </div>
      <div class="hc-container-subtitle">
        Get instant access to major scientific tools in HUNT Workbench, or install your favorites directly in your lab.
      </div>
      <!-- <ToolsSlider /> -->
      <v-row class="my-5" style="justify-content: center; align-items: center;">
        <v-col cols="6" class="v-col-sm-4 v-col-md-1">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/jupyter.png" />
          </a>
        </v-col>
        <v-col cols="6" class="v-col-sm-4 v-col-md-2" style="justify-content: center;">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/pandas.svg" />
          </a>
        </v-col>
        <v-col cols="6" class="v-col-sm-4 v-col-md-2">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/python.svg" />
          </a>
        </v-col>
        <v-col cols="6" class="v-col-sm-4 v-col-md-2">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/pytorch.svg" />
          </a>
        </v-col>
        <v-col cols="6" class="v-col-sm-4 v-col-md-2">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/rstudio.png" />
          </a>
        </v-col>
        <v-col cols="6" class="v-col-sm-4 v-col-md-2">
          <a href="https://about.hdc.ntnu.no/tools/">
            <v-img max-height="80px" src="/img/logos-tools/vscode.png" />
          </a>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col align="center">
          <SimpleButton title="Read more" href="https://docs.hdc.ntnu.no/do-science/tools/" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row> -->
    </div>
  </div>





<!----------------------------------------------->
<!-- Block: sensitive AI -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Sensitive AI
      </div>
      <div class="hc-container-subtitle">
        Enjoy accelerated computing in environments made for sensitive AI.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Get your GPUs</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                    Select your preferred GPU and compute resources, or use our default setups.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Run your models</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Train or bring your favorite models, such as large language models.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Explore and Evolve</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Explore AI in easy to use labs or go big with large and advanced experiments.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
    <!-- <div class="hc-section">
      <SimpleButton title="Read more" :href="$frontmatter.contact" target="_blank" size="large" elevation="2" />
    </div> -->
    </div>
  </div>



<!----------------------------------------------->
<!-- Content: ISO -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        ISO certificates
      </div>
      <div class="hc-container-subtitle">
        Trust builds relations. HUNT Cloud follows international standards for quality, security and privacy.
      </div>
      <!-- <v-row>
        <v-col cols="2" class="v-col-sm-4 v-col-md-4">
          <a href="https://about.hdc.ntnu.no/compliance/">
            <v-img max-height="160px" src="/img/kiwa-iso-9001-2017.svg" />
          </a>
        </v-col>
        <v-col cols="2" class="v-col-sm-4 v-col-md-4">
          <a href="https://about.hdc.ntnu.no/compliance/">
            <v-img max-height="200px" src="/img/ISO_IEC_27001_WEO_27701_col.png" />
          </a>
        </v-col>
        <v-col cols="2" class="v-col-sm-4 v-col-md-4">
          <a href="https://about.hdc.ntnu.no/compliance/">
            <v-img max-height="200px" src="/img/InformationSecuritySys_ISOIEC27001_col.png" />
          </a>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title align="center">Quality</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <a href="https://about.hdc.ntnu.no/compliance/">
                    <v-img class="mb-5" max-height="160px" src="/img/kiwa-iso-9001-2017.svg" />
                  </a>
                  Our quality management system (ISO 9001) aims to provide best possible services for our scientists, their collaborators and your organization.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title align="center">Security</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <a href="https://about.hdc.ntnu.no/compliance/">
                    <v-img max-height="180px" src="/img/ISO_IEC_27001_WEO_27701_col.png" />
                  </a>
                  Our information security management system (ISO 27001) add an exstensive list of security controls to protect your data and activities.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title align="center">Privacy</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <a href="https://about.hdc.ntnu.no/compliance/">
                    <v-img max-height="180px" src="/img/ISO_IEC_27001_WEO_27701_col.png" />
                  </a>
                  Our privacy information management system (ISO 27701) provides a global framework that goes beyond GDPR to protect your data and scientific activities.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <SimpleButton title="Read more" href="https://docs.hdc.ntnu.no/govern-science/compliance/" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row>
    </div>
  </div>






<!----------------------------------------------->
<!-- Block: activate your data -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Activate your data
      </div>
      <div class="hc-container-subtitle">
        We work closely with data providers to make sure data is activated for impact.
      </div>
      <div class="hc-section">
        <ContactDialog title="Activate your data" subject="Activate my data" size="x-large" elevation="2" />
      </div>
    </div>
  </div>


<!----------------------------------------------->
<!-- Block: Roles -->
<!----------------------------------------------->

  <!-- <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        {{ $frontmatter.overview_by_role.title }}
      </div>
      <div class="hc-container-subtitle">
        {{ $frontmatter.overview_by_role.subtitle }}
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[0].href" title="Scientist" block />
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[1].href" title="Scientific leader" block />
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[2].href" title="Teacher" block />
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[3].href" title="Department" block />
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[4].href" title="Hospital clinic" block />
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-6 v-col-md-4">
          <SimpleButton size="small" :href="$frontmatter.roles[5].href" title="Private enterprise" block />
        </v-col>
      </v-row>
    </div>
  </div> -->







<!----------------------------------------------->
<!-- Content: Supportive products -->
<!----------------------------------------------->

<!--
  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Supportive products
      </div>
      <div class="hc-container-subtitle">
        Subheader.
      </div>
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <v-card color="transparent" elevation="0">
            <v-card-title>Teach</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Class-based framework to bring the excitement and joy to of data-driven explorations to the next generation of scientists.
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
          <v-card color="transparent" elevation="0">
            <v-card-title>Partner</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Participate to develop new...
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
          <v-card color="transparent" elevation="0">
            <v-card-title>Enterprise</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Small and medium-sized enterprises (SMEs)...
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
  </div> -->




<!----------------------------------------------->
<!-- Block: Agreements and multiblock -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Agreements</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  We believe a solid framework of documented responsibilities is a key success factor to enable your scientists with the freedom to explore. This page holds an overview of the administrative agreements in HUNT Cloud.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/administer-science/agreements/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Price</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Your total cost will include a combination of fixed subscription costs and running costs for the resources your attached to your labs. The fees across all labs inside one data space are summarized and billed to the data spaces' billing accounts.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/administer-science/prices/introduction/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Documentation</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  These pages contain the official user documentation for HUNT Cloud. HUNT Cloud is a cross-organizational scientific infrastructure for sensitive data analysis located at NTNU, Norway.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Community</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Collaborations elevate science. All lab users in HUNT Cloud are invited to join our HUNT Cloud community as part of your onboarding process.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/do-science/community/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Support</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  This page list predefined service orders that you can request as an active lab user in HUNT Cloud.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/do-science/service-desk/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Tingweek</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  We appoint time three times per year to meet for information, feedback and discussions on how to develop the services in HUNT Cloud to better elevate science. We call these gatherings Tings.
                </v-col>
              </v-row>
              <v-row dense>
                <v-col cols="12">
                  <SimpleButton size="small" href="https://docs.hdc.ntnu.no/govern-science/tingweek/" title="Read more" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>




<!----------------------------------------------->
<!-- Block: Agreements and multiblock -->
<!----------------------------------------------->









<!----------------------------------------------->
<!-- Content: Philosophy -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Philosophy
      </div>
      <div class="hc-container-subtitle">
        HUNT Cloud's sensitive data philosophy builds on three pillars.
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col align="center">
          <SimpleButton title="Read more" :href="$frontmatter.contact" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row> -->
    </div>
  </div>




<!----------------------------------------------->
<!-- Content: About -->
<!----------------------------------------------->

  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        About HUNT Cloud
      </div>
      <!-- <div class="hc-container-subtitle">
        HUNT Cloud's sensitive data philosophy builds on three pillars.
      </div> -->
      <v-row align="center">
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Team</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Your experiences in HUNT Cloud are shaped and molded by a small team of scientific instrument makers located at NTNU, Norway.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>History</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Founded in 2013, HUNT Cloud has been at the forefront of providing reliable cloud computing services tailored for both national and international scientific initiatives under the vision «data for a better world».
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="align-self-start v-col-sm-4">
          <!-- https://vuetifyjs.com/en/components/cards/ -->
          <v-card color="transparent" elevation="0">
            <v-card-title>Illustrations</v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  Our magical world of data science is filled with abstract ideas. Here, we aim to present illustrations where we imagine such ideas in practical forms to ease dialogues and strengthen cooperation.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col align="center">
          <SimpleButton title="Read more" :href="$frontmatter.contact" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row> -->
    </div>
  </div>





<!----------------------------------------------->
<!-- Block: activate your data -->
<!----------------------------------------------->

  <!-- <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Norwegian trust domain
      </div>
      <div class="hc-container-subtitle">
        NORTRE logo.
      </div>
      <v-row>
        <v-col align="center">
          <SimpleButton title="Read more" :href="$frontmatter.contact" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row>
    </div>
  </div> -->




<!----------------------------------------------->
<!-- Block: activate your data -->
<!----------------------------------------------->

<!--
  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        Get going
      </div>
      <div class="hc-container-subtitle">
        Ready to start your journey?
      </div>
      <br>
      <div class="hc-section">
        <ContactDialog title="Contact us" subject="You got me at sensitive data" size="x-large" elevation="2" />
      </div>
    </div>
  </div> -->


<!----------------------------------------------->
<!-- Block: About HUNT Cloud -->
<!----------------------------------------------->

<FooterBlock :contact="$frontmatter.contact" />

</div>


<style scoped>

/* CSS scoped specifically to this page */

</style>
