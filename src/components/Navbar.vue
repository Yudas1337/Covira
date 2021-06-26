<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#home">
        <img src="assets/img/logo/logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-scroll
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="las la-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home" data-scroll>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#live-data" data-scroll>COVID-19</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#maps" data-scroll>Maps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#chart" data-scroll>Chart</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>