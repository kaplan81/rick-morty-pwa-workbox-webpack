const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: './src/ts/app.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/*.html', flatten: true },
      { from: 'src/assets', to: 'assets' },
      { from: 'src/pizza.ico' },
      { from: 'node_modules/animate.css/animate.min.css', to: 'css/animate.min.css' },
    ]),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/ts/sw.ts',
      swDest: 'js/sw.js',
    }),
  ],
};
