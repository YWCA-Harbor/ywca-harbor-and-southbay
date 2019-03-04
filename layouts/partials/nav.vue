<template>
  <!-- Header -->
  <header>
    <div id="slanted-header">
      <input type="checkbox">
      <div class="logo-box">
        <nuxt-link to="/">
          <img class="logo-animation" src="/img/ywca-eliminate.png" alt="eliminating racism">
          <img class="logo-animation" src="/img/ywca-empower.png" alt="empowering women">
          <img class="main-logo-animation" src="/img/ywca-main.png" alt="YWCA">
        </nuxt-link>
      </div>
      <div class="logo-box logo-box-white">
        <nuxt-link to="/">
          <img
            class="main-logo-animation"
            src="/img/ywca-area-white.png"
            alt="South Bay &amp; Harbor Area"
          >
        </nuxt-link>
      </div>
      <div class="mobile-line"></div>
      <div class="menu-box"></div>
      <div class="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="ham-menu-text">MENU</div>
      <div class="menu-options-wrapper">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="nav-dropdown about">
            <nuxt-link to="/about/history">About</nuxt-link>
            <div>
              <nuxt-link to="/about/history">Our History</nuxt-link>
              <nuxt-link to="/about/mission">Our Mission</nuxt-link>
              <nuxt-link to="/about/partners">Our Corporate Partners</nuxt-link>
              <nuxt-link to="/about/team">Staff &amp; Board of Directors</nuxt-link>
            </div>
          </li>
          <li class="nav-dropdown services">
            <nuxt-link to="/programs/racial-justice">Programs</nuxt-link>
            <div>
              <nuxt-link to="/programs/racial-justice">Racial Justice</nuxt-link>
              <nuxt-link to="/programs/human-wellness">Human Wellness</nuxt-link>
              <nuxt-link to="/programs/seasonal">Holiday Programs</nuxt-link>
              <nuxt-link to="/programs/thrift-store">Thrift Store</nuxt-link>
              <nuxt-link to="/programs/child-care">Child Care</nuxt-link>
            </div>
          </li>
          <li class="nav-dropdown get-involved">
            <nuxt-link to="#">Get Involved</nuxt-link>
            <div>
              <nuxt-link to="/get-involved/events">Events</nuxt-link>
              <nuxt-link to="/get-involved/opportunities">Volunteer &amp; Opportunities</nuxt-link>
              <nuxt-link to="https://donorbox.org/ywca-harbor-area-south-bay-donations">
                Membership &amp;
                Donations
              </nuxt-link>
            </div>
          </li>
          <li>
            <nuxt-link to="/contact-us">Contact Us</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="donate-button">
        <nuxt-link
          to="https://donorbox.org/ywca-harbor-area-south-bay-donations"
          class="btn btn-primary"
        >Donate</nuxt-link>
      </div>
    </div>
  </header>
  <!-- Header -->
</template>
