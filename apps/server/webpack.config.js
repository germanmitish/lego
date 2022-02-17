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
      ],
    },
  };
};