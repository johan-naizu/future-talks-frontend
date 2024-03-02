import path from 'path';
const __dirname = path.resolve();

/** 
 * @type {import('next').NextConfig} 
 * 
*/

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

export default nextConfig;
