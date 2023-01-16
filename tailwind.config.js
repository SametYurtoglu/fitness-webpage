/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image": "url('/images/bg-image2.jpeg')",
      }
    },
    fontFamily: {
      "sansita": ['Sansita Swashed']
    }
  },
  plugins: [],
}
