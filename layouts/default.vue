<template>
  <div class="topbar">
    <div class="container">
      <NavBar />
    </div>
  </div>
  <div class="container mt-5">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
 @import "./assets/styles/variables.scss"; 
.topbar {
  background-color: $z-brown;
  min-height: 120px;;
}
</style>
