import type { Ref } from 'vue'
import type { Post } from './posts.data'
import { useData, useRoute } from 'vitepress'
import { computed, ref } from 'vue'
import { data } from './posts.data'

export default () => {
  // NOTE -- getting error (useData): vitepress data not properly injected in app
  // const { site } = useData()

  const allPosts: Ref<Post[]> = ref(data)

  function getPostsPerPage(pageNumber: number, pageSize: number = 10): Ref<Post[]> {
    const posts: Ref<Post[]> = ref(allPosts.value.slice((pageNumber - 1) * pageSize, pageNumber * pageSize))
    return posts
  }

  function getPageCount(pageSize: number = 10): Ref<number> {
    const pageCount: Ref<number> = ref(Math.ceil(allPosts.value.length / pageSize))
    return pageCount;
  }

  const route = useRoute()

  const path = route.path

  const articlesPath = 'articles'

  function findCurrentIndex() {
    return allPosts.value.findIndex(p => `${site.value.base}${articlesPath}${p.href}` === route.path)
  }

  const currentPost = computed(() => allPosts.value[findCurrentIndex()])
  const nextPost = computed(() => allPosts.value[findCurrentIndex() - 1])
  const prevPost = computed(() => allPosts.value[findCurrentIndex() + 1])

  return { allPosts, currentPost, nextPost, prevPost, path, getPostsPerPage, getPageCount }
}
