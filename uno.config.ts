import { defineConfig } from "unocss";

export default defineConfig({
  shortcuts: {
    "bg-primary": "bg-background text-font dark:bg-background dark:text-font",
  },
  theme: {
    colors: {
      background: "#e6e2cf",
      subBackground: "#3c3c3c",
      font: "#272727",
      subFont: "#e6e2cf",
      myPrimary: "#148570",
      accent: "#890303",
    },
    fontSize: {
      slideTitle: "46px",
      sectionTitle: "40px",
      large: "28px",
      regular: "20px",
    },
  },
});
