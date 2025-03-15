import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'plugin:lingui/recommended'],
    ignorePatterns: ['node_modules', 'dist', '.next', 'public/browserDetect', 'src/locales'],
    rules: {
      'linebreak-style': ['error', 'unix'],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: './*.css',
              group: 'index',
              position: 'after',
            },
          ],
          alphabetize: { order: 'asc' },
        },
      ],
    },
    settings: {
      next: {
        rootDir: ['./src'],
      },
    },
  }),
]

export default eslintConfig
