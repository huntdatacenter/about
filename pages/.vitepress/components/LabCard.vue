<script lang="ts">
interface Machine {
    name: string;
    index: number;
}
export default {
    name: 'LabCard',
    props: {
        labName: {
            type: String,
            required: true
        },
        title: { type: String, required: true, default: "Lab " }
    },
    data() {
        return {
            machines: [] as Machine[],
        };
    },

    methods: {
        



        addMachine() {
            console.log('Adding machine');
            const newMachine: Machine = {
                name: `Machine ${this.machines.length +1}`,
                index: this.machines.length +1,
            };
            this.machines.push(newMachine);

        },
        removeMachine(machine: Machine) {
            const machineIndex = this.machines.findIndex(existingMachine => existingMachine === machine);
            if (machineIndex > -1) { // Check if machine found
                this.machines.splice(machineIndex, 1);
            }
        }
    }

}
</script>

<template>
    <v-sheet class="lab-card">
        <v-card class="ma-0">
            <v-card-title>{{ title + labName }}</v-card-title>
            <v-card-subtitle>Add a machine</v-card-subtitle>

            <v-col cols="auto">
                <v-btn icon="mdi-plus" size="small" @click="addMachine"></v-btn>
            </v-col>
            <Machine v-for="(machine, index) in machines" :key="index" :machineIndex=index + 1 :title="machine.name"
                @remove-machine="removeMachine" />
            <v-card-subtitle> Add storage </v-card-subtitle>
            <v-col cols="auto">
                <v-btn icon="mdi-plus" size="small"></v-btn>
            </v-col>
        </v-card>
    </v-sheet>
</template>

<style scoped>
.lab-card {
    padding: 10px;
    margin-bottom: 10px;
}
</style>
