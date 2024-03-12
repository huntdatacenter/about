<script lang="ts">
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
            machines: [],
        };
    },
    
    methods: {
        addMachine() {
            this.machines.push(this.machines.length + 1);
            console.log(this.machines);
        },
        removeMachine() {
            this.machines.pop();
            console.log(this.machines);
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
            <v-row>
            <v-col cols="auto">
                <v-btn icon="mdi-plus" size="small" @click="addMachine"></v-btn>
            </v-col>
            <v-col class="text-right" cols="auto" v-if="this.machines.length > 0">
                <v-btn density="default" outlined @click="removeMachine">Remove a machine</v-btn>
            </v-col>
            </v-row>
            </v-col>
            
            <Machine v-for="(machine, index) in machines" :key="index" :machineName="index+1"/>
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
