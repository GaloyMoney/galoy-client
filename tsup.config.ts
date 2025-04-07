import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/**/*.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  skipNodeModulesBundle: true,
  target: "es2018",
  tsconfig: "tsconfig.json",
})
