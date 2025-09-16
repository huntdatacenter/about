<script lang="ts">
import { data } from "../data/dataControllers.data.ts"

export default {
  // name: 'ViewDataControllers',
  props: {
    // title: { type: String, required: true, default: "Title" },
  },
  data() {
    return {
      dataControllers: data.dataControllers,
      country: "Norway",
      institution: null,
      faculty: null,
      department: null,
    }
  },
  watch: {
    faculty: function (after, before) {
      if (!this.hasMultipleDepartments && this.hasDepartments) {
        this.department = this.getDepartments[0]
      }
    },
    institution: function (after, before) {
      if (!this.hasMultipleFaculties && this.hasFaculties) {
        this.faculty = this.getFaculties[0]
      }
    },
  },
  mounted() {
    console.log(data.dataControllers)
  },
  computed: {
    getCountries() {
      return data.dataControllers
        ? data.dataControllers
            .map(item => {
              return item.country
            })
            .filter(this.onlyUnique)
        : []
    },
    getInstitutions() {
      return data.dataControllers
        ? data.dataControllers
            .filter(item => {
              return item.country == this.country
            })
            .map(item => {
              return item.institution
            })
            .filter(item => (item ? true : false))
            .filter(this.onlyUnique)
        : []
    },
    getFaculties() {
      return data.dataControllers
        ? data.dataControllers
            .filter(item => {
              return item.institution == this.institution
            })
            .map(item => {
              return item.faculty
            })
            .filter(item => (item ? true : false))
            .filter(this.onlyUnique)
        : []
    },
    hasFaculties() {
      return this.getFaculties && this.getFaculties.length > 0 ? true : false
    },
    hasMultipleFaculties() {
      return this.getFaculties && this.getFaculties.length > 1 ? true : false
    },
    getDepartments() {
      return data.dataControllers
        ? data.dataControllers
            .filter(item => {
              return item.institution == this.institution && item.faculty == this.faculty
            })
            .map(item => {
              return item.department
            })
            .filter(item => (item ? true : false))
            .filter(this.onlyUnique)
        : []
    },
    hasDepartments() {
      return this.getDepartments && this.getDepartments.length > 0 ? true : false
    },
    hasMultipleDepartments() {
      return this.getDepartments && this.getDepartments.length > 1 ? true : false
    },
    isSignedInstitution() {
      if (this.hasDepartments && this.department && this.institution) {
        return true
      } else if (!this.hasDepartments && this.hasFaculties && this.faculty && this.institution) {
        return true
      } else if (!this.hasDepartments && !this.hasFaculties && this.institution) {
        return true
      } else {
        console.log(`Departments: ${this.hasDepartments} ${this.department}`)
        console.log(`Faculties: ${this.hasFaculties} ${this.faculty}`)
        console.log(`Institution: ${this.institution}`)
        return false
      }
    },
    result() {
      return this.isSignedInstitution
        ? "Yes, we have signed an agreement with your institution"
        : "Haven't found your institution? Contact us"
    },
  },
  methods: {
    onlyUnique(value, index, array) {
      return array.indexOf(value) === index
    },
  },
}
</script>

<template>
  <div class="content-header-block">
    <!-- {{ dataControllers }} -->
    <!-- <v-autocomplete
      v-model="country"
      label="Country"
      :items="getCountries"
    ></v-autocomplete> -->
    <v-autocomplete v-model="institution" label="Institution" :items="getInstitutions"></v-autocomplete>
    <v-autocomplete
      v-if="hasMultipleFaculties"
      v-model="faculty"
      label="Faculty"
      :items="getFaculties"
    ></v-autocomplete>
    <v-autocomplete
      v-if="hasMultipleDepartments"
      v-model="department"
      label="Department"
      :items="getDepartments"
    ></v-autocomplete>
    {{ result }}
  </div>
</template>

<style scoped></style>
