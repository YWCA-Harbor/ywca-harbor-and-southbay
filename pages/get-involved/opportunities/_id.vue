<template>
  <main class="ywca-harbor get-involved-opportunities-post">
    <div v-if="getEmployees" class="container">
      <h2>{{ getEmployees.jobTitle}}</h2>
      <p>{{ getEmployees.jobDescription}}</p>
      <div v-html="getEmployees.jobRequirements"></div>
      <div v-html="getEmployees.jobResponsibilities"></div>
    </div>
    <div v-else-if="getVolunteers" class="container">
      <h2>{{ getVolunteers.volunteerTitle }}</h2>
      <p>{{ getVolunteers.volunteerRole }}</p>
      <div v-html="getVolunteers.volunteerRequirements"></div>
    </div>
    <div v-else class="container">
      <h1>Oh no</h1>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  computed: {
    getEmployees() {
      const { employment } = this.$store.state.opportunities;
      const urlPath = this.$nuxt._route.params.id;
      return employment[urlPath];
    },
    getVolunteers() {
      const { volunteer } = this.$store.state.opportunities;
      const urlPath = this.$nuxt._route.params.id;
      return volunteer[urlPath];
    }
  }
};
</script>
