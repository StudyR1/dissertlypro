import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// Key routes to pre-render for SEO (high-value, static content pages)
const prerenderRoutes = [
  // Core pages
  "/",
  "/services",
  "/about",
  "/pricing",
  "/faq",
  "/contact",
  "/consultation",
  
  // Hub pages (high traffic entry points)
  "/blog",
  "/resources",
  "/tools",
  "/universities",
  "/glossary",
  
  // Regional landing pages
  "/uk",
  "/us",
  "/au",
  "/ca",
  
  // Resource hubs
  "/masters-resources",
  "/phd-resources",
  "/ai-academia",
  
  // High-value guide pages
  "/research-methodology",
  "/literature-review-guide",
  "/dissertation-structure",
  "/thesis-structure",
  "/masters-thesis-guide",
  
  // Legal pages (important for trust)
  "/privacy",
  "/terms",
  "/gdpr",
  "/ethics",
  
  // Popular tools
  "/tools/citation-generator",
  "/tools/thesis-builder",
  "/tools/methodology-selector",
  "/tools/prisma-flow",
  "/tools/ai-policy-checker",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: prerenderRoutes,
      // Renderer options
      renderer: {
        // Wait for network to be idle before capturing
        renderAfterTime: 500,
      },
      // Minify the pre-rendered HTML
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
      // Post-process hook to add prerender indicator
      postProcess(renderedRoute) {
        // Add a meta tag to indicate pre-rendered content
        renderedRoute.html = renderedRoute.html.replace(
          '</head>',
          '<meta name="prerender-status" content="prerendered">\n</head>'
        );
        return renderedRoute;
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["framer-motion", "lucide-react"],
          "helmet": ["react-helmet-async"],
        },
      },
    },
  },
}));
