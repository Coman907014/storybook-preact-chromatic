import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
const preact = require("rollup-plugin-preact");
import less from 'rollup-plugin-less'
import typescript from '@rollup/plugin-typescript'
const INPUTS = [
  'index.ts',
];

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default INPUTS.map((path) => {
  const [pathName] = path.split('.');

  return {
    input: `src/${path}`,
    output: [
      {
        exports: 'auto',
        file: `public/${pathName}.js`,
        format: 'cjs',
        inlineDynamicImports: true,
        sourcemap: true,
      },
      {
        exports: 'auto',
        file: `public/${pathName}.esm.js`,
        format: 'esm',
        inlineDynamicImports: true,
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
            { find: 'react', replacement: "preact/compat" },
            { find: 'react-dom', replacement: "preact/compat" }
          ]
      }),
      less({
        include: [ '**/*.less', '**/*.css' ],
        output: 'public/theme/index.css'
      }),
      typescript(),
      preact({
        usePreactX: false, // usePreactX is auto resolvePreactCompat: true.
        noPropTypes: false,
        noReactIs: false,
        noEnv: false,
        resolvePreactCompat: false,
        aliasModules: {
            "react-css-styler": "preact-css-styler",
        },
      }),
      peerDepsExternal(),
      resolve({ extensions }),
      babel({
        exclude: 'node_modules/**',
        extensions,
        ignore: [
          '**/*.test.js',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.js',
          '**/*.stories.ts',
          '**/*.stories.tsx',
        ],
        plugins: [
          '@babel/plugin-syntax-jsx',
        ],
      }),
      // Converts CommonJS modules to ES6
      commonjs(),
    ],
    external: {},
  };
});
