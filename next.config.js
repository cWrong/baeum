// next.config.js
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
  output: 'standalone', //docker image export를 위해서 추가 - 송대선
  // 옵션은 자유롭게 넣어주세요.
};

module.exports = withContentlayer(options);