<script lang="ts">
// import { VPTeamMembers } from 'vitepress/theme'

export default {
//   components: {
//     VPTeamMembers
//   },
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: this.products ? this.products : [],
    }
  },
  computed: {
    // apply one of the class from group-slider-1-items to group-slider-6-items
    // based on length of products array
    sliderNumItemsClass() {
      if (this.products && this.products.length && this.products.length > 1) {
        if (this.products.length > 6) {
          return `group-slider-${6}-items`
        } else {
          return `group-slider-${this.products.length}-items`
        }
      } else {
        return `group-slider-${1}-items`
      }
    },
    sliderClasses() {
      return { 'group-slider': true,  [this.sliderNumItemsClass]: true}
    },
  },
}
</script>

<template>
  <!-- TODO: make this to work with different number of items -->
  <div :class="sliderClasses">
    <a v-for="item in items" :key="item.title" :href="item.href" class="group-slider-card-item">
      <v-card class="pa-4 group-slider-card" elevation="1" style="height: 100%">
        <!-- <div class="group-slider-item-title">{{ item.title }}</div> -->
        <img class="group-slider-item-img" :src="item.img" :alt="item.title" />
        <div class="group-slider-item-text">
          {{ item.text }}
        </div>
      </v-card>
    </a>
  </div>
</template>

<style scoped>

.group-slider {
    /* box-sizing: border-box; */
	/* background-color: #0E1318; */
	/* width: 500px; */
	height: 380px;

	overflow-x: scroll;
	overflow-y: hidden;

	display: grid;
	/* grid-template-columns: repeat(6, auto); */
    /* grid-template-columns: auto; */
	grid-gap: 0 40px;

	padding: 30px 60px;
	padding-right: 0;

	margin: 0 auto;
	border-radius: 10px;
}

.group-slider {
	padding-right: 40px !important;
}
.group-slider-1-items {
	grid-template-columns: repeat(1, auto);
}

.group-slider-2-items {
	grid-template-columns: repeat(2, auto);
}

.group-slider-3-items {
	grid-template-columns: repeat(3, auto);
}

.group-slider-4-items {
	grid-template-columns: repeat(4, auto);
}

.group-slider-5-items {
	grid-template-columns: repeat(5, auto);
}

.group-slider-6-items {
	grid-template-columns: repeat(6, auto);
}

.group-slider::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
}

.group-slider {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.group-slider-card-item {
    display: inline-block;
    box-sizing: border-box;
    /* background-color: rgb(238, 238, 238); */
    /* padding: 15px 15px 10px 15px; */
    height: 330px;
    width: 260px;
    border-radius: 5px;
}

.group-slider-card {
    overflow: unset;
}

.group-slider-item {
    display: inline-block;
    box-sizing: border-box;
    background-color: rgb(238, 238, 238);
    padding: 15px 15px 10px 15px;
    height: 320px;
    width: 250px;
    border-radius: 5px;
}

.group-slider-item-title {
    display: flex;
    /* width: 250px; */
    justify-content: center;
    line-height: 24px;
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto;
    margin-bottom: 12px;
}

.group-slider-item-img {
  max-width: 220px;
  margin-top: -36px;
  transition: all .6s ease;
  -webkit-transition: all .6s ease;
}

.group-slider-item-img:hover {
  max-width: 230px;
  margin-top: -46px;
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
