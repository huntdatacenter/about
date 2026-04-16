<script setup lang="ts">
import { useData, useRoute } from "vitepress"
import { computed } from "vue"
// import Theme from 'vitepress/theme'
// import VPContent from 'vitepress/theme'
// import VPFooter from 'vitepress/theme'
// import VPSidebar from 'vitepress/theme'
// import VPNav from 'vitepress/theme'
// import VPDoc from 'vitepress/theme'
// import VPSkipLink from 'vitepress/theme'
// import VPBackdrop from 'vitepress/theme'
import useAuthors from "../../composables/useAuthors"

const { isDark, site, page, frontmatter, theme } = useData()

const route = useRoute()

const { currentAuthor: author, prevAuthor, nextAuthor } = useAuthors()

const pageName = computed(() => route.path.replace(/[./]+/g, "_").replace(/_html$/, ""))

var hasSidebar = true

const hasAside = true
const leftAside = false
</script>

<template>
  <v-container>
    <div class="VPDoc" :class="{ 'has-sidebar': hasSidebar, 'has-aside': hasAside }">
      <slot name="doc-top" />
      <div class="container">
        <div v-if="hasAside" class="aside" :class="{ 'left-aside': leftAside }">
          <div class="aside-curtain" />
          <div class="aside-container">
            <div class="aside-content">
              <VPDocAside>
                <template #aside-top><slot name="aside-top" /></template>
                <template #aside-bottom><slot name="aside-bottom" /></template>
                <template #aside-outline-before><slot name="aside-outline-before" /></template>
                <template #aside-outline-after><slot name="aside-outline-after" /></template>
                <template #aside-ads-before><slot name="aside-ads-before" /></template>
                <template #aside-ads-after><slot name="aside-ads-after" /></template>
              </VPDocAside>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="content-container">
            <slot name="doc-before" />
            <main class="main">
              <v-sheet v-if="author" class="author-header">
                <v-avatar v-if="author.data.avatar" size="300" class="author-avatar">
                  <v-img :alt="author.name" :src="author.data.avatar"></v-img>
                </v-avatar>
                <v-avatar v-else size="300" class="author-avatar">
                  <v-icon icon="mdi-account-circle" size="140"></v-icon>
                </v-avatar>
                <h1 class="author-name">
                  {{ author.name }}
                </h1>
                <div class="author-socials">
                  <a v-if="author.data.github" :href="author.data.github" target="_blank">
                    <FontAwesomeIcon :icon="['fab', 'github']" />
                  </a>
                  <a v-if="author.data.linkedin" :href="author.data.linkedin" target="_blank">
                    <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                  </a>
                </div>
              </v-sheet>
              <Content class="vp-doc" :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']" />
            </main>
            <VPDocFooter>
              <template #doc-footer-before><slot name="doc-footer-before" /></template>
            </VPDocFooter>
            <slot name="doc-after" />
          </div>
        </div>
      </div>
      <slot name="doc-bottom" />
    </div>
  </v-container>
</template>

<style scoped>
.VPDoc {
  padding: 32px 24px 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .VPDoc {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .VPDoc {
    padding: 48px 32px 0;
  }

  .VPDoc:not(.has-sidebar) .container {
    display: flex;
    justify-content: center;
    max-width: 992px;
  }

  .VPDoc:not(.has-sidebar) .content {
    max-width: 752px;
  }
}

@media (min-width: 1280px) {
  .VPDoc .container {
    display: flex;
    justify-content: center;
  }

  .VPDoc .aside {
    display: block;
  }
}

@media (min-width: 1440px) {
  .VPDoc:not(.has-sidebar) .content {
    max-width: 784px;
  }

  .VPDoc:not(.has-sidebar) .container {
    max-width: 1104px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.aside {
  position: relative;
  display: none;
  order: 2;
  flex-grow: 1;
  padding-left: 32px;
  width: 100%;
  max-width: 256px;
}

.left-aside {
  order: 1;
  padding-left: unset;
  padding-right: 32px;
}

.aside-container {
  position: fixed;
  top: 0;
  padding-top: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + var(--vp-doc-top-height, 0px) + 48px);
  width: 224px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}

.aside-container::-webkit-scrollbar {
  display: none;
}

.aside-curtain {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 224px;
  height: 32px;
  background: linear-gradient(transparent, var(--vp-c-bg) 70%);
}

.aside-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px));
  padding-bottom: 32px;
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}

@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}

@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 640px;
  }
}

.content-container {
  margin: 0 auto;
}

.VPDoc.has-aside .content-container {
  max-width: 688px;
}

.author-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.author-avatar {
  margin-bottom: 16px;
}

.author-name {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}

.author-socials {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
}

.author-socials a {
  font-size: 22px;
  color: inherit;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.author-socials a:hover {
  transform: scale(1.2);
}
</style>
