<script lang="ts">

export default {
    name: 'LabCard',
    props: {
        title: { type: String, required: true, default: "Lab " },
        computePrices: { type: Array, default: () => [] },
        gpuPrices: { type: Array, default: () => [] },
        storagePrices: { type: Array, default: () => [] },
        machines: { type: Array, default: () => [] },
        availableGpus: { type: Array, default: () => [] },
    },
    data() {
        return {
            computeId: 0,
            isComputeModalOpen: false,
        };
    },

    methods: {  
        addMachine() {
            this.isComputeModalOpen = true;
        },
        closeComputeModal(payload) {
        if (payload) {
            this.computeId = this.computeId + 1;
            this.datasetCompute.push(payload);
        }
            this.isComputeModalOpen = false;
        },
    },
    created() {

    },

}
</script>

<template>
    <v-sheet class="lab-card">
        <v-card class="ma-0">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>Add a machine</v-card-subtitle>

            <v-col cols="auto">
                <v-btn icon="mdi-plus" size="small" @click="addMachine"></v-btn>
            </v-col>
            <Machine v-if="isComputeModalOpen"
                    :compute-id="computeId"
                    :flavors="computePrices"
                    :gpus="gpuPrices"
                    :machines="machines"
                    :available-gpus="availableGpus"
                    @close="closeComputeModal"/>
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
