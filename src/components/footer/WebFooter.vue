<template>
  <footer>
    <div class="container border-top row gx-3">
      <div class="py-5 col-3">
        <img class="logo mb-5" src="@/assets/logo-alt.svg" alt="FoodNow" />
        <div>
          <h3 class="text-custom-primary">Find Us :</h3>
          <div class="socmed row">
            <a
              href="#"
              class="border border-custom-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style="width: 10px" src="@/assets/images/icons/facebook.svg" alt="" />
            </a>
            <a
              href="#"
              class="border border-custom-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style="width: 20px" src="@/assets/images/icons/instagram.svg" alt="" />
            </a>
            <a
              href="#"
              class="border border-custom-primary rounded-circle d-flex align-items-center justify-content-center mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style="width: 20px" src="@/assets/images/icons/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="py-5 col-3 row">
        <h3 class="text-custom-primary">Navigation</h3>
        <div class="col-6">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          <router-link class="nav-link active" aria-current="page" to="/">Order</router-link>
          <router-link class="nav-link active" aria-current="page" to="/">About</router-link>
          <router-link class="nav-link active" aria-current="page" to="/">Blog</router-link>
        </div>
        <div class="col-6">
          <router-link class="nav-link active" aria-current="page" to="/">Contact</router-link>
          <router-link class="nav-link active" aria-current="page" to="/">Login</router-link>
          <router-link class="nav-link active" aria-current="page" to="/">Register</router-link>
        </div>
      </div>
      <div class="py-5 col-3 row">
        <h3 class="text-custom-primary">Contact</h3>
        <div class="col-12">
          <ul>
            <li>
              <i class="fa-regular fa-envelope text-custom-primary me-2"></i>
              <a href="mailto:food.now@mail.com" class="text-dark text-decoration-none"
                >Food.now@mail.com</a
              >
            </li>
            <li>
              <i class="fa-regular fa-bell text-custom-primary me-2"></i>
              <a href="tel:0848477102943" class="text-dark text-decoration-none">+62848477102943</a>
            </li>
            <li>
              <i class="fa-brands fa-whatsapp text-custom-primary me-2"></i>
              <a
                href="https://wa.me/08184938494"
                class="text-dark text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                >+628184938494</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="py-5 col-3">
        <h3 class="text-custom-primary">Location</h3>
        <div class="col-12">
          <a
            href="https://maps.app.goo.gl/ouYiaK3YZsQS2EiB9"
            class="text-dark text-decoration-none"
          >
            <i class="fa-regular fa-building me-2"></i>
            <b>Kerobokan</b>
            <p>
              Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
              Badung, Bali 80361
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="container border-top row py-4">
      <p class="text-center mb-0">
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy
        Policy
      </p>
      <p class="text-center mb-0">
        <small>
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
          apply.
        </small>
      </p>
    </div>
  </footer>
</template>

<script setup></script>
