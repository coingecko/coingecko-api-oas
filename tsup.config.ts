import { type Options, defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...options,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: "src/index.ts",
  outDir: "dist",
  target: "esnext",
  sourcemap: true,
  splitting: true,
  treeshake: true,
  clean: true,
  minify: true,
}));
