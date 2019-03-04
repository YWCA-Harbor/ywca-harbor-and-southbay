<template>
  <!-- Main -->
  <main class="ywca-harbor index">
    <!-- #indexHero -->
    <div id="indexHero" class="jumbotron">
      <div class="container">
        <h1 class="light">Your Support Changes Lives</h1>
        <h3 class="light">Read our stories and learn more</h3>
        <a href="#" class="btn btn-primary">Learn More</a>
      </div>
    </div>
    <!-- #indexHero -->
    <!-- #indexStatement -->
    <div id="indexStatement" class="container">
      <p>
        We are more than a nonprofit organization.
        We are a ministry of service that includes nearly 16,000 paid,
        professional employees dedicated to helping those in need
        rebuild their lives and reach their full potential.
      </p>
    </div>
    <!-- #indexStatement -->
    <!-- #indexCardGroup -->
    <div id="indexCardGroup" class="container">
      <div class="card-group">
        <div class="card">
          <img
            class="card-img-top"
            src="https://image.shutterstock.com/image-vector/abstract-geometric-white-gray-color-450w-1147435787.jpg"
            alt="Whoa"
          >
          <div class="card-body">
            <h4 class="card-title">Child Education</h4>
            <p class="card-text">
              We promote open communication between home and school,
              a partnership in learning. Above all, the YWCA child care programs
              are committed to providing a safe, quality and nurturing environment for children and
              parents.
            </p>
          </div>
          <a href="/pages/children/services.html" class="btn btn-primary">Start Planning</a>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://image.shutterstock.com/image-vector/abstract-geometric-white-gray-color-450w-1147435787.jpg"
            alt="Whoa"
          >
          <div class="card-body">
            <h4 class="card-title">Racial Justice</h4>
            <p class="card-text">
              The goal is to create greater awareness of racial and social injustices
              and provide the community with the knowledge to affect negative attitudes and behaviors.
              In addition, we’re committed in the fight against human trafficking, exploitation and
              modern-day slavery
              through partnerships with local organizations and programs.
            </p>
          </div>
          <a href="/pages/programs/racial-justice.html" class="btn btn-primary">See Our Work</a>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://image.shutterstock.com/image-vector/abstract-geometric-white-gray-color-450w-1147435787.jpg"
            alt="Whoa"
          >
          <div class="card-body">
            <h4 class="card-title">Our History</h4>
            <p class="card-text">
              The YWCA of the Harbor Area and South Bay, despite many modifications over the years,
              retains the comfort and charm of Julia Morgan’s original design. After more than one
              hundred years
              of continuous use by the YWCA, the building still provides services to women and children
              in the community
              as originally intended.
            </p>
          </div>
          <a href="/pages/about/history.html" class="btn btn-primary">Read Our History</a>
        </div>
      </div>
    </div>
    <!-- #indexCardGroup -->
    <!-- #indexCarousel -->
    <div id="indexCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="caption">
            <h2 class="light">210</h2>
            <h2 class="light">associations</h2>
            <h3 class="light">nationwide</h3>
          </div>
        </div>
        <div class="carousel-item">
          <div class="caption">
            <h2 class="light">2</h2>
            <h2 class="light">million</h2>
            <h3 class="light">served</h3>
          </div>
        </div>
        <div class="carousel-item">
          <div class="caption">
            <h2 class="light">160</h2>
            <h2 class="light">years</h2>
            <h3 class="light">of service</h3>
          </div>
        </div>
      </div>
      <div>
        <a class="carousel-control-prev" href="#indexCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#indexCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- #indexCarousel -->
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
