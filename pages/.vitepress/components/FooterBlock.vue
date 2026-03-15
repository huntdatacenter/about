



<template>

<!----------------------------------------------->
<!-- Block: Test video-ending -->
<!----------------------------------------------->

<video autoplay loop muted disablepictureinpicture disableremoteplayback preload width="100%">
  <source src="https://assets.hdc.ntnu.no/assets/artworks/videos/guiding-lights_2.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

<!----------------------------------------------->
<!-- Block: Read to start -->
<!----------------------------------------------->

  <div class="hc-block hc-footer-block">
    <div class="hc-block-container pb-8">
      <v-row class="my-4 px-4">
        <v-col cols="12" class="v-col-sm-6 v-col-md-4 text-body-1">
          <b>Ready to start your journey?</b>
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <ContactDialog title="Contact us" subject="You got me at sensitive data" size="x-large" elevation="2" />
        </v-col>
      </v-row>

      <!-- <v-divider class="my-4"></v-divider> -->
      <v-row v-if="listmenus">
        <v-col v-for="(list, i) in lists" :key="i" cols="12" class="v-col-sm-6 v-col-md-4">
          <v-list bg-color="transparent">
            <v-list-subheader style="color: #fff">{{ list.title }}</v-list-subheader>
            <v-divider></v-divider>
            <v-list-item
              v-for="(item, j) in list.items"
              :key="i"
              :value="item"
              color="transparent"
              variant="plain"
              append-icon="mdi-chevron-right"
            >
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

<!----------------------------------------------->
<!-- Block: Lower links -->
<!----------------------------------------------->

      <v-row class="mt-16"></v-row>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex flex-wrap">
        <div class="me-auto mb-2">
          <a href="https://www.ntnu.no/" target="_blank">
          <v-sheet class="ma-2 px-2 text-no-wrap text-body-1" color="transparent"> NTNU | HUNT Cloud</v-sheet>
          </a>
        </div>
        <div class="mb-2">
          <a href="https://docs.hdc.ntnu.no/govern-science/privacy-statement" target="_blank">
            <v-sheet class="ma-2 px-2 text-no-wrap text-body-1" color="transparent"> Privacy statement </v-sheet>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

