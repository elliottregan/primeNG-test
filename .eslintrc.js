module.exports = {
  root: true,
  ignorePatterns: [
    '!**/*',
    '*(.spec|_test).(j|t)s',
    '*.d.ts',
    'node_modules/**'
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  globals: {
  },
  overrides: [
    {
      files: [
        '*.ts',
      ],
      parserOptions: {
        project: [
          './/tsconfig.json',
          './/tsconfig.spec.json',
        ],
        createDefaultProgram: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        'no-mixed-spaces-and-tabs': 0,
        'no-prototype-builtins': 1,
        'no-unused-vars': 1,
        'no-useless-escape': 1,
        'no-extra-semi': 1,
        'no-inner-declarations': 1,

        '@angular-eslint/directive-selector': [
          'warn',
          {
            type: 'attribute',
            prefix: 'bulb',
            style: 'camelCase',
          }
        ],
        '@angular-eslint/component-selector': [
          'warn',
          {
            type: 'element',
            prefix: 'bulb',
            style: 'kebab-case',
          }
        ],
        '@angular-eslint/component-class-suffix': 1,
        '@angular-eslint/directive-class-suffix': 1,
        '@angular-eslint/no-empty-lifecycle-method': 1,
        '@angular-eslint/no-host-metadata-property': 1,
        '@angular-eslint/no-output-on-prefix': 1,
        '@angular-eslint/no-conflicting-lifecycle': 1,
        '@angular-eslint/no-input-rename': 1,
      }
    },
    {
      files: [
        '*.html',
      ],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        '@angular-eslint/template/eqeqeq': 1,
      },
    }
  ]
}
