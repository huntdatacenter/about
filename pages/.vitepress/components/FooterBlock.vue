<script lang="ts">

export default {
  props: {
    contact: { type: String, required: true },
    image: { type: String, default: '/img/robot-2-square-250.png' },
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
      <v-row class="my-4 px-4">
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <b>Ready to get started on your journey?</b>
          <br />
          Reach out to arrange a&nbsp;call.
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <SimpleButton title="Contact us" :href="contact" target="_blank" size="large" elevation="2" />
        </v-col>
      </v-row>
      <!-- <v-divider class="my-4"></v-divider> -->
      <v-row>
        <v-col v-for="(list, i) in lists" :key="i" cols="12" class="v-col-sm-6 v-col-md-4">
          <v-list bg-color="transparent">
            <v-list-subheader style="color: #fff;">{{ list.title }}</v-list-subheader>
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
      <v-divider class="my-4"></v-divider>
      <!-- <div class="hc-container-title">
        About HUNT Cloud
      </div> -->
      <v-row class="mt-4 px-4">
        <v-col cols="12">
          <b>HUNT Cloud provides high-trust and flexible cloud computing for scientific explorations</b>
        </v-col>
        <v-col cols="12" class="v-col-sm-12 v-col-md-8">
          <div class="hc-container-text" style="text-align: justify">
            Founded in 2013, HUNT Cloud has been at the forefront of providing reliable cloud computing services tailored for
            both national and international scientific initiatives under the vision «data&nbsp;for&nbsp;a&nbsp;better&nbsp;world».
            Our aim is to empower scientists by offering them the freedom to explore in digital laboratories,
            where they bring their own sensitive data, tools and collaborators.
            Our overarching goal is to facilitate seamless exploration across various fields and geographical borders,
            fostering collaboration and innovation on a&nbsp;global scale.
          </div>
        </v-col>
        <v-col cols="12" class="v-col-sm-12 v-col-md-4">
          <v-img
            class="mx-auto"
            max-width="200"
            max-height="200"
            :src="image"
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
      <v-row class="px-4">
        <v-col cols="12">
          <a href="https://docs.hdc.ntnu.no/administer-science/privacy-statement/" target="_blank">Privacy statement</a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>

</style>
