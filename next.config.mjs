/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esto es necesario para que el proyecto se sirva desde una subcarpeta en GitHub Pages
  assetPrefix: "/portafolio/", // Cambia "portafolio" al nombre de tu repositorio
  basePath: "/portafolio", // Esto también es importante para el enrutamiento correcto
};

module.exports = nextConfig;
