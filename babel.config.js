module.exports = function(api) {
  const babelEnv = api.env();
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ];

  if (babelEnv === 'production') {
    plugins.push(['@babel/plugin-transform-react-inline-elements']);
  }

  return {
    presets,
    plugins,
  };
};
