import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV

const plugins = [
  flow({ pretty: true }),
  nodeResolve(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers']
  }),
  commonjs({
    namedExports: {
      'node_modules/prop-types/index.js': ['PropTypes']
    }
  })
]

const config = {
  input: 'src/index.js',
  external: ['react', 'redux'],
  output: {
    format: env,
    exports: 'named',
    globals: { react: 'React', redux: 'redux' }
  },
  plugins
}

export default config
