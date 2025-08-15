/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: false, // We're using custom robots.txt
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxt: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://yourdomain.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
}
