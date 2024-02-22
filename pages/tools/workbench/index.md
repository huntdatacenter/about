---
title: Workbench
subtitle: HUNT Workbench aims to improve your day to day work experience with modern data science tools such as Python, R code, and MATLAB.
layout: page
sidebar: false
contact: https://docs.hdc.ntnu.no/about/contact/
features:
  - A safe place to experiment
  - Reproducible science
  - Flexibility
---

<ContentHeader src="/img/HAD_banner_960_3.jpg" srcset="/img/HAD_banner_1280_5.jpg 960w, /img/HAD_banner_1920_1.jpg 1280w" />

<div class="hc-page pb-5">
  <div class="hc-block-container">
    <div class="hc-title-main">
      {{ $frontmatter.title }}
    </div>
    <div class="hc-subtitle-main">
      {{ $frontmatter.subtitle }}
    </div>
  </div>
  <!-- https://vuetifyjs.com/en/components/cards/ -->
  <v-row>
    <v-col cols="8">
      <v-card
        class="mx-auto"
        max-width="600"
        height="300"
        image="./images/workbench.png"
        title=""
        theme="dark"
      ></v-card>
    </v-col>
    <v-col cols="4">
      <v-card
        elevation="0"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              HUNT Workbench
            </div>
            <!-- <div class="text-h6 mb-1">
              HUNT Workbench
            </div> -->
            <div class="text-caption">
              HUNT Workbench provides you with web-based access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R and MATLAB.
              <br /><br />
              <v-list :item-title="item => item" :item-value="item => item" :items="$frontmatter.features"></v-list>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="my-5" style="justify-content: center; align-items: center;">
    <v-col cols="1">
      <a href="https://jupyter.org/" target="_blank">
        <v-img max-height="80px" src="./images/jupyter.png" />
      </a>
    </v-col>
    <v-col cols="2" style="justify-content: center;">
      <a href="https://pandas.pydata.org/" target="_blank">
        <v-img max-height="80px" src="./images/pandas.png" />
      </a>
    </v-col>
    <v-col cols="2">
      <a href="https://www.python.org/" target="_blank">
        <v-img max-height="80px" src="./images/python.png" />
      </a>
    </v-col>
    <v-col cols="2">
      <a href="https://mathworks.com/" target="_blank">
        <v-img max-height="80px" src="./images/matlab.png" />
      </a>
    </v-col>
    <v-col cols="2">
      <a href="https://posit.co/products/open-source/rstudio-server/" target="_blank">
        <v-img max-height="80px" src="./images/rstudio.png" />
      </a>
    </v-col>
    <v-col cols="2">
      <a href="https://code.visualstudio.com/" target="_blank">
        <v-img max-height="80px" src="./images/vscode.png" />
      </a>
    </v-col>
  </v-row>
</div>

<div class="hc-block hc-grey-block">
  <div class="hc-block-container">
    <div class="hc-container-title">
      Open science
    </div>
    <div class="hc-container-subtitle">
      The open-source playground where ideas flourish and analysis thrives!
    </div>
  </div>
</div>

<div class="hc-block hc-white-block">
  <div class="hc-block-container">
    <div class="hc-container-title">
      Stuck in Past Statistical Snags?
    </div>
    <div class="hc-container-subtitle">
      Level up with Python and R!
    </div>
  </div>
</div>

<FooterBlock :contact="$frontmatter.contact" />

<style scoped></style>
