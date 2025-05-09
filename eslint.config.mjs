// commitlint.config.js
export const extendConfig = ['@commitlint/config-conventional'];
export const rules = {
  'type-enum': [
    2,
    'always',
    ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
  ],
  'subject-case': [2, 'always', 'sentence-case'],
};
