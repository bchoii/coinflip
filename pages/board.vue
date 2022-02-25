<template>
  <div>
    <div class="background"></div>
    <div class="fullscreen centered">
      <div>
        <h3>Board</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url(https://aeroland.vuejstemplate.com/img/aeroland-digital-store-hero-bg-reup.41ea79d9.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.fullscreen {
  height: 100vh;
}

.centered {
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 100%;
}

h3 {
  font-size: 20px;
}
</style>
