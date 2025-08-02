import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// Plugin to create 404.html for GitHub Pages SPA support
const githubPages404Plugin = () => ({
  name: 'github-pages-404',
  writeBundle() {
    const outDir = 'docs';
    const indexPath = path.join(outDir, 'index.html');
    const notFoundPath = path.join(outDir, '404.html');
    const cnamePath = path.join(outDir, 'CNAME');
    
    // Copy CNAME file for custom domain
    if (fs.existsSync('CNAME')) {
      fs.copyFileSync('CNAME', cnamePath);
      console.log('Copied CNAME file for custom domain');
    }
    
    // Copy lovable-uploads directory to docs for GitHub Pages
    const uploadsSourceDir = 'lovable-uploads';
    const uploadsDestDir = path.join(outDir, 'lovable-uploads');
    
    if (fs.existsSync(uploadsSourceDir)) {
      if (!fs.existsSync(uploadsDestDir)) {
        fs.mkdirSync(uploadsDestDir, { recursive: true });
      }
      
      const files = fs.readdirSync(uploadsSourceDir);
      files.forEach(file => {
        const sourceFile = path.join(uploadsSourceDir, file);
        const destFile = path.join(uploadsDestDir, file);
        if (fs.statSync(sourceFile).isFile()) {
          fs.copyFileSync(sourceFile, destFile);
        }
      });
      console.log('Copied lovable-uploads directory for static assets');
    }
    
    if (fs.existsSync(indexPath)) {
      let content = fs.readFileSync(indexPath, 'utf-8');
      
      // Add the GitHub Pages SPA redirect script before closing head tag
      const redirectScript = `
    <!-- GitHub Pages SPA redirect script for custom domain -->
    <script>
      // Redirect to home page with the path as a hash
      var pathSegments = location.pathname.slice(1).split('/');
      if (pathSegments.length > 0 && pathSegments[0] !== '') {
        // Use the current origin (works for both custom domain and github.io)
        location.replace(location.origin + '/#' + pathSegments.join('/'));
      }
    </script>
  </head>`;
      
      content = content.replace('</head>', redirectScript);
      fs.writeFileSync(notFoundPath, content);
      console.log('Created 404.html for GitHub Pages SPA support');
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For GitHub Pages, empty base ensures paths work correctly with HashRouter
  base: '',
  build: {
    // Ensure paths are properly rewritten for GitHub Pages
    outDir: 'docs',
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
    githubPages404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
