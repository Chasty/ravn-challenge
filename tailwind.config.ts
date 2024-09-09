import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        "1": "#F4CCC8",
        "2": "#EBA59E",
        "3": "#E27D73",
        "4": "#DA584B",
      },
      secondary: {
        "1": "#C8E1BC",
        "2": "#AAD199",
        "3": "#8DC275",
        "4": "#70B252",
      },
      tertiary: {
        "1": "#F9EED7",
        "2": "#F2DAAB",
        "3": "#EBC77F",
        "4": "#E5B454",
      },
      neutral: {
        "1": "#FFFFFF",
        "2": "#94979A",
        "3": "#393D41",
        "4": "#2C2F33",
        "5": "#222528",
      },
      blue: "#2F61BF",
    },
    fontFamily: {
      body: ['SF Compact Display"'],
    },
    fontSize: {
      "display-xl": [
        "64px",
        { lineHeight: "88px", letterSpacing: "1px", fontWeight: 400 },
      ],
      "display-l": [
        "56px",
        { lineHeight: "72px", letterSpacing: "1px", fontWeight: 400 },
      ],
      "display-m": [
        "48px",
        { lineHeight: "56px", letterSpacing: "1px", fontWeight: 400 },
      ],
      "display-s": [
        "32px",
        { lineHeight: "48px", letterSpacing: "1px", fontWeight: 400 },
      ],
      "display-xs": [
        "24px",
        { lineHeight: "32px", letterSpacing: "1px", fontWeight: 400 },
      ],
      "display-xl-bold": [
        "64px",
        { lineHeight: "88px", letterSpacing: "1px", fontWeight: 700 },
      ],
      "display-l-bold": [
        "56px",
        { lineHeight: "72px", letterSpacing: "1px", fontWeight: 700 },
      ],
      "display-m-bold": [
        "48px",
        { lineHeight: "56px", letterSpacing: "1px", fontWeight: 700 },
      ],
      "display-s-bold": [
        "32px",
        { lineHeight: "48px", letterSpacing: "1px", fontWeight: 700 },
      ],
      "display-xs-bold": [
        "24px",
        { lineHeight: "32px", letterSpacing: "1px", fontWeight: 700 },
      ],
      "body-xl": [
        "20px",
        { lineHeight: "32px", letterSpacing: "0.75px", fontWeight: 400 },
      ],
      "body-l": [
        "18px",
        { lineHeight: "32px", letterSpacing: "0.75px", fontWeight: 400 },
      ],
      "body-m": [
        "15px",
        { lineHeight: "24px", letterSpacing: "0.75px", fontWeight: 400 },
      ],
      "body-s": [
        "13px",
        { lineHeight: "22px", letterSpacing: "0.25px", fontWeight: 400 },
      ],
      "body-xl-bold": [
        "20px",
        { lineHeight: "32px", letterSpacing: "0.75px", fontWeight: 600 },
      ],
      "body-l-bold": [
        "18px",
        { lineHeight: "32px", letterSpacing: "0.75px", fontWeight: 600 },
      ],
      "body-m-bold": [
        "0.75rem",
        { lineHeight: "24px", letterSpacing: "0.75px", fontWeight: 600 },
      ],
      "body-s-bold": [
        "13px",
        { lineHeight: "22px", letterSpacing: "0.25px", fontWeight: 600 },
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
