/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
    fontFamily: {
      sans: ["DM Sans"],
      nunito: ["Nunito"],
    },
    colors: {
        black: "#000000",
        dark: "#0E0E2C",
        white: "#ffffff",
        whiteSmoke: "#f8f9fb",
        lightGrey: "#4A4A68",
        grey: "#8C8CA1",
        purple: "#755AE2",
        lightPurple: "#ECE8FF",
        lilac: "#675E8B",
        onion: "#F5F3FF",
        violet: "#E6E0FF",
        red: "#FF0000",
        orange: "#FF5F56",
        lightOrange: "#FF5F561A"
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    }
  },
  },
  plugins: [],
}