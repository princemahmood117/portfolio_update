tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "serif"],
        Ovo: ["Ovo", "serif"],
        Bebas: ["Bebas Neue", "serif"],
      },
      animation: {
        spin_slow: "spin 7s linear infinite",
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },

      boxShadow: {
        black: "4px 4px 0 gray",
        white: "4px_4px_0_#fff",
      },
    },
  },
  darkMode: "selector",
};
