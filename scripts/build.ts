import path from "path";
import fs from "fs";
import { build as esbuild, BuildOptions } from "esbuild";

const baseConfig: BuildOptions = {
  platform: "node",
  target: "es6",
  format: "cjs",
  nodePaths: [path.join(__dirname, "../src")],
  sourcemap: true,
  bundle: true,
};

const formats: Pick<BuildOptions, 'outdir' | 'format' | 'platform'>[] = [
  {
    outdir: path.join(__dirname, "../dist/cjs"),
  },
  {
    outdir: path.join(__dirname, "../dist/esm"),
    format: "esm"
  },
  // {
  //   platform: "browser",
  //   outdir: path.join(__dirname, "../dist/cjs"),
  // },
  // {
  //   platform: "browser",
  //   format: "esm",
  //   outdir: path.join(__dirname, "../dist/esm"),
  // }
]


async function main() {


  /**
   * Основной бандл
   */
  for (const format of formats) {

    let entryPoint = path.join(__dirname, '../src/index.ts')
    // if (format.platform === 'browser') {
    //   entryPoint = path.join(__dirname, '../src/index.browser.ts')
    // }


    await esbuild({
      ...baseConfig,
      ...format,
      entryPoints: [entryPoint],
    })
  }




}

if (require.main === module) {
  main();
}
