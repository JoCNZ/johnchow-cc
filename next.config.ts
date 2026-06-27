import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  basePath: '/jc',
  assetPrefix: '/jc',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jc',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
