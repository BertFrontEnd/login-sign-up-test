export const icons = () => {
  return app.gulp
    .src(app.path.src.icons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'ICONS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(app.plugins.newer(app.path.build.icons))
    .pipe(app.plugins.ifPlugin(app.isBuild, app.gulp.src(app.path.src.icons)))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        app.plugins.newer(app.path.build.icons),
      ),
    )
    .pipe(app.gulp.dest(app.path.build.icons))
    .pipe(app.plugins.browsersync.stream());
};
