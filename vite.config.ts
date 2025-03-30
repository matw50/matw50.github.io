import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For GitHub Pages, setting base to '/' since we're using HashRouter
  // This ensures assets are loaded correctly
  base: '/',
  build: {
    // Ensure paths are properly rewritten for GitHub Pages
    outDir: 'dist',
    emptyOutDir: true,
    // Generate sourcemaps for debugging
    sourcemap: mode === 'development',
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
