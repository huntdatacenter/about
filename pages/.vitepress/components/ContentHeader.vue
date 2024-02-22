<script lang="ts">

export default {
  // name: 'ContentHeader',
  props: {
    // title: { type: String, default: null },
    // subtitle: { type: String, default: null },
    img: { type: String, required: true },
    height: { type: String, default: "400px" },
  },
  data() {
    return {
      imgSrc: this.img,
    }
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <div class="content-header-block">
    <div class="content-header-wrapper">
      <v-img class="content-header-img" :style="`height: ${height}; background-image: url('${imgSrc}');`"></v-img>
    </div>
    <div class="content" :style="`height: ${height};`">

    </div>
  </div>
</template>

<style scoped>

.content-header-block {
  display: block;
  /* position: fixed; */
  padding-top: 0px !important;
  margin-top: -50px !important;
}

.content-header-wrapper {
  width: 100vw;
  padding-top: 0px;
  /* position: fixed; */
  /* margin-bottom: 64px; */
}

.content {
  display: block;
  /* z-index: 1; */
  width: 100%;
  height: 250px;
  /* background-color: rgb(255, 255, 255) !important; */
}

.content-header-img {
  /* z-index: 9999; */
  z-index: -1;
  padding-top: 0px;
  /* position: absolute; */
  /* max-width: 100%; */
  position: fixed;
  /* background-attachment: fixed; */
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #004c7b;
  width: 100vw;
  max-width: 100%;
  /* height: 400px; */
  object-fit: fill;
  margin: 0 auto !important;
  box-shadow: inset 0px -3px 5px rgba(0, 0, 0, 0.1);
}

</style>
