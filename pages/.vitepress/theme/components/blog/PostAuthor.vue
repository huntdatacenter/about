<script setup lang="ts">
import type { Author } from "../../composables/authors.data"
import { useData } from "vitepress"

defineProps<{
  author: Author
}>()

const { site } = useData()
</script>

<template>
  <v-sheet v-if="author" class="d-flex ma-0">
    <v-sheet class="flex-1-0 pa-0 pr-3">
      <v-avatar v-if="author.data.avatar ? true : false" size="34">
        <v-img :alt="author.name" :src="author.data.avatar"></v-img>
      </v-avatar>
      <v-avatar v-else size="34">
        <v-icon icon="mdi-account-circle" size="34"></v-icon>
      </v-avatar>
    </v-sheet>

    <v-sheet class="pa-0">
      <v-btn
        :href="`${site.base}${author.href}`"
        variant="text"
        color="primary-light"
        class="text-decoration-none normal-case pa-0"
      >
        {{ author.name }}
      </v-btn>
    </v-sheet>
  </v-sheet>
  <v-sheet v-else></v-sheet>
</template>

<style scoped>
/* Ensure primary color theming */
.text-primary-light {
  color: rgb(var(--v-theme-primary-light));
}
</style>
