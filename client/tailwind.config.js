/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29292b",
        secondary: "#9b9e9e",
        tertiary: "#02b0f5",
      },
      backgroundImage: {
        nasa:
          // "url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          "url('https://wallpapers.com/images/hd/nasa-space-satellite-w0a0am5efb7l6nuw.webp')",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
