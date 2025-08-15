# Local SEO Website - Claude Code Integration

This is a Next.js website template optimized for local businesses to achieve high Google rankings and visibility in AI platforms like ChatGPT and Claude.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- Claude Desktop subscription ($20/month)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd local-seo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Claude Code Integration

### Setting Up Claude Code

1. **Install Claude Desktop**
   - Subscribe to Claude Desktop ($20/month)
   - Download and install from [claude.ai](https://claude.ai)

2. **Install Claude Code CLI**
   ```bash
   # Search for the latest install command
   # This will install Claude Code and necessary packages
   curl -fsSL https://claude.ai/install-claude-code | bash
   ```

3. **Authenticate**
   - Log into Claude Desktop
   - Authorize Claude Code in your terminal

### Using Claude Code for SEO Optimization

#### Phase 1: Initial Setup
Ask Claude Code:
```
"Help me set up this local business website for maximum SEO. 
I want to rank for local services in [Your City]. 
What should I customize first?"
```

#### Phase 2: Keyword Research
```
"Find me 25-50 keywords for a [type of business] in [Your City]. 
Focus on high-intent keywords where people are ready to take action."
```

#### Phase 3: Content Generation
```
"Go super deep on this service page. Map out how we can outrank all 
competition on 'diesel services in [Your City]' search terms. 
Include local landmarks, unique location info, and common local issues."
```

#### Phase 4: Technical SEO
```
"Go through this website in extreme detail. Use ultra think command, 
find all technical and on-page SEO issues and opportunities so I can 
dominate the local market."
```

#### Phase 5: Sub-Agents for Parallel Tasks
```
"Launch three different sub-agents: one to find content opportunities, 
one to analyze my competitors, and one to identify all the other 
fixes I should be doing on my website."
```

## 📱 SEO Features Built-In

### Technical SEO
- ✅ Next.js App Router for optimal performance
- ✅ Automatic sitemap generation
- ✅ Robots.txt with AI/LLM crawling permissions
- ✅ LLM.txt for ChatGPT/Claude visibility
- ✅ Schema.org structured data
- ✅ Open Graph and Twitter Card meta tags
- ✅ Canonical URLs
- ✅ Semantic HTML structure

### Local SEO
- ✅ Local business schema markup
- ✅ Geographic meta tags
- ✅ Service area pages
- ✅ Location-specific content
- ✅ Local phone numbers and addresses
- ✅ Service area mapping

### Performance
- ✅ Tailwind CSS for optimized styling
- ✅ Next.js image optimization
- ✅ Font optimization
- ✅ Mobile-first responsive design

## 🎯 Customization Guide

### 1. Business Information
Update these files with your business details:
- `src/lib/seo-config.ts` - Business name, contact info, location
- `src/app/layout.tsx` - Default SEO settings
- All page components - Replace placeholder text

### 2. Local Keywords
Replace `[Your City]` and `[Your State]` with actual location:
- Use Claude Code to find local keywords
- Include neighborhood names and landmarks
- Add local business associations

### 3. Services
- Create new service pages in `src/app/services/`
- Use Claude Code to generate detailed content
- Include local-specific information

### 4. Images
- Add your business photos to `public/` directory
- Optimize images for web (WebP format recommended)
- Include alt text with local keywords

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically on every push

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 SEO Monitoring

### Tools to Use
- **Google Search Console** - Monitor rankings and indexing
- **Google PageSpeed Insights** - Performance optimization
- **SEMrush** - Competitor analysis and technical audits
- **Screaming Frog** - Technical SEO audits

### Claude Code Commands for Monitoring
```
"Analyze this Google PageSpeed Insights report and fix all issues"
"Review this SEMrush technical audit and implement the fixes"
"Check for missing alt text and meta descriptions across the site"
```

## 🔍 Advanced Claude Code Prompts

### Content Optimization
```
"Rewrite this service page to target 'emergency [service] [city]' 
keywords. Make it compelling for people in urgent situations."
```

### Competitor Analysis
```
"Analyze these competitor websites and identify content gaps 
we can fill to outrank them for local searches."
```

### Technical Improvements
```
"Audit this website for Core Web Vitals and implement all 
necessary optimizations for better Google rankings."
```

## 📈 Local SEO Strategy

### 1. Google Business Profile
- Set up and optimize your GMB listing
- Ensure consistency with website information
- Encourage customer reviews

### 2. Local Citations
- Consistent NAP (Name, Address, Phone) across directories
- Local business directories
- Industry-specific directories

### 3. Local Content
- Neighborhood-specific service pages
- Local event participation
- Community involvement content

### 4. Internal Linking
- Link between service pages
- Link to location pages
- Use local anchor text

## 🎨 Design Customization

### Tailwind CSS Classes
The website uses Tailwind CSS for styling. Customize:
- Colors in `tailwind.config.js`
- Typography in component files
- Layout spacing and components

### Component Structure
- `src/app/layout.tsx` - Main layout and SEO
- `src/app/page.tsx` - Homepage
- `src/app/services/` - Service pages
- `src/lib/seo-config.ts` - SEO configuration

## 📚 Resources

### Claude Code Documentation
- [Claude Desktop](https://claude.ai)
- [Claude Code CLI](https://claude.ai/docs/claude-code)

### SEO Resources
- [Google SEO Guide](https://developers.google.com/search/docs)
- [Local SEO Guide](https://developers.google.com/search/docs/advanced/local-seo)
- [Core Web Vitals](https://web.dev/vitals/)

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)

## 🤝 Support

### Using Claude Code
- Ask specific questions about your local market
- Request technical SEO implementations
- Get content optimization suggestions

### Development Issues
- Check Next.js documentation
- Review Tailwind CSS classes
- Verify SEO configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Remember**: The key to success with Claude Code is asking the right questions. Be specific about your local market, target keywords, and business goals. Claude Code will help you implement the technical and content optimizations needed to dominate local search results.
