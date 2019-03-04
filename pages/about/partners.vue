<template>
  <!-- Main -->
  <main class="ywca-harbor about-partners">
    <!-- #aboutPartnersHero -->
    <div id="aboutPartnersHero" class="jumbotron">
      <div class="container">
        <h1 class="light">Our Partners</h1>
        <h3 class="light">
          We are deeply grateful to our partners, listed below, for their generous contributions of time,
          goods and funds.
          Together, we address complex issues and successfully leverage our resources to provide essential
          programming and services.
          With support from our partners, we can continue to fund existing programs, and create new services
          in response to emerging needs.
        </h3>
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
    <!-- #aboutPartnersHero -->
    <!-- #aboutPartnersStatement -->
    <div id="aboutPartnersStatement" class="container">
      <p>
        We exist to help families by rescuing victims,
        restoring lives, and reforming society.
      </p>
    </div>
    <!-- #aboutPartnersStatement -->
    <!-- #aboutPartnersCardGroup -->
    <div id="aboutPartnersCardGroup" class="container">
      <h1>Thank You to Our Partners</h1>
      <div class="card-group">
        <div class="card">
          <img
            src="https://yt3.ggpht.com/a-/AN66SAyUMQ-OJGrXdqTi5A8Jw_I2pO6L1C99jEbAlA=s900-mo-c-c0xffffffff-rj-k-no"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">Port of Los Angeles</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://kentico.portoflosangeles.org/getattachment/b23b1930-b00e-48a7-beb4-b0abb903b4ec/attachment.aspx"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">SA Recycling</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://cstoredecisions.com/wp-content/uploads/2018/07/Exxon-Mobil-logo-530x380-copy-696x532.jpg"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">Exxon Mobil</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <img
            src="data:image/png;base64,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"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">ION Television</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Marathon_Oil_logo_2009.svg/1200px-Marathon_Oil_logo_2009.svg.png"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">Marathon Petroleum</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.myminnesotabusiness.com/wp-content/uploads/2018/04/US-Bank-Logo.jpg"
            class="card-img-top"
          >
          <div class="card-body">
            <h4 class="card-title">US Bank</h4>
            <p class="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- #aboutPartnersCardGroup -->
    <!-- #aboutPartnersReviews -->
    <div id="aboutPartnersReviews" class="container">
      <h1>What Our Partners Think</h1>
      <div class="row">
        <div class="col">
          <p>
            “We are thrilled to be partnering with YWCA as we award our first grants to underprivelaged
            families. Through YWCA, we are able to support and empower those most vulnerable to help ease
            the challenges they face each day.”
            <br>
          </p>
          <p>President - Tesoro
            <br>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>
            &quot;We have witnessed first hand the good works that YWCA does in our community. We know our
            contribution is well spent and that all donations are used to help YWCA rebuild lives. We are
            behind them 100 percent.&quot;
            <br>
          </p>
          <p>Executive - Port of Los Angeles
            <br>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>
            &quot;As a long-time observer of YWCA activities, we have noticed not only the good deeds the
            organization performs, but how it conducts itself instinctively and resolutely, always taking
            the &#39;high&#39; road.&quot;
            <br>
          </p>
          <p>Director - US Bank
            <br>
          </p>
        </div>
      </div>
    </div>
    <!-- #aboutPartnersReviews -->
  </main>
  <!-- Main -->
</template>
