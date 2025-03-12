/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: "/portafolio/",  // Cambia "portafolio" al nombre de tu repositorio
  basePath: "/portafolio",      // Esto también es importante para el enrutamiento correcto
  // Habilita la exportación estática
  trailingSlash: true,  // Para evitar problemas con rutas, asegúrate de agregar una barra al final de las URL
  images: {
    unoptimized: true,  // Habilita imágenes no optimizadas, ya que estamos exportando estáticamente
  },
};

module.exports = nextConfig;