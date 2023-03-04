// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addWebpackAlias } = require('customize-cra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@stories': path.resolve(__dirname, 'src/stories'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
);
