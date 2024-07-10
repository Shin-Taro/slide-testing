import { defineConfig } from "unocss";

export default defineConfig({
  shortcuts: {
    "bg-main": "bg-background text-font dark:bg-background dark:text-font",
  },
  theme: {
    colors: {
      background: "#272727",
      subBackground: "#3c3c3c",
      font: "#ffffff",
      main: "#148570",
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
