/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trinity: {
          blue: "#0A6BE0",
          deepBlue: "#0130A6",
          electric: "#148EEC",
          lightBlue: "#7FD6F9",
          gold: "#D9991F",
          brightGold: "#DFB643",
          deepGold: "#9E620C",
          ink: "#0B1220",
          slate: "#475569",
          muted: "#64748B",
          border: "#D9E1EA",
          canvas: "#F4F7FB",
          hero: "#050B16",
          cardDark: "#0B1424",
          cardBorderDark: "#182740",
          cardLight: "#FFFFFF",
        }
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 18, 32, 0.04), 0 1px 2px -1px rgba(11, 18, 32, 0.04)',
        'enterprise': '0 4px 20px -2px rgba(11, 18, 32, 0.06), 0 2px 6px -1px rgba(11, 18, 32, 0.04)',
        'enterprise-hover': '0 12px 32px -4px rgba(10, 107, 224, 0.12), 0 4px 12px -2px rgba(11, 18, 32, 0.05)',
        'dark-glow': '0 0 35px -5px rgba(10, 107, 224, 0.25)',
        'gold-glow': '0 0 25px -4px rgba(217, 153, 31, 0.3)',
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
}
