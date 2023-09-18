/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "./src/scss/variables.scss";`,
  },
};

module.exports = nextConfig;
