

<script>
export default {
  name: 'Machine',
    props: {
        title: {
        type: String,
        default: "Machine "
        },
        machineName: {
            type: String,
            required: true
        }
    },
  data() {
    return {
      // Your data properties here
      subscriptionType: "", 
      items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],

    };
  },
  methods: {
    removeThis() {
      this.$emit('remove-machine', this.machineName);
    }
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>

<template>
  <v-sheet class="machines">
    <v-col cols="auto">
    <h3>{{ title + machineName }}</h3>
    <v-select v-model="value" :items="items" label="Select configuration" multiple>
      <template v-slot:selection="{ item, index }">
        <v-chip >
          <span>{{ item.title }}</span>
        </v-chip>
      </template>
    </v-select>
    <v-select v-model="value" :items="items" label="Select configuration" multiple>
      <template v-slot:selection="{ item, index }">
        <v-chip >
          <span>{{ item.title }}</span>
        </v-chip>
      </template>
    </v-select>
    <v-select v-model="value" :items="items" label="Select configuration" multiple>
      <template v-slot:selection="{ item, index }">
        <v-chip >
          <span>{{ item.title }}</span>
        </v-chip>
      </template>
    </v-select>

  </v-col>

</v-sheet>
  </template>

<style scoped>
/* Your component styles here */
/* Round the corners */
.machines {
  border-bottom: 1px solid #e0e0e0;
  border-radius: 20px;
}
h3 {
  margin: 0;
  padding: 10px;
}
</style>
