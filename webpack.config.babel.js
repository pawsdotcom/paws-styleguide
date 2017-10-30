import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

var styleLoader = {
  test: /\.css$/,
  loaders: [
    'style-loader?sourceMap',
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
  ]
}
if (IS_PRODUCTION) {
  styleLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [ 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader' ],
      publicPath: '/'
    })
  }
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    styles: 'styles/main.css',
    'style-guide': 'styles/style-guide.css',
    components: 'main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      styleLoader,
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Paws Styleguide',
      template: 'index.ejs',
      chunks: IS_PRODUCTION ? ['components'] : ['styles', 'style-guide', 'components'],
      isProduction: IS_PRODUCTION
    }),
    new ExtractTextPlugin({filename: '[name].css'}),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false
    })
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  }
}
