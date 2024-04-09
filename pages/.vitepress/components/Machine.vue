<script>
export default {
  name: 'Machine',
  props: {
    title: {
      type: String,
      default: "Machine "
    },
    machineIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // Your data properties here
      subscriptions: [
        'Free',
        'Basic',
        'Pro'
      ],
      selectedSubscription: '',
      Machinetype: [
        'Standard',
        'Professional',
        'Enterprise'
      ],
      selectedMachineType: '',
      GPUs: [
        'None',
        'NVIDIA Tesla K80',
        'NVIDIA Tesla P100',
        'NVIDIA Tesla V100'
      ],
      selectedGPU: ''

    };
  },
  methods: {
    removeMachine() {
      this.$emit('remove-machine', {
        name: this.title,
        index: this.machineIndex
      });
      console.log(this.machineIndex);
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
      <v-row>
        <v-col>
          <h2>{{ title}}</h2>
        </v-col>
        <v-col class="text-right" cols="auto">
          <v-btn density="default" size="small" outlined @click="removeMachine">Remove</v-btn>
        </v-col>
      </v-row> 
      <v-select v-model="selectedSubscription" :items="subscriptions" label="Subscription type">
      </v-select>
      <v-select v-model="selectedMachineType" :items="Machinetype" label="Machine type"
        v-if="selectedSubscription != ''">
      </v-select>

      <v-select v-model="selectedGPU" :items="GPUs" label="GPU type (optional)" v-if="selectedSubscription != ''">
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

h2 {
  margin: 0;
  padding: 10px;
  border-top: none;
}
.text-right {
  margin-top:10px;
}
</style>
