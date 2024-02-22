<script lang="ts">

export default {
  // name: 'ContentHeader',
  props: {
    src: { type: String, required: true, default: "/img/HAD_banner_960_3.jpg" },
    srcset: { type: String, default: "/img/HAD_banner_1280_5.jpg 960w, /img/HAD_banner_1920_1.jpg 1280w" },
    alt: { type: String, default: "Header image" },
    // height: { type: String, default: "400px" },
  },
  data() {
    return {
      // item: null,
    }
  },
  // watch: {
  //   variableName: function(after, before) {
  //     console.log(after);
  //   },
  // },
  mounted() {
    // const headerImage = document.getElementById('header-reserve');
    // console.log(headerImage);

    const headerImageObs = document.getElementById('header-image')
    if (headerImageObs) {
      const resizeObserver = new ResizeObserver(() => {
        const headerImageElem = document.getElementById('header-image')
        const headerReserveElem = document.getElementById('header-reserve')

        if (headerImageElem && headerReserveElem) {
          // if (headerImageElem.clientHeight < 250) {
          //   headerImageElem.style.minHeight = '250px';
          // }
          headerReserveElem.style.height = `${headerImageElem.clientHeight > 250 ? headerImageElem.clientHeight : 250}px`;
          console.log(`Size changed: ${ headerImageElem ? headerImageElem.clientHeight : 0} ${ headerReserveElem.style.height }`);
        }
      });
      resizeObserver.observe(headerImageObs);
    }
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <div class="content-header-block">
    <!-- <div class="content-header-wrapper content-header-screen-size"> -->
    <div class="content-header-wrapper">
      <v-img id="header-image" class="content-header-img-wrapper" content-class="content-header-img" :src="src" :srcset="srcset" :alt="alt"></v-img>
    </div>
    <div id="header-reserve" class="content-header-reserve"></div>
  </div>
</template>

<style scoped>

.content-header-block {
  display: block;
  /* position: fixed; */
  padding-top: 0px !important;
  /* margin-top: -50px !important; */
}

.content-header-wrapper {
  width: 100vw;
}

.content-header-img {
  object-fit: fill !important;
}

.content-header-img-wrapper {
  z-index: -1;
  padding-top: 0px;
  position: fixed;
  width: 100vw;
  max-width: 100%;
  min-height: 250px;
  box-shadow: inset 0px -3px 5px rgba(0, 0, 0, 0.1);
}

.content-header-reserve {
  display: block;
  /* z-index: 1; */
  width: 100%;
  min-height: 250px;
  height: 250px;
  /* background-color: rgb(255, 255, 255) !important; */
}

</style>
