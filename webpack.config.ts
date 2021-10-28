/*
 * This code is the intellectual property of Bulb Inc. and other software publishers;
 * it may not be altered, copied or disclosed without prior written approval.
 * Copyright 2020, Bulb Inc.  For more information, please email contact@hellobulb.com.
 */

import { Configuration } from 'webpack';
// @ts-ignore
import { SvgGeneratorWebpackPlugin } from '@ngneat/svg-generator/webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  plugins: [
    new SvgGeneratorWebpackPlugin({
      srcPath: './node_modules/@fortawesome/fontawesome-pro/svgs',
      outputPath: './src/app/svg/fontawesome',
      svgoConfig: {
        plugins: [
          "removeDimensions"
        ],
      },
    }),
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin()
    ],
  },

} as Configuration;
