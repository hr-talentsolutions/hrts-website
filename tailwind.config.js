/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F99F1C", // Brand Orange
        secondary: "#2E3192", // Brand Blue (10% target)
        accent: "#E54028", // Brand Red (3% target)
        background: "#FFFFFF", // Pure White
        text: {
          main: "#1A1A1A",
          sub: "#666666",
        },
        orange: {
          50: '#fff9eb',
          100: '#ffefc7',
          200: '#ffde8a',
          300: '#ffc64d',
          400: '#ffa11a',
          500: '#f99f1c',
          600: '#e17c0d',
          700: '#bb5a0e',
          800: '#984613',
          900: '#7c3a14',
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        "premium-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
