import * as access from "@access";
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        100: "var(--lighterDark)",
        200: "var(--lightDark)",
        background: "var(--background)",
        border: "var(--border)",
        "button-background-number": "rgb(var(--buttonBackgroundNumber))",
        "button-background-operator": "rgba(var(--buttonBackgroundOperator))",
        "button-background-equal": "rgba(var(--buttonBackgroundEqual))",
        "button-text-color": "rgba(var(--buttonTextColor))",
        "button-text-color-hover": "rgba(var(--buttonTextColorHover))",
        "button-equal-hover": "rgba(var(--buttonEqualColorHover))",
        text: "var(--text)",
        navBarLinkText: "var(--navBarLinkText)",
        row: "var(--row)",
        textArea: "var(--textArea)",
        "textarea-color": "rgba(var(--textAreaColor))",
        modal: "var(--modal)",
        "modal-text": "rgba(var(--modalText))",
        "modal-background": "rgba(var(--modalBackground))",
        modalOverlay: "rgba(var(--modalOverlay))",
        primary: "var(--primary)",
        buttonText: "var(--buttonText)",
        buttonBorder: "var(--buttonBorder)",
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
