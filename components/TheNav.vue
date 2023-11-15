<template>
 <div
  class="w-full bg-[#000] rounded-xl px-5 flex items-center justify-between py-3"
 >
  <!-- hambuger menu -->
  <button class="outline outline-1 w-10" @click="toggleMobileNav()">
   <Icon name="ic:sharp-menu" class="text-2xl text-[#F3E7D0]" />
  </button>

  <nuxt-link to="/">
   <h1 class="text-[#F3E7D0] font-Josefinsans text-xl uppercase pt-2">
    Focal Foods
   </h1>
  </nuxt-link>
  <button class="w-10">
   <Icon name="ic:outline-shopping-cart" class="text-2xl text-[#F3E7D0]" />
  </button>
  <div class="absolute top-0 left-0">
   <transition
    mode="out-in"
    enter-to-class="animate__animated animate__fadeInRight"
    leave-to-class="animate__animated animate__fadeOutRight"
   >
    <MobileNav v-if="showMobile" @toggleMobileNav="toggleMobileNav()" />
   </transition>
  </div>
 </div>
</template>

<script setup>
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<style lang="scss" scoped></style>
