<script lang="ts">

interface Product {
  title: string,
  subtitle: string,
  text: string,
  img: string,
  href: string,
}

export default {
  components: {},
  props: {
    products: {
      type: Array<Product>,
      required: true
    }
  },
  data() {
    return {
      // items: this.products ? this.products : [],
    }
  },
  computed: {},
}
</script>

<template>
  <v-sheet
    class="group-slider-wrapper ma-auto"
    elevation="0"
    max-width="920"
  >
    <v-slide-group
      class="h-100 py-4"
      show-arrows
      style="margin-left: -24px; margin-right: -24px"
    >
      <v-slide-group-item
        v-for="item in products"
        :key="item.title"
      >
        <!-- v-slot="{ isSelected, toggle, selectedClass }" -->
        <a :href="item.href" class="group-slider-card-link">
          <v-card class="mx-4 my-8 pa-4 group-slider-card" elevation="4" style="height: 100%">
            <img class="group-slider-item-img" :src="item.img" :alt="item.title" />
            <div class="group-slider-item-text">
              <b>{{ item.subtitle }}</b>
            </div>
            <div class="group-slider-item-text">
              {{ item.text }}
              <br />
              <div class="mt-2">
                <hc-button size="small" href="place-link" title="Read more" />
              </div>
            </div>
          </v-card>
        </a>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped>

.group-slider-wrapper {
  /* height: 500px; */
  height: 560px;
}

.group-slider-card-link {
  display: inline-block;
  /* height: 420px; */
  height: 480px;
}

/* Allow 3d view - image out of card */
.group-slider-card {
  overflow: unset;
  width: 260px;
  }


.group-slider-item-img {
  max-width: 240px;
  margin-top: -46px;
  transition: all .6s ease;
  -webkit-transition: all .6s ease;
}
@media screen and (max-width: 400px) {
  .group-slider-card {
    width: calc(100vw - 150px);
  }
  .group-slider-item-img {
    max-width: 100%;
  }
}

/* On hover zoom in image */
.group-slider-card-link:hover .group-slider-item-img {
  max-width: 250px;
  margin-top: -56px;
  margin-left: -5px;
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}

.group-slider-item-text {
  padding-top: 20px;
  line-height: 18px;
  font-size: 14px;
  text-align: justify;
}

</style>
