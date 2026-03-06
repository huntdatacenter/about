<script lang="ts">
export default {
  props: {
    title: { type: String, required: true, default: "Title" },
    subtitle: { type: String, required: false, default: "" },
    text: { type: String, required: true, default: "" },
    href: { type: String, required: false, default: "" },
    link: { type: Boolean, required: false, default: false },
    image: { type: String, required: false, default: "" },
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
    console.log("mounted")
  },
  computed: {
    // TODO
  },
  methods: {
    hoverIcon(isHovering: Boolean) {
      return isHovering ? "mdi-chevron-triple-right" : "mdi-chevron-right"
    },
  },
}
</script>

<template>
  <v-col cols="12" class="v-col-sm-12 v-col-md-6 align-self-stretch">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card
          v-bind="props"
          class="card-element h-100"
          color="#3E628A"
          variant="tonal"
          :href="href"
          :link="link ? true : false"
          :append-icon="link ? (isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right') : ''"
        >
          <v-card-text>
            <img v-if="image" :src="image" :alt="title" class="card-element-image" />
            <h3 class="card-element-title">{{ title }}</h3>
            <p v-if="subtitle" class="card-element-subtitle">{{ subtitle }}</p>
            <div class="card-element-text">{{ text }}</div>
          </v-card-text>
          <template v-slot:append>
            <v-icon color="#ef8114" style="margin-top: 1px !important"></v-icon>
          </template>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>

<style scoped>
.card-element {
  border-radius: 20px !important;
  background: #e0e0e0;
  padding: 10px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
  height: 100%;
}

.card-element:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(62, 98, 138, 0.3) !important;
}

.card-element-image {
  display: block;
  margin: 0 auto 20px;
  height: 150px;
  width: auto;
  object-fit: contain;
}

.card-element-title {
  color: #253a55;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
}

.card-element-subtitle {
  color: #555;
  font-size: 1rem;
  margin-bottom: 10px;
}

.card-element-text {
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 719px) {
  .card-element-image {
    height: 120px;
  }
}
</style>
