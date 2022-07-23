import * as nodePath from 'path';

// Имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());
// Имя папки с результатом
const buildFolder = `./dist`;
// Имя папки с исходным кодом
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/`,
    css: `${buildFolder}/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/images/`,
    icons: `${buildFolder}/assets/icons/`,
    files: `${buildFolder}/assets/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    js: `${srcFolder}/script.js`,
    scss: `${srcFolder}/style.scss`,
    pug: `${srcFolder}/index.pug`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    icons: `${srcFolder}/assets/icons/**/*.svg`,
    files: `${srcFolder}/assets/*.{css,svg,ico,png}`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    scss: `${srcFolder}/**/*.scss`,
    pug: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/assets/images/*.{jpg,jpeg,png,gif,ico,webp}`,
    icons: `${srcFolder}/assets/icons/*.svg`,
    files: `${srcFolder}/assets/*.{css,svg,ico,png}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
