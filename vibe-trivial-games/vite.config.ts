import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/vibe-trivial-games/", // GitHub Pagesのリポジトリ名に合わせて設定
});
