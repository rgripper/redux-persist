const { NODE_ENV, BABEL_ENV } = process.env;
const cjs = NODE_ENV === 'test' || BABEL_ENV === 'commonjs'

module.exports = {
  presets: [
    '@babel/flow',
    ['@babel/env', {
      useBuiltIns: 'entry',
      modules: false,
      loose: true,
      targets: {
        browsers: ['last 2 versions']
      }
    }]
  ],
  plugins: [
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    cjs && '@babel/transform-modules-commonjs',
  ].filter(Boolean),
}
