<script setup lang="ts">
import { useData } from 'vitepress'
import useAuthors from '../../composables/useAuthors'
import usePosts from '../../composables/usePosts'
import PostAuthor from './PostAuthor.vue'
import PostIcon from './PostIcon.vue'

const { site } = useData()

const { currentPost: post, prevPost, nextPost } = usePosts()
const { findByName } = useAuthors()
const author = findByName(post.value.author)

const articlesPath = 'articles'

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Author, Icon, and Date -->
        <v-row align="center" class="mb-1">
          <v-col cols="auto">
            <PostAuthor :author="author" />
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <!-- :class="$vuetify.theme.current === 'dark' ? 'bg-primary-darken-4' : 'bg-primary-lighten-5'" -->
            <span
              class="text-sm font-medium d-inline-flex align-center rounded pa-2 bg-primary-lighten-5"
            >
              <PostIcon :post="post" />
            </span>
            <span class="text-sm text-grey">{{ post.date.since }}</span>
          </v-col>
        </v-row>

        <!-- Title -->
        <!-- :class="$vuetify.theme.current === 'dark' ? 'text-primary-dark' : 'text-primary-light'" -->
        <h2
          class="mb-2 mt-2 text-h5 font-weight-bold text-primary-light"
        >
          {{ post.title }}
        </h2>
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

      </v-col>
    </v-row>
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
