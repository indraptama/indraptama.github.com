var gulp = require('gulp');
var postcss = require('gulp-postcss');
//var uncss = require('gulp-uncss');

var jade = require('gulp-jade');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;








// POSTCSS PLUGINS
// Future CSS and Autoprefixer
var cssnext = require('cssnext');
var rucksack = require('rucksack-css');
// Helper
//var vrhytem = require('postcss-vertical-rhythm');
var mdscale = require('postcss-modular-scale');
// Optimalization
var cssimport = require('postcss-import');
var hexa = require('postcss-color-alpha');
var mqpacker = require('css-mqpacker');
var cssfocus = require('postcss-focus');
//linter
var bemlinter = require('postcss-bem-linter');
var cssreport = require('postcss-reporter');
// Minifiy
var cssnano = require('cssnano');


//Browserify
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var notify = require('gulp-notify');




// Main GULP TASK

// Development
gulp.task('default',['jade','css','browserify','watchify','browser-sync'], function(){
  gulp.watch('./pages/*.jade',['jade']);
  gulp.watch('./pages/**/*.jade',['jade']);
  gulp.watch('./index.css',['css']);
  gulp.watch('./**/*.css',['css']);
});

// Build
gulp.task('build',['jade','css','uncss'], function(){
  //gulp.watch('./index.css',['css']);
});


// Compile Jade to html
gulp.task('jade',function(){
  return gulp.src('./pages/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./build/'))
  .pipe(reload({stream: true}));
});


// CSS DEVELOPMENT
gulp.task('css', function(){
  // define process
  var process = [
    //bemlinter(),
    //cssreport(),
    cssimport(),
    //vrhytem(),
    //mdscale(),
    hexa(),
    cssfocus(),
    cssnext(),
    rucksack(),
    mqpacker()
  ];

  // build
  return gulp.src('./index.css') //root of css file
  .pipe(postcss(process))
  .pipe(gulp.dest('./build/'))
  .pipe(reload({stream: true}));
});

// UNCSS TASK
gulp.task('uncss', function(){
  return gulp.src('./build/index.css')
    .pipe(uncss({
      html:['./build/index.html','./build/*.html','./build/**/*.html']
    }))
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(gulp.dest('./build/'));
});



// Browserify
gulp.task('browserify', function() {
    return browserify({
        debug: true,
        entries: ['./index.js'],
        transform: [babelify]
    })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build'));
});

// Watchify
gulp.task('watchify', function() {
    var bundler = watchify(browserify('./index.js', watchify.args));

    function rebundle() {
        return bundler
            .bundle()
            .on('error', notify.onError())
            .pipe(source('app.js'))
            .pipe(gulp.dest('./build/'))
            .pipe(reload({stream: true}));
    }

    bundler.transform(babelify)
        .on('update', rebundle);
    return rebundle();
});




// Function Browser-sync reload
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './build/'
        }
    });
});
