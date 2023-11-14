<template>
 <div
  class="w-full bg-[#000] rounded-xl px-2 flex items-center justify-between py-3"
 >
  <!-- hambuger menu -->
  <button
   class="h-10 flex items-center w-10 justify-center rounded-full bg-slate-300"
  >
   <Icon name="ic:sharp-menu" class="text-2xl" />
  </button>

  <nuxt-link to="/">
   <h1 class="text-white font-Libre text-2xl uppercase">Focal Foods</h1>
  </nuxt-link>
  <button
   class="h-10 flex items-center w-10 justify-center rounded-full bg-slate-300"
  >
   <Icon name="ic:outline-shopping-cart" class="text-2xl" />
  </button>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
