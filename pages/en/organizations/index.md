---
title: Organizations
layout: page
sidebar: false
---

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
        For organizations
      </div>
      <!-- <div class="hc-subtitle-main">
        Freedom to explore sensitive data within a trustworthy framework.
      </div> -->
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
<!-- Block: Offer -->
<!----------------------------------------------->


  <div class="hc-block">
    <div class="hc-block-container">
      <div class="hc-container-title">
        HUNT Cloud offers digital labs for sensitive data science.
      </div>
      <div class="hc-container-subtitle">
        Explore, collaborate, and create while knowing that your data is secure within flexible and ISO-certified cloud environments.
      </div>
      <v-row class="my-5" style="justify-content: center; align-items: center;">
        <v-col cols="6">
          <v-card
            append-icon="mdi-chevron-right"
            color="rgb(62,98,138)"
            variant="tonal"
            title="Organizations"
            href="/en/organizations/"
            link
          >
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  Our cloud solutions provide easy overview and portfolio management for your sensitive data activities. Empower your scientists with the flexibility they need while ensuring robust data safety and compliance.
                </v-col>
              </v-row>
              <br />
              <!-- <v-row>
                <v-col align="left">
                  <SimpleButton title="Read more" href="https://docs.hdc.ntnu.no/govern-science/compliance/" target="_blank" size="large" elevation="2" />
                </v-col>
              </v-row> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>

<!----------------------------------------------->
<!-- Block: About HUNT Cloud -->
<!----------------------------------------------->

<FooterBlock :contact="$frontmatter.contact" />

</div>


<style scoped>

/* CSS scoped specifically to this page */

</style>
