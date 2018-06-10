const srcPath = './src';
const distPath = './dist';

const config = {
    script: {
        src: `${srcPath}/js/**/*.js`,
        dist: distPath,
    },
    ejs: {
        src: `${srcPath}/**/*.ejs`,
        dist: distPath
    },
    css: {
        src: `${srcPath}/scss/**/*.scss`,
        dist:`${distPath}/css`,
        autoprefixer: {
            browsers: ['last 1 version']
        }
    },
    img: {
        src: `${srcPath}/img/**/*.+(jpg|png|gif|svg)`,
        dist:`${distPath}/img`
    },
    server: {
        server: {
            baseDir: distPath
        }
    }
};