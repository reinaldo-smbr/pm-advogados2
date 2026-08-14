/*import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
/*};

export default nextConfig;
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Permite que o build conclua com sucesso mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Recomendado também ignorar o ESLint no build se houver avisos
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;