/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  safelist: [
    "grid-cols-2",
    "md:grid-cols-4",
    "md:border-l",
    "md:border-[#faf9f5]/10",
    "lg:grid-cols-6",
    "justify-center",
    "gap-4",
    "gap-8",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        brand: {
          dark: "#043e2b",
          green: "#15803d",
          ink: "#232c28",
          cream: "#faf9f5",
          soft: "#f5f4f0",
        },
      },
    },
  },
  plugins: [],
};
