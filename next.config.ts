import type { NextConfig } from "next";

const repoName = "REPO_NAME"; // TODO: Replace with repository name

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`, // TODO: Remove if using custom domain
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
