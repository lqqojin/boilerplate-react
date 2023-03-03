import { override, addWebpackAlias } from 'customize-cra';
import path from 'path';

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
    '@types': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
);
