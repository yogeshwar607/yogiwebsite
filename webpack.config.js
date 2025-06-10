const resolve = require('path').resolve;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/// Rules

// Stylus
const stylusRule = {
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'stylus-loader',
      options: {
        stylusOptions: {
          // Stylus plugins
        },
      },
    },
  ],
};

// CSS
const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
};

// Vue
const vueRule = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    cssModules: {
      localIdentName: '[path][name]---[local]---[hash:base64:5]',
      camelCase: true,
    },
  },
};

// TypeScript
const tsRule = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true, // Faster builds
      },
    },
  ],
  exclude: /node_modules/,
};

// Images and other assets
const assetRule = {
  test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 8 * 1024, // 8kb - inline if smaller
    },
  },
  generator: {
    filename: 'assets/images/[name].[hash][ext]',
  },
};

// XML
const xmlRule = {
  test: /\.xml$/,
  type: 'asset/source',
};

/// Plugin Options

// CleanWebpackPlugin
const cleanOptions = {
  cleanOnceBeforeBuildPatterns: ['dist/*'],
  cleanAfterEveryBuildPatterns: [],
  dangerouslyAllowCleanPatternsOutsideProject: true,
};

/// Export
const title = '~/yogeshwar/main.ts';
const path = '/';

const transform = (content, filePath) => {
  if (filePath.endsWith('.json') || filePath.endsWith('.xml')) {
    return content.toString().replace(/#\{title\}/g, title).replace(/#\{path\}/g, path);
  }
  return content;
};

const config = {
  entry: './index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve('dist'),
    publicPath: '/',
    clean: true,
  },
  context: resolve('src'),
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      tsRule,
      vueRule,
      stylusRule,
      cssRule,
      assetRule,
      xmlRule,
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
    fallback: {
      "path": false,
      "fs": false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          transform,
          noErrorOnMissing: true,
        },
      ],
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      path,
      title,
      template: 'index.html',
      minify: process.env.NODE_ENV === 'production' ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
    }),
  ],
};

// Set mode based on environment
config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// Base optimization config
config.optimization = {
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10,
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  // Production specific plugins
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    })
  );

  // Production specific optimization
  config.optimization.minimize = true;
  config.optimization.minimizer = [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      include: /\.js$/,
      exclude: /node_modules/,
      parallel: true,
      terserOptions: {
        ecma: 2020,
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
        },
        format: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ];

  // Add offline plugin
  config.plugins.push(
    new OfflinePlugin({
      publicPath: '/',
      externals: ['/'],
      updateStrategy: 'changed',
      autoUpdate: 1000 * 60 * 2,
      caches: {
        main: [
          'index.html',
          'main.*.js',
          'vendors.*.js',
          'common.*.js',
        ],
      },
      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
      },
      AppCache: {
        events: true,
      },
    })
  );
} else {
  // Development specific config
  config.devtool = 'eval-source-map';
  config.devServer = {
    port: 4001,
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    static: {
      directory: resolve('dist'),
      publicPath: '/',
    },
    client: {
      overlay: true,
      progress: true,
    },
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}

module.exports = config;
