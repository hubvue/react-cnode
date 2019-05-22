const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
const entry = "./src/service/**/*.js";

//生产环境
function buildProd() {
    return gulp.src(entry)
                .pipe(babel({
                    babelrc: false,
                }))
                .pipe(gulp.dest('dist'));  
};

gulp.task('default',buildProd);