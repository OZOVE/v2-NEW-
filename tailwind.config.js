module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFAF1933",
        customBg: "#FFAF19",
        customFontColor: "#4A4A4A",
      },
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
        xxxxs: "0.4rem",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         customYellow: "#FFAF1933",
//         customBg: "#FFAF19",
//         customFontColor: "#4A4A4A",
//       },
//       fontSize: {
//         xxs: "0.625rem",
//         xxxs: "0.5rem",
//         xxxxs: "0.4rem",
//       },
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1536px",
//     },
//   },
//   plugins: [],
// };
