import { hostname } from 'os';
import path from 'path';
const __dirname = path.resolve();

/** 
 * @type {import('next').NextConfig} 
 * 
*/

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.futuretalks.jonaz.tech',
                pathname: '**/**',
                port: '',
            }
        ]
    }
};

export default nextConfig;
