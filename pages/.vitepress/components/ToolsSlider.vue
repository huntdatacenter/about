<script lang="ts">
export default {
  props: {},
  data() {
    return {
      model: [],
      show: {},
    }
  },
  computed: {},
}
</script>

<template>
  <v-sheet class="mx-auto" elevation="0" max-width="920" color="transparent">
    <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" multiple show-arrows>
      <v-slide-group-item v-for="n in 15" :key="n">
        <v-card color="grey-lighten-1" class="ma-4 h-auto" min-height="320" width="250">
          <v-img height="150px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
          <v-card-title> Title </v-card-title>

          <v-card-subtitle> Subtitle </v-card-subtitle>
          <v-card-actions>
            <v-btn color="#00509e" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show[n] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show[n] = show[n] ? !show[n] : true"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show[n]">
              <!-- <v-overlay> -->
              <v-divider></v-divider>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tincidunt lacus, vitae maximus enim.
              </v-card-text>
              <!-- </v-overlay> -->
            </div>
          </v-expand-transition>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped></style>
