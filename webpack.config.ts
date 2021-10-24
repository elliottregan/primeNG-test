/*
 * This code is the intellectual property of Bulb Inc. and other software publishers;
 * it may not be altered, copied or disclosed without prior written approval.
 * Copyright 2020, Bulb Inc.  For more information, please email contact@hellobulb.com.
 */

import { Configuration } from 'webpack';
// @ts-ignore
import { SvgGeneratorWebpackPlugin } from '@ngneat/svg-generator/webpack-plugin';

export default {
  plugins: [
    new SvgGeneratorWebpackPlugin({
      srcPath: './node_modules/@fortawesome/fontawesome-pro/svgs/brands',
      outputPath: './src/app/svg/fontawesome/brands',
      svgoConfig: {
        plugins: [
          "removeDimensions"
        ],
      },
    }),
    new SvgGeneratorWebpackPlugin({
      srcPath: './node_modules/@fortawesome/fontawesome-pro/svgs/regular',
      outputPath: './src/app/svg/fontawesome/regular',
      svgoConfig: {
        plugins: [
          "removeDimensions"
        ],
      },
    }),
  ]

} as Configuration;
