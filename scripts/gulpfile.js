/**
 * @name gulpfile.js
 * @description 打包项目css依赖
 * 参考
 * https://github.com/JeromeLin/dragon-ui/blob/dev/scripts/gulp/gulpfile.js
 */

const path = require("path");
const { parallel, src, dest } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("gulp-cssnano");
const size = require("gulp-filesize");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const flatten = require("gulp-flatten");
const { name } = require("../package.json");

const r = p => path.resolve(__dirname, "..", p);

const DIR = {
  assets: r("components/**/*.{scss,png}"),
  sass: [r("components/**/theme/index.scss"), r("components/**/style/*.scss")],
  css: [r("components/**/theme/index.tsx"), r("components/**/style/index.tsx")],
  lib: r("lib"),
  es: r("es"),
  dist: r("dist"),
  dist_css: r("dist/css")
};

function copyAssets() {
  return src(DIR.assets)
    .pipe(dest(DIR.lib))
    .pipe(dest(DIR.es));
}

function copyAssets2() {
  return src(r("components/**/*.{png,jpg}"))
    .pipe(flatten())
    .pipe(dest(DIR.dist + "/assets"));
}

function createCss() {
  return src(DIR.sass)
    .pipe(
      sass.sync({
        outputStyle: "expanded"
      })
    )
    .pipe(postcss())
    .pipe(dest(DIR.lib))
    .pipe(dest(DIR.es));
}

const tsconfigPath = r("tsconfig.json");
const cssFileName = "css";

function createCssInCjs() {
  const ts_cjs = ts.createProject(tsconfigPath, {});

  return src(DIR.css)
    .pipe(ts_cjs())
    .pipe(rename({ basename: cssFileName }))
    .pipe(dest(DIR.lib));
}

function createCssInEs() {
  const ts_es6 = ts.createProject(tsconfigPath, {
    module: "ES6",
    target: "es6"
  });

  return src(DIR.css)
    .pipe(ts_es6())
    .pipe(rename({ basename: cssFileName }))
    .pipe(dest(DIR.es));
}

function createCssInUmd() {
  return src(DIR.sass)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(postcss())
    .pipe(concat(`${name}.css`))
    .pipe(size())
    .pipe(sourcemaps.write("./"))
    .pipe(dest(DIR.dist_css));
}

function createMinCssInUmd() {
  return src(DIR.sass)
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(postcss())
    .pipe(concat(`${name}.min.css`))
    .pipe(cssnano())
    .pipe(size())
    .pipe(dest(DIR.dist_css));
}

exports.default = parallel(
  copyAssets,
  copyAssets2,
  createCss,
  createCssInCjs,
  createCssInEs,
  createCssInUmd,
  createMinCssInUmd
);
