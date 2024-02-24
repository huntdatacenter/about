<script lang="ts">

export default {
  props: {
    contact: { type: String, required: true },
    image: { type: String, default: '' },
  },
  data() {
    return {
      isHovering: false,
      lists: [
        {
          title: 'Products',
          items: [
            { text: 'Evolve', href: '#page' },
            { text: 'Explore', href: '#page' },
            { text: 'Scientific suite', href: '#page' },
          ],
        },
        {
          title: 'Compliance',
          items: [
            { text: 'ISO 9001', href: '#page' },
            { text: 'ISO 27001', href: '#page' },
            { text: 'ISO 27701', href: '#page' },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { text: 'Do Science', href: 'https://docs.hdc.ntnu.no/do-science/'},
            { text: 'Administer Science', href: 'https://docs.hdc.ntnu.no/administer-science/'},
            { text: 'Govern Science', href: 'https://docs.hdc.ntnu.no/govern-science/'},
          ]
        }
      ]
    }
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <!-- <div class="hc-block hc-grey-block"> -->
  <div class="hc-block hc-blue-block">
    <div class="hc-block-container">
      <v-row class="my-4">
        <v-col cols="8" class="v-col-sm-6 v-col-md-4">
          <b>Ready to get started?</b>
          <br />
          Reach out to arrange a call.
        </v-col>
        <v-col cols="4" class="v-col-sm-6 v-col-md-4">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn
                v-bind="props"
                rounded="sm"
                size="large"
                target="_blank"
                elevation="2"
                :href="contact"
                :append-icon="isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right'"
              >
                Contact us
                <template v-slot:append>
                  <!-- :class="{'ml-1': isHovering, 'mr-1': !isHovering}" -->
                  <v-icon color="#ef8114"></v-icon>
                </template>
              </v-btn>
            </template>
          </v-hover>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col v-for="(list, i) in lists" :key="i" cols="12" class="v-col-sm-6 v-col-md-4">
          <v-list bg-color="transparent">
            <v-list-subheader style="color: #fff;">{{ list.title }}</v-list-subheader>
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
      <v-divider class="my-4"></v-divider>
      <!-- <div class="hc-container-title">
        About HUNT Cloud
      </div> -->
      <v-row class="my-4">
        <v-col cols="12" class="v-col-sm-8 v-col-md-8">
          <div class="hc-container-text" style="text-align: justify">
            HUNT Cloud was established in 2013 to deliver trustworthy cloud services for
            national and international science projects under the vision «data for a better world».
            Our aim is to give scientists freedom to explore in digital laboratories where they bring their own data,
            tools and collaborators. And we want to facilitate that explorations happens across fields
            and across geographical borders.
          </div>
        </v-col>
        <v-col cols="12" class="v-col-sm-4 v-col-md-4">
          <v-img
            class="mx-auto"
            max-width="400"
            max-height="400"
            color="#9db7e1"
            :src="image && image.length > 0 ? image : null"
          >
            <!-- src="https://docs.hdc.ntnu.no/img/hunt-cloud_bot_250_2.png" -->
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
    <div class="hc-block-container">
      <v-row>
        <p>
          <a href="https://docs.hdc.ntnu.no/administer-science/privacy-statement/" target="_blank">Privacy statement</a>
        </p>
      </v-row>
    </div>
  </div>
</template>

<style scoped>

</style>
