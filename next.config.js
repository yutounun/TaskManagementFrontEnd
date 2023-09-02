/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // webpack: (config) => {
  //   config.resolve.alias['~'] = path.join(__dirname, 'src/app');
  //   return config;
  // },
};

module.exports = nextConfig;
