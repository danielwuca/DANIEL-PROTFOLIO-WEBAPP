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
        nasaMobile:
          "url('https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/438239615_394457796827323_876778187904809115_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eASVkOXDxckAb7g2j5d&_nc_ht=scontent.fyzd1-2.fna&oh=00_AfAg5iompMW52tGlrabnd7MsuWzCr1Q8m3akBkt33r10Lw&oe=662C78A4')",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
