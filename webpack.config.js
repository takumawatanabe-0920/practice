const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 開発モードかどうか？
  mode: 'development',
  // エントリーポント(プログラムを一番最初に実行するところ)
  entry: path.resolve(__dirname, 'src/Index.tsx'),
  // 出力ファイル
  output: {
    // __dirnameは絶対パス
    // path.resolveは、OSに依存せずに絶対パスを表示できるため安定している
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    // 使用できる拡張子
    extensions: ['.ts', '.tsx', '.js', '.jsx', ''],
    alias: {
      '@practice': path.resolve(__dirname, './src/practice'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
  module: {
    rules: [
      {
        // マッチする
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            // javascript以外を解釈できるloader
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        // マッチする
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/static/index.html'),
    }),
  ],
  devServer: {
    static: {
      // bundleファイルが配置しているところを読み込む
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    historyApiFallback: true,
  },
}
