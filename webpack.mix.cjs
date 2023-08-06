const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .css('resources/css/app.css', 'public/css')
   .webpackConfig({
      module: {
         rules: [
            {
               test: /\.m?js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env'],
                     plugins: ['@babel/plugin-syntax-dynamic-import']
                  }
               }
            }
         ]
      }
   });
