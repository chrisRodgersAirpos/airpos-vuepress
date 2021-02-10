<template>
  <div class="container header">
    <div class="row">
      <div class="col-lg-4">
        <nuxt-link :to="`/`">
          <img
            class="d-flex align-items-center w-100 header--logo"
            src="~/assets/header-logo.jpg"
          />
        </nuxt-link>
      </div>
      <div
        class="col-lg-8 header_nav d-flex align-items-center justify-content-end"
      >
        <ul>
          <li>Features</li>
          <li>Industries</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Community</li>
          <li>Help</li>
        </ul>
        <ul>
          <li>Login</li>
          <li>
            <button class="header_nav--contact">Contact Us</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
