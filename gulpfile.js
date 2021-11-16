/**********************************************************************


-----GUIDE GULP 4-----

--Create project folder
 --Create "scss" folder
  --Create "style.scc"

--Instal "node.js" and "npm" (test: node.js -v npm -v) from nodejs.org

--In commandline type: 
 cd [your way to project folder, example: cd desktop\project]  

--Next when u stay in ur project folder type next command:
  npm i gulp-cli -g

  [waiting for installing]

  npm init 

  [skip all steps, press ENTER to skip]

--Next install gulp, plugins for gulp. Type next:
  	npm install --save-dev gulp gulp-sass browser-sync

  	[waiting for installing]

--Create config file [USE THIS FILE - ALREADY WORKED CONFIG,
JUST PUT THEM IN PROJECT FOLDER]

--Finally to use Gulp u need:
	-open commandline (WIN+R, type cmd)
	-go to ur project folder 
	-type: gulp watch
	-to stop Gulp press CTRL+C, and type y


//.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
//outputStyle: ':nested' ':compact' ':expanded' ':compressed'

**********************************************************************/

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style () {
	return gulp.src('./scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: './',
		}
	})
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./*.php').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;