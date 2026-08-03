<script setup lang="ts">
import type { Post } from "../../composables/posts.data"
import { useData } from "vitepress"
import useAuthors from "../../composables/useAuthors"
import PostAuthor from "./PostAuthor.vue"
import PostIcon from "./PostIcon.vue"

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const author = findByName(props.post.author)
const contentSectionPath = "content"

const postUrl = `${site.value.base}${contentSectionPath}${props.post.href}`
</script>

<template>
  <v-card class="post-card" flat>
    <!-- Category + date -->
    <div class="post-card__meta">
      <PostIcon :post="post" class="post-card__category" />
      <span class="post-card__date">{{ post.date.since }}</span>
    </div>

    <!-- Title -->
    <a :href="postUrl" class="post-card__title">{{ post.title }}</a>

    <!-- Excerpt -->
    <div class="post-card__intro" v-html="post.intro" />

    <!-- Author and Read more -->
    <div class="post-card__footer">
      <PostAuthor :author="author" />
      <a :href="postUrl" class="post-card__more">
        Read more
        <v-icon end icon="mdi-arrow-right" size="16" />
      </a>
    </div>
  </v-card>
</template>

<style scoped>
.post-card {
  padding: 22px 24px;
  background: var(--vp-c-bg) !important;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  border-color: var(--ntnu-blue-border);
  box-shadow: 0 8px 30px rgba(0, 80, 158, 0.08);
}

.post-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

/* NTNU-blue accent on the category tag */
.post-card__category {
  color: var(--ntnu-blue);
}

.post-card__category :deep(.v-icon) {
  font-size: 16px;
}

.post-card__title {
  display: block;
  font-size: 19px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-card:hover .post-card__title {
  color: var(--ntnu-blue);
}

.post-card__intro {
  margin: 12px 0 22px;
  font-size: 14px;
  line-height: 1.65;
  font-weight: 300;
  color: var(--vp-c-text-2);
}

/* v-html content — reach through scoped styling to keep media tidy */
.post-card__intro :deep(img),
.post-card__intro :deep(iframe) {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 14px;
  border-radius: 8px;
}

.post-card__intro :deep(p:last-child) {
  margin-bottom: 0;
}

.post-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.post-card__more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--ntnu-blue);
  text-decoration: none;
  white-space: nowrap;
}

.post-card__more .v-icon {
  transition: transform 0.2s ease;
}

.post-card__more:hover .v-icon {
  transform: translateX(3px);
}
</style>
