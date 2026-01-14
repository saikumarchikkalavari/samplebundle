import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/components/aggrid/index.ts',
    output: [
      {
        file: 'dist/components/aggrid/index.js',
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        sourceMap: false,
        rootDir: 'src/components/aggrid',
        outDir: 'dist/components/aggrid',
        declarationDir: 'dist/components/aggrid',
        exclude: ['node_modules/**']
      }),
      postcss({
        extract: true,
        extensions: ['.css']
      }),
    ],
    external: (id) => {
      // Only externalize React and react-dom (keep ag-grid and @tanstack bundled)
      return /^(react|react-dom|react\/|react\/jsx-runtime)/.test(id) || id === 'react/jsx-runtime';
    },
  },
  {
    input: 'src/tanstackquery/index.ts',
    output: [
      {
        file: 'dist/tanstackquery/index.js',
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        sourceMap: false,
        rootDir: 'src/tanstackquery',
        outDir: 'dist/tanstackquery',
        declarationDir: 'dist/tanstackquery',
        exclude: ['node_modules/**']
      }),
    ],
    external: (id) => {
      return /^(react|react-dom|react\/|react\/jsx-runtime)/.test(id) || id === 'react/jsx-runtime';
    },
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: false,
        exports: 'named',
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        sourceMap: false,
        rootDir: 'src',
        outDir: 'dist',
        declarationDir: 'dist',
        exclude: ['node_modules/**']
      }),
    ],
    external: (id) => {
      return /^(react|react-dom|react\/|react\/jsx-runtime)/.test(id) || id === 'react/jsx-runtime';
    },
  }
];
