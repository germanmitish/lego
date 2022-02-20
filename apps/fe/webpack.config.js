
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
        }
      ],
    },
  };
};