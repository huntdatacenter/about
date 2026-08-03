<script setup lang="ts">
import type { Author } from "../../composables/authors.data"
import { useData } from "vitepress"

defineProps<{
  author: Author
}>()

const { site } = useData()
</script>

<template>
  <a v-if="author" :href="`${site.base}${author.href}`" class="post-author">
    <v-avatar v-if="author.data.avatar ? true : false" size="30">
      <v-img :alt="author.name" :src="author.data.avatar"></v-img>
    </v-avatar>
    <v-avatar v-else size="30">
      <v-icon icon="mdi-account-circle" size="30"></v-icon>
    </v-avatar>
    <span class="post-author__name">{{ author.name }}</span>
  </a>
  <span v-else></span>
</template>

<style scoped>
.post-author {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  text-decoration: none;
}

.post-author__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}

.post-author:hover .post-author__name {
  color: var(--ntnu-blue);
}
</style>
