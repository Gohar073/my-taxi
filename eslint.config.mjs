import next from 'eslint-config-next';

const config = [
  ...next,
  {
    name: 'project/ignores',
    ignores: ['.next/**', 'node_modules/**'],
  },
];

export default config;

