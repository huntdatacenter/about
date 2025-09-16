<script setup lang="ts">
import { useData } from "vitepress"
import useAuthors from "../../composables/useAuthors"

const { site } = useData()

const { currentAuthor: author, prevAuthor, nextAuthor } = useAuthors()
</script>

<template>
  <v-container>
    <div>
      <!-- Author header -->
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
          <h1 class="text-h4 font-weight-bold text-primary-light">
            {{ author.name }}
          </h1>
        </v-sheet>
      </v-sheet>
      <!-- <v-row align="center" class="mb-2">
        <v-col cols="auto">
          <v-img
            :src="author.data.avatar"
            :alt="author.name"
            width="40"
            height="40"
            class="rounded-circle"
          />
        </v-col>
        <v-col>
          <h1
            class="text-h4 font-weight-bold text-primary-light"
          >
            {{ author.name }}
          </h1>
        </v-col>
      </v-row> -->

      <!-- Content slot -->
      <slot />

      <!-- Navigation buttons -->
      <v-row align="center" class="mt-4">
        <v-col cols="6" v-if="prevAuthor">
          <v-btn
            :href="`${site.base}${prevAuthor.href}`"
            variant="text"
            color="primary"
            class="font-weight-medium text-decoration-none"
          >
            <v-icon start icon="mdi-arrow-left" />
            Previous Author
          </v-btn>
        </v-col>
        <v-col cols="6" v-if="!prevAuthor" />
        <v-col cols="6" class="text-right" v-if="nextAuthor">
          <v-btn
            :href="`${site.base}${nextAuthor.href}`"
            variant="text"
            color="primary"
            class="font-weight-medium text-decoration-none"
          >
            Next Author
            <v-icon end icon="mdi-arrow-right" />
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
/* Adjust typography and spacing for Vuetify consistency */
:deep(.v-container) h1,
:deep(.v-container) h2,
:deep(.v-container) h3,
:deep(.v-container) hr {
  margin-top: 12px;
  margin-bottom: 12px;
}

/* Ensure primary color theming */
.text-primary-light {
  color: rgb(var(--v-theme-primary));
}

.text-primary-dark {
  color: rgb(var(--v-theme-primary-dark));
}
</style>
