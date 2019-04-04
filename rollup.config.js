import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: {
    name: 'stateful',
    file: 'dist/index.js',
    format: 'umd',
    exports: 'named',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [typescript(), resolve(), commonjs()],
};
