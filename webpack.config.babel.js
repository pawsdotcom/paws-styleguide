import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'

var styleLoader = 'style-loader!css-loader!postcss-loader'
if (process.env.NODE_ENV === 'production') {
  styleLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [ 'css-loader', 'postcss-loader' ],
    publicPath: '/'
  })
}
  
module.exports = {

  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: styleLoader,
        exclude: /node_modules/ 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    })
  ]
};