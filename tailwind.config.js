/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD", // Purple
        dark: "#0A0A0A", // Black
      },
    },
  },
  plugins: [],
};
