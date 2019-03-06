<template>
  <!-- Main -->
  <main class="ywca-harbor get-involved-opportunities">
    <!-- #opportunitiesHero -->
    <div id="opportunitiesHero" class="jumbotron">
      <div class="container">
        <h1 class="light">Scause for a Cause</h1>
        <h3 class="light">We're looking for go-getters, idea-chasers, and it-can-be-doners.</h3>
      </div>
    </div>
    <!-- #opportunitiesHero -->
    <!-- #opportunitiesContent -->
    <div id="opportunitiesContent" class="container">
      <div class="row">
        <div id="OpportunitiesTabsWrapper" class="col-md-4 col-sm-12">
          <h3>Open Opportunities</h3>
          <div
            class="nav flex-column nav-pills"
            id="OpportunitiesTabs"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active show"
              id="employment-tab"
              data-height="true"
              data-toggle="pill"
              href="#employment"
              role="tab"
              aria-controls="employment"
              aria-selected="true"
            >Employment</a>
            <a
              class="nav-link"
              id="volunteer-tab"
              data-height="true"
              data-toggle="pill"
              href="#volunteer"
              role="tab"
              aria-controls="volunteer"
              aria-selected="false"
            >Volunteer</a>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="tab-content" id="OpportunitiesTabContent">
            <div
              class="tab-pane active"
              id="employment"
              role="tabpanel"
              aria-labelledby="employment-tab"
            >
              <nuxt-link
                v-for="opportunity in getEmployees"
                tag="a"
                :key="opportunity.id"
                :to="`/get-involved/opportunities/${opportunity.id}`"
                v-bind="opportunity"
              >{{ opportunity.jobTitle }}</nuxt-link>
            </div>
            <div class="tab-pane" id="volunteer" role="tabpanel" aria-labelledby="volunteer-tab">
              <nuxt-link
                v-for="opportunity in getVolunteers"
                tag="a"
                :key="opportunity.id"
                :to="`/get-involved/opportunities/${opportunity.id}`"
                v-bind="opportunity"
              >{{ opportunity.volunteerTitle }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Main -->
</template>

<script>
import axios from "axios";

export default {
  computed: {
    getEmployees() {
      const { employment } = this.$store.state.opportunities;
      return employment;
    },
    getVolunteers() {
      const { volunteer } = this.$store.state.opportunities;
      return volunteer;
    }
  },
  mounted: function() {
    // Import scripts
    let bsPoly = document.createElement("script");
    let bsNative = document.createElement("script");
    let bundleScript = document.createElement("script");
    bundleScript.setAttribute("src", "/vendors.min.js");
    bsPoly.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/polyfill.min.js"
    );
    bsNative.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/bootstrap-native-v4.min.js"
    );
    document.body.appendChild(bsPoly);
    document.body.appendChild(bsNative);
    document.body.appendChild(bundleScript);
  },
  destroyed: function() {
    let bsPoly = document.querySelector(
      'script[src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/polyfill.min.js"'
    );
    let bsNative = document.querySelector(
      'script[src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/bootstrap-native-v4.min.js"'
    );
    let bundleScript = document.querySelector('script[src="/vendors.min.js"');

    bsPoly.remove();
    bsNative.remove();
    bundleScript.remove();
  }
};
</script>
