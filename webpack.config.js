const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: 'development',
    entry: {
      'ows-tools': './src/ows-tools.config.js'
    },
    output: {
      filename: 'assets/scripts/[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devtool: isProduction ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
                importLoaders: 1,
                modules: {
                  auto: true
                }
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.hbs$/,
          use: [{
            loader: 'handlebars-loader',
            options: {
              rootRelative: path.resolve(__dirname, 'src') + '/',
              knownHelpers: {},
              knownHelpersOnly: false
            }
          }]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        '@material': path.resolve(__dirname, 'node_modules/@material'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/views/ows-tools.hbs',
        filename: 'ows-tools.html',
        chunks: ['ows-tools'],
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : false
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/styles/[name].css'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'manifest.json', to: 'manifest.json' },
          { from: 'public', to: '' }
        ]
      })
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: isProduction,
            },
            mangle: true,
            output: {
              comments: false,
            },
          },
        }),
      ],
    }
  };
};