/* eslint-env node */
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'subApps/eShield',
    'subApps/logsAudit',
    'subApps/csc',
    '**/auto-imports.d.ts',
    '**/components.d.ts'
  ],
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'template-curly-spacing': ['error', 'never'],
    'no-continue': 'off',
    'no-loop-func': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.'
      }
    ],
    'max-len': [
      'error',
      120,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreTrailingComments: true
      }
    ],
    'max-lines': ['error', { max: 800, skipBlankLines: true, skipComments: true }],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-template-curly-in-string': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true
      }
    ],
    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        AssignmentExpression: {
          array: false,
          object: false
        },
        VariableDeclarator: {
          array: false,
          object: true
        }
      }
    ],
    semi: 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        block: { exceptions: ['*'] }
      }
    ],
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['error'] }]
        : ['warn', { allow: ['error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, { SwitchCase: 1, MemberExpression: 'off' }],
    'quote-props': ['error', 'as-needed'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'newline-per-chained-call': 'off',
    'no-undef': 'off', // 由 typescript 检查变量是否被定义
    'no-unused-vars': 'off', // 应当由 @typescript-eslint/no-unused-vars 来检查 no-unused-vars
    'consistent-return': 'off', // 由 typescript 管理函数返回结果的类型，不必强制要求函数返回值类型必须一致
    'class-methods-use-this': 'off', // 由 typescript 管理函数类型，不必强制要求成员函数必须调用 this
    'max-classes-per-file': 'off', // 由 typescript 管理类的代码静态解析，不必强制要求每个文件只能有一个 Class
    'no-use-before-define': 'off', // 由 typescript 管理变量定义的合法性检查，非代码块中应当允许自动的变量提升行为
    // @typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production'
        ? ['error', { ignoreRestSiblings: true, varsIgnorePattern: '_ignored' }]
        : ['warn', { ignoreRestSiblings: true, varsIgnorePattern: '_ignored' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'enumMember',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    // vue3
    'vue/no-unused-components': 'warn',
    'vue/attributes-order': 'error',
    'vue/html-self-closing': 'error',
    // 'vue/max-attributes-per-line': ['warn', { singleline: 4 }],
    'vue/no-v-html': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    'vue/attribute-hyphenation': [
      'warn',
      'always',
      {
        ignore: ['onUpdate:paginationPageSize', 'onUpdate:paginationCurrentPage', 'onResolve']
      }
    ],
    'vue/require-default-prop': 'off'
  }
}
