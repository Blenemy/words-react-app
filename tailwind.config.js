module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 20px 40px rgba(0,0,0,0.25)",
      },
      gridRowStart: {
        "item-0": "1",
        "item-1": "1",
        "item-2": "4",
        "item-3": "6",
      },
      gridRowEnd: {
        "item-0": "6",
        "item-1": "4",
        "item-2": "13",
        "item-3": "13",
      },
      gridColumnStart: {
        "item-0": "1",
        "item-1": "9",
        "item-2": "9",
        "item-3": "1",
      },
      gridColumnEnd: {
        "item-0": "9",
        "item-1": "13",
        "item-2": "13",
        "item-3": "9",
      },
      gridTemplateRows: {
        custom12: "repeat(12, 1fr)",
      },
      gridTemplateColumns: {
        custom12: "repeat(12, 1fr)",
      },
      colors: {
        customBg: "#010615",
        primary: "#181818",
        secondary: "#EFE6FF",
        violetStroke: "#8560BF",
        lilackButton: "#D8BFFF",
        wave: "#80DCFF",
        customCard: "#060c21",
      },
      keyframes: {
        animate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        animate: "animate 6s infinite linear",
      },
      backgroundImage: {
        gradientBackground: "url('./assets/BackgroundGradient.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".perspective": {
          transform: "perspective(1000px)",
        },
        ".-rotateY-180": {
          transform: "rotateY(-180deg)",
        },
        ".rotateY-180": {
          transform: "rotateY(180deg)",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".animation-delay": {
          "animation-delay": "-3s",
        },
        ".card::before, .card::after": {
          background: "linear-gradient(235deg, #ff005e, #010615, #fbff00)",
        },
        ".card::after": {
          filter: "blur(40px)",
        },
        ".auth::before": {
          background:
            "linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)",
        },
        ".auth::after": {
          background:
            "linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
