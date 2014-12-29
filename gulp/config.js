var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**.map'
    ]
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest + '/assets/css/'
  },
  markup: {
    src: src + '/htdocs/*.html',
    watch: src + '/htdocs/**',
    dest: dest,
    swig_options: {
      defaults: {
        cache: false
      },
      json_path: src + '/data'
    }
  },
  browserify: {
    debug: true,
    extensions: ['.jsx'],
    bundleConfigs: [{
      entries: src + '/javascript/app.jsx',
      dest: dest + '/assets/js/',
      outputName: 'app.js'
    }]
  }
};
