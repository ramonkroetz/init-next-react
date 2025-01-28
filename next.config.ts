import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: './dist',
  // Enabled to improve DX and performance if not experimental.
  // experimental: {
  //   reactCompiler: true,
  // },
  images: {
    loader: 'custom',
    imageSizes: [],
    deviceSizes: [360, 480, 768, 992, 1200, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'dist',
    nextImageExportOptimizer_quality: '80',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

export default nextConfig;
