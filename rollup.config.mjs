import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import alias from '@rollup/plugin-alias';
// import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const outputOptions = {
  exports: 'named',
  preserveModules: true,
  interop: 'auto',
};

const config = {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      ...outputOptions,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      ...outputOptions,
    },
  ],
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [
    alias({
      entries: {
        src: fileURLToPath(new URL('src', import.meta.url)),
      },
    }),
    nodeResolve(),
    commonjs({ include: ['node_modules/**'] }),
    // typescript({
      // exclude: ['example/**']
    // }),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]],
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    }),
    preserveDirectives(),
    terser(),
    analyze({
      hideDeps: true,
      limit: 0,
      summaryOnly: true,
    }),
  ],
  onwarn(warning, warn) {
    if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
      warn(warning);
    }
  },
};

export default config;
