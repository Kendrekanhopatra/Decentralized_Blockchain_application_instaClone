/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'kajabi-storefronts-production.kajabi-cdn.com',
      'i.insider.com',
      'upload.wikimedia.org',
      'pbs.twimg.com',
      'yt3.ggpht.com',
      'yt3.googleusercontent.com',
      'picsum.photos',
      'avatars.dicebear.com',
      'upcdn.io',
      'avatars.githubusercontent.com',
      'cdn.discordapp.com',
      'images.unsplash.com',
      'i.ytimg.com',
      'miro.medium.com',
      'cloudinary.com',
      'https://cloudinary.com/',
      'res.cloudinary.com',
      'th.bing.com',
      'unsplash.com',
      'compote.slate.com',
'www.galvanizeaction.org'
    ],
  },
}


module.exports = nextConfig
