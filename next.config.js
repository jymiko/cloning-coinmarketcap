/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
         {
           hostname: 'coinmarketcap.com'
         },
        ] 
       }
}

module.exports = nextConfig
