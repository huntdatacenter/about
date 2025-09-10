<script setup lang="ts">
import type { Post } from '../../composables/posts.data'
import { useData } from 'vitepress'
import useAuthors from '../../composables/useAuthors'
import PostAuthor from './PostAuthor.vue'
import PostIcon from './PostIcon.vue'

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const author = findByName(props.post.author)
const articlesPath = 'articles'
</script>

<template>
  <v-card
    class="pa-6 border-primary-light"
    elevation="2"
    rounded="lg"
    color="white"
  >
    <!-- Date and Icon -->
    <v-row class="mb-0 pb-0 d-flex">
      <v-col cols="auto" class="me-auto">
        <span class="text-subtitle-2">
          <PostIcon :post="post"></PostIcon>
        </span>
      </v-col>
      <v-col cols="auto">
        <div class="text-subtitle-2">
          {{ post.date.since }}
        </div>
      </v-col>
    </v-row>

    <!-- Title -->
    <div class="mt-2 pt-5" style="border-top: rgb(226, 226, 227) 1px solid;">
      <a
        :href="`${site.base}${articlesPath}${post.href}`"
        variant="text"
        color="primary-light"
        class="pa-0 text-h5 font-weight-bold text-decoration-none normal-case text-primary-light"
      >
        {{ post.title }}
      </a>
    </div>

    <!-- Excerpt -->
    <p class="mb-5 text-body-1 font-weight-light" v-html="post.intro" />
    <!-- <p class="mb-5 text-body-1 font-weight-light" v-html="post.excerpt" /> -->

    <!-- Author and Read More -->
    <v-row>
      <v-col cols="auto" class="me-auto">
        <PostAuthor :author="author" />
      </v-col>
      <v-col cols="auto" class="text-right">
        <v-btn
          :href="`${site.base}${articlesPath}${post.href}`"
          variant="text"
          color="primary-light"
          class="font-weight-medium text-decoration-none"
        >
          Read more
          <v-icon end icon="mdi-arrow-right" />
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
/* Custom border colors for theming */

/* Ensure primary color theming */
.text-primary-light {
  color: rgb(var(--v-theme-primary-light));
}

.text-primary-dark {
  color: rgb(var(--v-theme-primary-dark));
}
</style>
