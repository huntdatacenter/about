<script setup lang="ts">
import { useData } from "vitepress"
import useAuthors from "../../composables/useAuthors"
import usePosts from "../../composables/usePosts"
import PostAuthor from "./PostAuthor.vue"
import PostIcon from "./PostIcon.vue"

const { site } = useData()

const { currentPost: post, prevPost, nextPost } = usePosts()
const { findByName } = useAuthors()
const author = findByName(post.value.author)

const articlesPath = "articles"

// <!-- :class="$vuetify.theme.current === 'dark' ? 'bg-primary-darken-4' : 'bg-primary-lighten-5'" -->
</script>

<template>
  <v-container>
    <div>
      <!-- Author, Icon, and Date -->
      <!-- <v-row align="center" class="mb-1">
        <v-col cols="auto">
          <PostAuthor :author="author" />
        </v-col>
        <v-col cols="auto" class="ml-auto overflow-auto">
          <span
            class="d-inline-flex align-center bg-primary-lighten-5 float-left"
          >
            <PostIcon :post="post" />
          </span>
          <span class="text-grey float-right ml-3">{{ post.date.since }}</span>
        </v-col>
      </v-row> -->
      <!-- <v-row class="mb-1">
        <v-col cols="auto">
          <span
            class="d-inline-flex align-center bg-primary-lighten-5 float-right"
          >
            <PostIcon :post="post" />
          </span>
        </v-col>
      </v-row> -->

      <v-row class="mt-0 mb-4 pb-4 pt-0" style="border-bottom: 1px solid var(--vp-c-divider)">
        <v-col cols="auto" class="pt-0">
          <h3 class="text-h5 font-weight-bold text-primary-light d-inline-flex pa-0 ma-0">
            <!-- Title -->
            {{ post.title }}
          </h3>
        </v-col>
        <v-col cols="auto" class="ml-auto mt-n2">
          <span class="align-center bg-primary-lighten-5 float-right">
            <PostIcon :post="post" />
          </span>
        </v-col>
      </v-row>

      <v-row class="mb-8">
        <v-col cols="auto" style="margin-top: -6px !important">
          <PostAuthor :author="author" />
        </v-col>
        <v-col cols="auto" class="ml-auto overflow-auto">
          <span class="text-grey float-right ml-3">{{ post.date.since }}</span>
        </v-col>
      </v-row>

      <!-- Content Slot -->
      <slot />

      <!-- Navigation Links -->
      <v-row class="mt-2">
        <v-col cols="6" v-if="prevPost">
          <v-btn
            :href="`${site.base}${articlesPath}${prevPost.href}`"
            variant="text"
            color="grey"
            class="font-weight-medium text-decoration-none normal-case"
          >
            <v-icon start icon="mdi-arrow-left" class="mr-2" />
            Previous Post
          </v-btn>
        </v-col>
        <v-col cols="6" v-if="!prevPost" />
        <v-col cols="6" class="text-right" v-if="nextPost">
          <v-btn
            :href="`${site.base}${articlesPath}${nextPost.href}`"
            variant="text"
            color="grey"
            class="font-weight-medium text-decoration-none normal-case"
          >
            Next Post
            <v-icon end icon="mdi-arrow-right" class="ml-2" />
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
  color: rgb(var(--v-theme-primary-light));
}

.text-primary-dark {
  color: rgb(var(--v-theme-primary-dark));
}

/* Grey text for consistency */
.text-grey {
  color: rgb(var(--v-theme-grey));
}
</style>
