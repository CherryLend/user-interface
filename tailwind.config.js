/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-light": `linear-gradient(
            324.47deg,
            rgba(29, 188, 238, 0.62) -8.16%,
            rgba(252, 199, 226, 0.81) 30.14%
          ),
          linear-gradient(
            342.81deg,
            #fabfde -3.65%,
            #fff2f9 91.08%,
            rgba(80, 0, 0, 0.372934) 106.58%,
            #fff2f9 106.58%
          )`,
        "gradient-dark": `linear-gradient(
          360deg,
          rgba(139, 2, 72, 0.62) 8.89%,
          rgba(29, 32, 106, 0.83) 47.21%
        ),
        linear-gradient(
          342.81deg,
          #fabfde -3.65%,
          #fff2f9 91.08%,
          rgba(80, 0, 0, 0.372934) 106.58%,
          #fff2f9 106.58%
        )`,
        "widget-light": `linear-gradient(178.96deg, #FFDCEC 62.17%, #B6DEF8 99.11%)`,
        "widget-dark": `linear-gradient(178.96deg, rgba(33, 33, 104, 0.79) 62.17%, #B65084 99.11%)`,
        "table-light": `linear-gradient(130.06deg, rgba(255, 245, 250, 0.7) 34.03%, rgba(222, 8, 107, 0.406) 94.62%)`,
        "table-dark": `linear-gradient(0.19deg, rgba(222, 8, 107, 0.5) -49.49%, rgba(83, 0, 60, 0.24) 83.19%)`,
        "modal-light": `linear-gradient(178.44deg, #FECEE6 19.59%, #FFE0F0 98.74%)`,
        "modal-dark": `linear-gradient(179.98deg, rgba(59, 29, 117, 0.43) 29.88%, #8B1851 99.99%)`,
        "modalheader-light": `linear-gradient(341.26deg, rgba(236, 188, 248, 0.99) -34.21%, rgba(250, 22, 255, 0) 96.12%)`,
      },
      colors: {
        lightblue: "#96C6E5",
        blue: "#46a1f9",
      },
    },
  },

  plugins: [],
};
