<template>
<div class="bg-main-black">
  <!-- --------------------------------------------------------Portada -->
  <!-- --------------------------------------------------------Portada -->
<section class="w-screen h-screen">
  <div id="fondo" class="absolute top-0 left-0 z-0 h-full"></div>
<div class="z-10 relative py-16 flex-col flex items-center justify-center w-screen h-screen">
  <h4 class="font-josefin font-thin text-white text-1xl md:text-4xl mb-0 md:mb-11"><i>Interactive Media Designer</i></h4>
  <h2 class="h2-banner mt-7 md:mt-11 lg:mt-14">David</h2>
  <img class="w-1/5 md:w-1/12" src="~/assets/img/logo.svg" alt="">
  <h2 class="h2-banner">Luan</h2></div>
</section>
<!-- ---------------------- -->

<!-- ------------------------------------------------------------- Who I am? -->
<section class="bg-main-black relative px-6">
<img class="dots absolute z-0" src="~/assets/img/background/dots.svg" alt="deco">
<img class="w-8/12 lg:w-3/12 z-10 relative" src="~/assets/img/me.png" alt="">
<div></div>
</section>
</div>
</template>

<script>
export default {}
</script>
<style scoped>
img {
  margin: 72px 0
}
.h2-banner {
  @apply text-white font-josefin font-bold text-5xl md:text-8xl lg:text-9xl text-center tracking-min-wide lg:tracking-max-wide;
}
.dots {
  margin: 0 !important;
  top: -240px;
  left: -90px;
  width: 200%;
  @media screen(lg) {
    width: 50%;
    left: unset;
    
  }
}
#fondo {
  @apply bg-photo bg-no-repeat bg-contain lg:bg-cover;
    transform: rotate(270deg);
    width: 100vh;
  @media screen(lg) {
    transform: rotate(00deg);
    width: 100vw;
  }
}
</style>
