// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 css: ["~/assets/css/main.css", "animate.css/animate.min.css"],
 modules: [
  "@nuxtjs/google-fonts",
  "nuxt-icon",
  "@nuxt/image",
  "@pinia/nuxt",
  "@pinia-plugin-persistedstate/nuxt",
 ],

 //tailwind options
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },

 //  shadcn
 hooks: {
  "components:dirs": (dirs) => {
   dirs.unshift({
    path: "~/components/ui",
    // this is required else Nuxt will autoImport `.ts` file
    extensions: [".vue"],
    // prefix for your components, eg: UiButton
    prefix: "Ui",
    // prevent adding another prefix component by it's path.
    pathPrefix: false,
   })
  },
 },

 //  google fonts
 googleFonts: {
  display: "swap",
  families: {
   "Abhaya Libre": true,
   Montserrat: true,
   "Josefin Sans": true,
  },
 },
 //  Nuxt Image
 image: {
  cloudinary: {
   baseURL: "https://res.cloudinary.com/dckmlqzgd/image/upload/",
  },
 },

 //  pinia
 pinia: {
  storesDirs: ["./stores"],
 },
})
