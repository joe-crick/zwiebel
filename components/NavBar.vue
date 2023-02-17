<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~/assets/zwiebel-logo.png" class="zwiebel-logo" />
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.zwiebel-logo {
  height: 120px;
}
.navbar {
  background-color: transparent;
  .navbar-item > img.zwiebel-logo {
    max-height: max-content;
  }
}
</style>
