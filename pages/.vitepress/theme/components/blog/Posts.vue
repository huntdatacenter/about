<script lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'
import Post from './Post.vue' // Assuming already rewritten for Vuetify

export default {
  setup() {
    const { theme } = useData() // Destructure theme from useData composable

    const { getPostsPerPage, getPageCount } = usePosts()

    const pageCount = getPageCount().value

    // Export theme by returning it from setup
    return {
      theme,
      getPostsPerPage,
      pageCount,
    };
  },
  data() {
    return {}
  },
  computed: {
    pageNumber() {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search)
      const pageParam = params.get('page') ? params.get('page') : null
      const page = pageParam ? parseInt(pageParam, 10) : 1
      return page
    }
  },
  mounted() {},
  methods: {
    updatePage(arg: number) {
      let url = new URL(window.location.href);
      let params = new URLSearchParams(url.search)
      params.set('page', arg.toString())
      window.location.search = params.toString()
    }
  }
}

// :class="$vuetify.theme.current === 'dark' ? 'test-dark-1' : 'test-light-1'"
</script>

<template>
  <v-container class="py-8 lg:py-16 px-4 lg:px-6" style="max-width: 1280px;">
    <!-- Blog Title and Description -->
    <v-row v-if="theme.blog?.title && theme.blog?.description ? true : false" justify="center" class="mb-8 lg:mb-16">
      <v-col cols="12" sm="8" class="text-center">
        <h3
          v-if="theme.blog?.title ? true : false"
          class="mb-4 text-h5"
        >
          {{ theme.blog?.title }}
        </h3>
        <p
          v-if="theme.blog?.description ? true : false"
          class="text-body-1 font-weight-light text-light-1"
        >
          {{ theme.blog?.description }}
        </p>
      </v-col>
    </v-row>

    <!-- Post Grid -->
    <v-row class="pa-2" :dense="false">
      <v-col
        v-for="post of getPostsPerPage(pageNumber).value"
        :key="post.id"
        cols="12"
        lg="6"
      >
        <Post :post="post" />
      </v-col>
    </v-row>
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
