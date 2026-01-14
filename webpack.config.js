const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Main entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean the output dir before emit
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Resolve these extensions
  },
  devtool: 'source-map', // Generates source maps
  module: {
    rules: [
      {
        test: /\.tsx?$/, // For .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // For css imports
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // For images
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, // Port for dev server
    open: true, // Open browser on start
    hot: true, // Enable hot reload
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
