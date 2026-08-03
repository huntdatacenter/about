import type { Ref } from "vue"
import type { Post } from "./posts.data"
import { useData, useRoute } from "vitepress"
import { computed, ref } from "vue"
import { data } from "./posts.data"

// Optional `category` scopes the paginated listing to a single content type
// (e.g. "Artwork", "Podcast", "Article"). Detail-page navigation (currentPost /
// nextPost / prevPost) always runs over the full set so prev/next isn't limited
// to one category.
export default (category?: string) => {
  // NOTE -- getting error (useData): vitepress data not properly injected in app
  const { site } = useData()

  const allPosts: Ref<Post[]> = ref(data)

  const listedPosts: Ref<Post[]> = ref(
    category ? data.filter(p => p.data.category === category) : data,
  )

  function getPostsPerPage(pageNumber: number, pageSize: number = 10): Ref<Post[]> {
    const posts: Ref<Post[]> = ref(listedPosts.value.slice((pageNumber - 1) * pageSize, pageNumber * pageSize))
    return posts
  }

  function getPageCount(pageSize: number = 10): Ref<number> {
    const pageCount: Ref<number> = ref(Math.ceil(listedPosts.value.length / pageSize))
    return pageCount
  }

  const route = useRoute()

  const path = route.path

  const contentSectionPath = "content"

  function findCurrentIndex() {
    return allPosts.value.findIndex(p => `${site.value.base}${contentSectionPath}${p.href}` === route.path)
  }

  const currentPost = computed(() => allPosts.value[findCurrentIndex()])
  const nextPost = computed(() => allPosts.value[findCurrentIndex() - 1])
  const prevPost = computed(() => allPosts.value[findCurrentIndex() + 1])

  return { allPosts, listedPosts, currentPost, nextPost, prevPost, path, getPostsPerPage, getPageCount }
}
