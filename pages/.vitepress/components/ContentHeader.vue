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
    // const headerImage = document.getElementById('header-image');
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
          // console.log(`Size changed: ${ headerImageElem ? headerImageElem.clientHeight : 0} ${ headerReserveElem.style.height }`);
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
    <div class="content-header-wrapper">
      <v-img id="header-image" class="content-header-img-wrapper" :src="src" :srcset="srcset" :alt="alt" cover></v-img>
    </div>
    <div id="header-reserve" class="content-header-reserve"></div>
  </div>
</template>

<style scoped>

.content-header-block {
  display: block;
  padding-top: 0px !important;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.15);
}

.content-header-wrapper {
  width: 100vw;
}

.content-header-img-wrapper {
  z-index: -1;
  padding-top: 0px;
  position: fixed;
  width: 100vw;
  max-width: 100%;
  min-height: 250px;
}

.content-header-reserve {
  display: block;
  /* z-index: 1; */
  width: 100%;
  min-height: 250px;
  height: 250px;
}

</style>
