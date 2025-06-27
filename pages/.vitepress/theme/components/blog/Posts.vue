<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'
import Post from './Post.vue' // Assuming already rewritten for Vuetify

const { allPosts: posts } = usePosts()
const { theme } = useData()

// :class="$vuetify.theme.current === 'dark' ? 'test-dark-1' : 'test-light-1'"

</script>

<template>
  <v-container class="py-8 lg:py-16 px-4 lg:px-6" style="max-width: 1280px;">
    <!-- Blog Title and Description -->
    <v-row v-if="theme.blog?.title && theme.blog?.description ? true : false" justify="center" class="mb-8 lg:mb-16">
      <v-col cols="12" sm="8" class="text-center">
        <h3
          v-if="theme.blog?.title ? true : false"
          class="mb-4 text-h5"
        >
          {{ theme.blog?.title }}
        </h3>
        <p
          v-if="theme.blog?.description ? true : false"
          class="text-body-1 font-weight-light text-light-1"
        >
          {{ theme.blog?.description }}
        </p>
      </v-col>
    </v-row>

    <!-- Post Grid -->
    <v-row class="pa-2" :dense="false">
      <v-col
        v-for="post of posts"
        :key="post.id"
        cols="12"
        lg="6"
      >
        <Post :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Theme-based color classes */
.text-primary-light {
  color: rgb(var(--v-theme-primary-light));
}

/* .text-primary-dark {
  color: rgb(var(--v-theme-primary-dark));
} */

.text-light-1 {
  color: rgb(var(--v-theme-text-light-1));
}

/* .text-dark-1 {
  color: rgb(var(--v-theme-text-dark-1));
} */
</style>
