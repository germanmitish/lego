
module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: [
            '@svgr/webpack',
            'url-loader'
          ]
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