<template>
  <main class="ywca-harbor get-involved-opportunities-post">
    <div v-if="err" class="container">
      <h1>Oh no</h1>
    </div>
    <div v-else class="container">
      <h2>{{ opportunity.jobTitle || opportunity.volunteerTitle }}</h2>
      <p>{{ opportunity.jobDescription || opportunity.volunteerRole }}</p>
      <div v-html="opportunity.volunteerRequirements"></div>
      <div v-html="opportunity.jobRequirements"></div>
      <div v-html="opportunity.jobResponsibilities"></div>
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
  async asyncData({ params }) {
    try {
      let res = await axios.get(
        `https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/employmentOpportunities/en-US/${
          params.id
        }.json`
      );
      if (res.data === null) {
        res = await axios.get(
          `https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/volunteerOpportunities/en-US/${
            params.id
          }.json`
        );
      }
      if (res.data === null) {
        return { err: true };
      }
      const opportunity = res.data;
      return { opportunity, err: false };
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
};
</script>
