module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    });

    return config;
  },
};
