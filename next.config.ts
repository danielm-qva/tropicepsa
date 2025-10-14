import type {NextConfig} from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    /* config options here */
    output: 'standalone',
    redirects: async () => {
        return [{
            source: '/',
            destination: '/es',
            permanent: false,
        }]
    }
};

export default withNextIntl(nextConfig);

