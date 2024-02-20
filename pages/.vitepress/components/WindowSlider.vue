
<script lang="ts">

export default {
  props: {
  },
  data() {
    return {
    length: 3,
      model: 1,
    }
  },
  computed: {
  },
  methods: {
    next () {
      this.model = this.model + 1 > this.length
        ? 1
        : this.model + 1
    },
    prev () {
      this.model = this.model - 1 <= 0
        ? this.length
        : this.model - 1
    },
},
}
</script>

<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window v-model="model">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
        :value="n"
      >
        <v-card
          height="200"
          class="d-flex justify-center align-center"
        >
          <span class="text-h2">
            Card {{ n }}
          </span>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        variant="plain"
        icon="mdi-chevron-left"
        @click="prev"
      ></v-btn>
      <v-item-group
        v-model="model"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          ></v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        variant="plain"
        icon="mdi-chevron-right"
        @click="next"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>


</style>
