import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Extended brand colors
        midnight: {
          DEFAULT: "hsl(var(--midnight))",
          rich: "hsl(var(--midnight-rich))",
          soft: "hsl(var(--midnight-soft))",
          pale: "hsl(var(--midnight-pale))",
        },
        stone: {
          DEFAULT: "hsl(var(--stone))",
          light: "hsl(var(--stone-light))",
        },
        copper: {
          DEFAULT: "hsl(var(--copper))",
          light: "hsl(var(--copper-light))",
          dark: "hsl(var(--copper-dark))",
          glow: "hsl(var(--copper-glow))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          warm: "hsl(var(--cream-warm))",
          rich: "hsl(var(--cream-rich))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          light: "hsl(var(--sage-light))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        // Additional brand colors
        ivory: {
          DEFAULT: "hsl(var(--ivory))",
          warm: "hsl(var(--ivory-warm))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          medium: "hsl(var(--navy-medium))",
          light: "hsl(var(--navy-light))",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-bottom": {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px -5px hsl(var(--copper) / 0.3)" },
          "50%": { boxShadow: "0 0 35px -5px hsl(var(--copper) / 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-bottom": "slide-in-bottom 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient": "var(--gradient-hero)",
        "hero-radial": "var(--gradient-hero-radial)",
        "copper-gradient": "var(--gradient-copper)",
        "copper-shine": "var(--gradient-copper-shine)",
        "card-gradient": "var(--gradient-card)",
        "glass": "var(--gradient-glass)",
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        copper: "var(--shadow-copper)",
        "inner-subtle": "var(--shadow-inner)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
