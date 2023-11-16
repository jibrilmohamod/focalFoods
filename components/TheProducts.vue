<template>
 <div
  class="pt-8 pl-6 pr-3 md:px-2 pb-4 md:container md:m-auto md:pt-16 md:flex md:gap-x-6 2xl:px-0 outline mb-10 flex-col flex"
 >
  <!-- header  -->
  <div class="flex items-center justify-between md:justify-normal md:gap-10">
   <h5
    class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#BF926B] w-fit md:text-lg"
    id="p"
   >
    Bee well with every drop
   </h5>
   <div
    class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5"
   ></div>
  </div>
  <div class="py-4">
   <h4
    class="text-[40px] font-semibold leading-tight md:text-5xl md:font-[600] md:leading-[60px] md:tracking-wider 2xl:text-6xl font-Josefinsans"
   >
    Our Store
   </h4>
  </div>

  <!-- body -->
  <div>
   <p
    class="font-jost text-base tracking-wide text-black 2xl:w-3/4 2xl:pb-7 md:w-1/2"
   >
    Experience the taste of Kenya with Focal Foods' Honey – golden, creamy, and
    packed with the goodness of Kenyan superfoodChoose from our range of
    products below.
   </p>
  </div>

  <!-- product card  -->

  <Card
   :pt="{
    root: 'outline outline-1 outline-[#BF926B] px-0',
    title:
     'text-2xl font-semibold text-black font-Josefinsans text-red-500 outline',
   }"
  >
   <template #title> You are a freak </template>
  </Card>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
