<script lang="ts">

export default {
  props: {
    contact: { type: Object, required: false },
    image: { type: String, default: '/img/robot-2-square-250.png' },
    listmenus: { type: String, default: false },
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
  <div class="hc-block hc-footer-block">
    <div class="hc-block-container pb-8">

      <v-row class="my-4 px-4">
        <v-col cols="12" class="v-col-sm-6 v-col-md-4 text-body-1">
          <b>Ready to get started on your journey?</b>
          <br />
          Reach out to arrange a&nbsp;call.
        </v-col>
        <v-col cols="12" class="v-col-sm-6 v-col-md-4">
          <!-- <SimpleButton title="Contact us" :href="contact" target="_blank" size="large" elevation="2" /> -->
          <ContactDialog title="Contact us" subject="You got me at sensitive data" size="x-large" elevation="2" />
        </v-col>
      </v-row>

      <!-- <v-divider class="my-4"></v-divider> -->
      <v-row v-if="listmenus">
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

      <!-- <v-divider class="my-4"></v-divider> -->

      <!--
      <v-row class="mt-4 px-4">
        <v-col cols="12" class="v-col-sm-12 v-col-md-4">
          <v-img
            class="mx-auto"
            max-width="200"
            max-height="200"
            :src="image"
          >
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
      </v-row> -->

      <v-row class="mt-16"></v-row>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex flex-wrap">
        <div class="me-auto mb-2">
          <v-sheet class="ma-2 px-2 text-no-wrap text-body-1" color="transparent">
            NTNU | HUNT Cloud
          </v-sheet>
        </div>
        <div class="mb-2">
          <a href="https://docs.hdc.ntnu.no/administer-science/privacy-statement/" target="_blank">
            <v-sheet class="ma-2 px-2 text-no-wrap text-body-1" color="transparent">
              Privacy statement
            </v-sheet>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
