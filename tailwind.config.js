
// ****Version 1*********
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



// ********version 2**********
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1f4e79', // Dark Blue
//         secondary: '#f1f1f1', // Light Gray
//         accent: '#0095f6', // Light Blue
//         dark: '#333333', // Dark
//         light: '#ffffff', // White
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c98b9', // Logo color
        complementary: '#b97d0c', // Complementary color
        analogous1: '#0c69b9', // Analogous color 1
        analogous2: '#0cb9a8', // Analogous color 2
        light: '#ffffff', // White
        lightGray: '#f1f1f1', // Light Gray
        dark: '#333333', // Dark Gray
      },
    },
  },
  plugins: [],
};

