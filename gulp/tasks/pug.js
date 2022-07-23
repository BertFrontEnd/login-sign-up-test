import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const pugToHtml = () => {
  return app.gulp
    .src(app.path.src.pug)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'PUG',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(
      pug({
        pretty: true, // Сжатие созданного HTML файла
        verbose: true, // Показ обрабатываемого файла в терминале
      }),
    )
    .pipe(app.plugins.replace(/@img\//g, './assets/'))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        }),
      ),
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
