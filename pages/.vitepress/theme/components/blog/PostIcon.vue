<script setup lang="ts">
import type { Post } from "../../composables/posts.data"

const props = defineProps<{
  post: Post
}>()

const category: string = props.post.data.category ? props.post.data.category : "Article"
</script>

<template>
  <div class="d-inline-flex">
    <v-icon v-if="category === 'Article'" icon="mdi-book-open-outline" class="mr-2" />
    <v-icon v-if="category === 'Tutorial'" icon="mdi-school-outline" class="mr-2" />
    <v-icon v-if="category === 'Document'" icon="mdi-file-document-outline" class="mr-2" />
    <v-icon v-if="category === 'Podcast'" icon="mdi-podcast" class="mr-2" />
    <v-icon v-if="category === 'Artwork'" icon="mdi-palette" class="mr-2" />
    <div class="mr-2">{{ category }}</div>
    <slot />
  </div>
</template>

<style scoped></style>
