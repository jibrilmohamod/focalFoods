<template>
 <div class="">
  <!-- <div class="flex-col flex gap-2">
   <TheNav />
   <TheHero />
  </div> -->
  <TheHero2 />
  <!-- <TheBanner /> -->
  <div>
   <ui-comp
    header="Your Daily Dose Of Honey"
    paragraph=" Experience the taste of Kenya with Focal Foods' Honey – golden, creamy, and
   packed with the goodness of Kenyan superfoods. Beyond sweet, it's a health
   elixir rich in nutrients and antioxidants. Bee well with every drop – good
   for you, good for the bees. Elevate your honey game with Focal Foods."
   >
    <template #image>
     <div
      class="h-64 md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out"
      v-animateonscroll="{
       enterClass: 'fadeinleft',
       leaveClass: 'fadeoutleft',
      }"
     >
      <NuxtImg
       provider="cloudinary"
       src="v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg"
       format="webp"
       sizes="xl:100vw"
       class="w-full h-full object-cover rounded-xl"
       :modifiers="{ effect: 'colorize:20', color: 'black' }"
      />
     </div>
    </template>

    <template #image2>
     <div
      class="w-full px-2 flex gap-2"
      data-aos="fade-up"
      data-aos-duration="1000"
     >
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100px md:50vw lg:600px"
       provider="cloudinary"
       src="v1700049462/wooden-honey-dipper-with-dripping-honey_cvb4s2.jpg"
       class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
      />
      <NuxtImg
       loading="lazy"
       format="webp"
       alt="image"
       :modifiers="{ effect: 'colorize:10', color: 'black' }"
       sizes="sm:100vw md:50vw lg:800px"
       provider="cloudinary"
       src="v1700048068/front-view-honey-jar-with-wooden-spoon-green-grapes-wooden-background_rjjbnq.jpg"
       class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
      />
     </div>
    </template>

    <template #button>
     <div class="py-6">
      <button class="px-10 bg-amber-200 py-3 w-fit">
       <nuxt-link to="/products" class="text-xl text-black font-Josefinsans">
        About Us
       </nuxt-link>
      </button>
     </div>
    </template>
   </ui-comp>

   <TheProducts />
  </div>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
