// sitemap.xml generator for OneSmile website
export const generateSitemap = () => {
  const baseUrl = 'https://onesmile.ma';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/services',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/terms',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentDate
    },
    {
      url: '/sitemap',
      changefreq: 'monthly',
      priority: '0.4',
      lastmod: currentDate
    }
  ];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}"/>
  </url>`;
  });
  
  sitemap += '\n</urlset>';
  
  return sitemap;
};

// robots.txt generator
export const generateRobotsTxt = () => {
  const baseUrl = 'https://onesmile.ma';
  
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*.json$
Disallow: /api/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1`;
};
