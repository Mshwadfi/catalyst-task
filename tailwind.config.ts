import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Center the container
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "1rem", // Padding for small screens
          lg: "1rem", // Padding for large screens
          xl: "2rem", // Padding for extra-large screens
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // 2X Extra-large screens
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
} satisfies Config;
