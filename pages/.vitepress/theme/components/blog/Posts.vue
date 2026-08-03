<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { useData } from "vitepress"
import usePosts from "../../composables/usePosts"
import Post from "./Post.vue"

const ISSERVER = typeof window === "undefined"

// `category` scopes this listing to a single content type. Omit it (the /feed
// index) to show everything. Values match the posts' frontmatter `category`.
const props = defineProps<{
  category?: string
}>()

// Feed sections: label + route + the category each filters by (undefined = all).
const sections = [
  { label: "All", href: "/feed/", category: undefined },
  { label: "Art", href: "/feed/art/", category: "Artwork" },
  { label: "Podcasts", href: "/feed/podcast/", category: "Podcast" },
  { label: "Posts", href: "/feed/posts/", category: "Article" },
]
const activeHref = computed(() => sections.find(s => s.category === props.category)?.href ?? "/feed/")

const { site, theme } = useData()
const { getPostsPerPage, getPageCount } = usePosts(props.category)

const pageCount = getPageCount().value

const pageNumber = computed(() => {
  if (ISSERVER) return 1
  const params = new URLSearchParams(new URL(window.location.href).search)
  const pageParam = params.get("page")
  return pageParam ? parseInt(pageParam, 10) : 1
})

const posts = computed(() => getPostsPerPage(pageNumber.value).value)

function updatePage(arg: number) {
  if (ISSERVER) return
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set("page", arg.toString())
  window.location.search = params.toString()
}

/*
 * Order-preserving masonry.
 *
 * Vuetify has no masonry component, and a pure CSS `column-count` layout fills
 * top-to-bottom per column, which breaks newest-first ordering. Instead we walk
 * the cards in document order (already sorted newest-first) and drop each one
 * into whichever column is currently shortest. That keeps reading order
 * left-to-right while eliminating the vertical gaps a fixed-height row grid
 * leaves under shorter posts.
 */
const GAP = 24 // px, gutter between cards (matches previous grid spacing)
const BREAKPOINT = 1280 // px, Vuetify `lg` — 2 columns at/above, 1 below

const masonryEl = ref<HTMLElement | null>(null)
const ready = ref(false)
const animate = ref(false) // enabled after first layout so the initial placement doesn't slide
const containerHeight = ref<string>("auto")

let ro: ResizeObserver | null = null
let frame = 0

// Column count follows the viewport (matching Vuetify's `lg` breakpoint and the
// original `cols=12 lg=6`), NOT the container: the container is capped at
// max-width 1280 minus padding, so it never actually reaches 1280.
function columnCount() {
  return window.innerWidth >= BREAKPOINT ? 2 : 1
}

function relayout() {
  const container = masonryEl.value
  if (!container) return

  const items = Array.from(container.children) as HTMLElement[]
  const width = container.clientWidth
  const cols = columnCount()
  const colWidth = (width - GAP * (cols - 1)) / cols
  const colHeights = new Array(cols).fill(0)

  for (const el of items) {
    // Fixing the width first makes offsetHeight reflect the wrapped height.
    el.style.width = `${colWidth}px`
    // Shortest column wins; ties go to the left-most (earliest) column.
    let target = 0
    for (let c = 1; c < cols; c++) {
      if (colHeights[c] < colHeights[target]) target = c
    }
    el.style.transform = `translate(${target * (colWidth + GAP)}px, ${colHeights[target]}px)`
    colHeights[target] += el.offsetHeight + GAP
  }

  containerHeight.value = `${Math.max(...colHeights) - GAP}px`
  ready.value = true
  if (!animate.value) requestAnimationFrame(() => (animate.value = true))
}

function scheduleRelayout() {
  if (frame) cancelAnimationFrame(frame)
  frame = requestAnimationFrame(relayout)
}

// Re-observe container + current cards so layout tracks width changes and
// late-settling content (images, YouTube iframes) that changes card heights.
function observeAll() {
  const container = masonryEl.value
  if (!ro || !container) return
  ro.disconnect()
  ro.observe(container)
  for (const el of Array.from(container.children)) ro.observe(el as HTMLElement)
}

onMounted(() => {
  if (ISSERVER || typeof ResizeObserver === "undefined") return
  ro = new ResizeObserver(scheduleRelayout)
  observeAll()
  // The container stops widening once it hits its max-width, so the ResizeObserver
  // won't fire when the viewport crosses the breakpoint beyond that point.
  window.addEventListener("resize", scheduleRelayout)
  scheduleRelayout()
})

// Pagination swaps the card set; rewire observers and relay out afterwards.
watch(posts, () => {
  if (ISSERVER) return
  ready.value = false
  nextTick(() => {
    observeAll()
    scheduleRelayout()
  })
})

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame)
  ro?.disconnect()
  if (!ISSERVER) window.removeEventListener("resize", scheduleRelayout)
})
</script>

<template>
  <v-container class="py-8 lg:py-16 px-4 lg:px-6" style="max-width: 1280px">
    <!-- Blog Title and Description -->
    <v-row v-if="theme.blog?.title && theme.blog?.description ? true : false" justify="center" class="mb-8 lg:mb-16">
      <v-col cols="12" sm="8" class="text-center">
        <h3 v-if="theme.blog?.title ? true : false" class="mb-4 text-h5">
          {{ theme.blog?.title }}
        </h3>
        <p v-if="theme.blog?.description ? true : false" class="text-body-1 font-weight-light text-light-1">
          {{ theme.blog?.description }}
        </p>
      </v-col>
    </v-row>

    <!-- Content-type filter tabs. Plain links so each section is its own
         static, SSR-rendered, shareable URL (/feed, /feed/art, ...). -->
    <div class="d-flex justify-center flex-wrap ga-2 mb-6">
      <v-btn
        v-for="section of sections"
        :key="section.href"
        :href="`${site.base.replace(/\/$/, '')}${section.href}`"
        :variant="section.href === activeHref ? 'flat' : 'text'"
        :color="section.href === activeHref ? 'primary-light' : 'grey'"
        rounded="pill"
        class="font-weight-medium text-decoration-none normal-case"
      >
        {{ section.label }}
      </v-btn>
    </div>

    <!-- Post grid (order-preserving masonry, see <script>) -->
    <div
      ref="masonryEl"
      class="posts-masonry pa-2"
      :class="{ 'posts-masonry--ready': ready, 'posts-masonry--animate': animate }"
      :style="{ height: ready ? containerHeight : undefined }"
    >
      <div v-for="post of posts" :key="post.id" class="posts-masonry__item">
        <Post :post="post" />
      </div>
    </div>

    <v-row class="pa-2" :dense="false">
      <v-col cols="12">
        <v-pagination
          :model-value="pageNumber"
          :length="pageCount"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
          first-icon=""
          last-icon=""
          rounded="sm"
          @update:model-value="updatePage"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/*
 * Before JS lays the cards out (SSR + pre-hydration) they flow as a single
 * column so the page is never broken without JS. Once `--ready`, cards are
 * absolutely positioned by the masonry logic and the container gets an explicit
 * height.
 */
.posts-masonry {
  position: relative;
  width: 100%;
}

.posts-masonry__item {
  margin-bottom: 24px;
}

.posts-masonry--ready .posts-masonry__item {
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 0;
  will-change: transform;
}

.posts-masonry--animate .posts-masonry__item {
  transition: transform 0.2s ease;
}

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
