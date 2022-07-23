// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передача значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { images } from './gulp/tasks/images.js';
import { icons } from './gulp/tasks/icons.js';
import { pugToHtml } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { server } from './gulp/tasks/server.js';

// Наблюдатель за изменениями в файлах
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.icons, icons);
  gulp.watch(path.watch.pug, pugToHtml);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
};

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Последовательная обработка графики
const graphic = gulp.series(images, icons);

// Параллельное выполнение задач
const mainTasks = gulp.parallel(copy, graphic, pugToHtml, scss, js);
const watcherTasks = gulp.parallel(watcher, server);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, fonts, watcherTasks);
const build = gulp.series(reset, mainTasks, fonts);

// Экспорт сценариев
export { dev };
export { build };

// Выполнение сценария по умолчанию при вызове команды в терминале
gulp.task('default', dev);
