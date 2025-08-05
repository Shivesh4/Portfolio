import { defineConfig } from "vite"; // ✅ Required
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development";
  const plugins = [react()];

  if (isDev) {
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(componentTagger());
  }

  return {
    base: "/Portfolio/", // Required for GitHub Pages
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
