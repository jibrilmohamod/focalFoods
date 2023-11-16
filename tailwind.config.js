const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: ["class"],
 content: [
  "./pages/**/*.{ts,tsx,vue}",
  "./components/**/*.{ts,tsx,vue}",
  "./app/**/*.{ts,tsx,vue}",
  "./src/**/*.{ts,tsx,vue}",
 ],
 theme: {
  fontFamily: {
   Libre: ["Abhaya Libre", "sans-serif"],
   Montserrat: ["Montserrat", "sans-serif"],
   Josefinsans: ["Josefin Sans", "sans-serif"],
  },
  container: {
   center: true,
   padding: "2rem",
   screens: {
    "2xl": "1400px",
   },
  },
  extend: {
   keyframes: {
    "accordion-down": {
     from: { height: 0 },
     to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
     from: { height: "var(--radix-accordion-content-height)" },
     to: { height: 0 },
    },
   },
   animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
   },
   colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    "card-foreground": "hsl(var(--card-foreground))",
    popover: "hsl(var(--popover))",
    "popover-foreground": "hsl(var(--popover-foreground))",
    primary: "hsl(var(--primary))",
    "primary-foreground": "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    "secondary-foreground": "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    "muted-foreground": "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    "accent-foreground": "hsl(var(--accent-foreground))",
    destructive: "hsl(var(--destructive))",
    "destructive-foreground": "hsl(var(--destructive-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
   },
   borderRadius: {
    DEFAULT: "var(--radius)",
   },
  },
 },
 plugins: [animate],
}
