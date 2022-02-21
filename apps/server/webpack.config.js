module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.graphql$/i,
          use: 'file-loader',
        },
        {
          test: /\.gltf$/i,
          use: 'file-loader',
        },
        {
          test: /\.glb$/i,
          use: 'file-loader',
        },
      ],
    },
  };
};