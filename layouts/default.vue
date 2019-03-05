<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from "./partials/nav";

export default {
  components: {
    Nav
  },
  mounted() {
    this.$store.dispatch("events/getEvents");
    this.$store.dispatch("opportunities/getOpportunities");
  }
};
</script>
