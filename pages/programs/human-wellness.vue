<template>
  <!-- Main -->
  <main class="ywca-harbor programs-human-wellness">
    <!-- #programsHWHero -->
    <div id="programsHWHero" class="jumbotron">
      <div class="container">
        <h1 class="light">Human Wellness</h1>
        <h3 class="light">Something nice to say about services offered</h3>
        <div class="button-group">
          <a href="#" class="social-icon round-primary">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon round-primary">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- #programsHWHero -->
    <!-- #programsHWContent -->
    <div id="programsHWContent" class="container">
      <div class="row">
        <div id="HWTabsWrapper" class="col-md-4 col-sm-12">
          <h3>Health Programs</h3>
          <div
            class="nav flex-column nav-pills"
            id="HWTabs"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active show"
              id="cardio-tab"
              data-height="true"
              data-toggle="pill"
              href="#cardio"
              role="tab"
              aria-controls="cardio"
              aria-selected="true"
            >Cardio Fitness</a>
            <a
              class="nav-link"
              id="mammograms-tab"
              data-height="true"
              data-toggle="pill"
              href="#mammograms"
              role="tab"
              aria-controls="mammograms"
              aria-selected="false"
            >Mammograms</a>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="tab-content" id="HWTabContent">
            <div class="tab-pane active" id="cardio" role="tabpanel" aria-labelledby="cardio-tab">
              <p>
                Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam
                sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit
                sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum
                dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt
                non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.
              </p>
            </div>
            <div class="tab-pane" id="mammograms" role="tabpanel" aria-labelledby="mammograms-tab">
              <p>
                Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur
                mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et
                minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia
                excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat
                dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Main -->
</template>

<script>
export default {
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
