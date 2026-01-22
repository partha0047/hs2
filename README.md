# Home Stays - Premium Editorial Homestay Website

A premium, boutique homestay marketing website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Features an editorial brochure-style design with muted sage/olive greens and warm cream backgrounds.

## Features

- **Premium Editorial Design**: Boutique, calm, editorial brochure aesthetic
- **Responsive Layout**: Mobile-first design that works on all devices
- **Property Showcase**: Beautiful property cards linking to detailed property pages
- **Smooth Animations**: Subtle Framer Motion animations with reduced-motion support
- **SEO Optimized**: Metadata, OpenGraph, Twitter cards, and JSON-LD structured data
- **Type-Safe**: Full TypeScript support throughout

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Framer Motion** for animations
- **Next/Image** for optimized images

## Getting Started

### Install Dependencies

```bash
npm install
```

### Add Images

Place your property images in the `public/images/` directory. See `public/images/README.md` for the required image list.

For development, you can use placeholder images from services like:
- `https://placehold.co/` 
- `https://picsum.photos/`

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── properties/
│       └── [id]/
│           └── page.tsx    # Property detail pages
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── container.tsx       # Layout container component
│   ├── section-title.tsx   # Section heading component
│   ├── navigation.tsx      # Main navigation
│   ├── hero-section.tsx     # Hero section with overlapping card
│   ├── feature-grid.tsx    # Three-column feature highlights
│   ├── suite-overlay-collage.tsx  # Suite cards over images
│   ├── testimonial-card.tsx       # Testimonial section
│   ├── premium-suite-section.tsx  # Premium suite showcase
│   └── gallery-grid.tsx    # Image gallery
├── src/
│   └── content/
│       └── site.ts         # All site content and configuration
└── public/
    └── images/            # Property images
```

## Customization

### Content

All content is managed in `src/content/site.ts`. Update:
- Property information
- Features
- Testimonials
- Navigation links
- Gallery images

### Colors

Colors are defined in `app/globals.css`:
- `cream`: #F4F0E8 (warm off-white background)
- `sage`: #D7DCCB (pale sage section backgrounds)
- `olive`: #3F4A43 (deep olive green accents)
- `charcoal`: #1E1E1E (dark text)

### Fonts

- **Headings**: Cormorant Garamond (serif, editorial style)
- **Body**: Inter (clean sans-serif)

Configured in `app/layout.tsx`.

## Design System Components

- `<Container />` - Centered container with max-width and padding
- `<SectionTitle />` - Consistent section headings with serif font
- `<FeatureGrid />` - Three-column feature layout
- `<SuiteOverlayCollage />` - Image cards with overlay information
- `<TestimonialCard />` - Quote section with avatar
- `<GalleryGrid />` - Responsive image grid

## Routes

- `/` - Homepage with all sections
- `/properties/[id]` - Individual property detail pages
  - `/properties/premium-suite`
  - `/properties/special-suite`
  - `/properties/couples-suite`

## SEO

- Metadata configured in `app/layout.tsx`
- OpenGraph tags for social sharing
- Twitter card support
- JSON-LD structured data (LodgingBusiness schema)
- Set `NEXT_PUBLIC_SITE_URL` environment variable for production

## Deployment to Vercel with Custom Domain

### Step 1: Deploy to Vercel

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Set Environment Variables** (if needed)
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` with your production URL (e.g., `https://yourdomain.com`)

### Step 2: Add Custom Domain

1. **In Vercel Dashboard**
   - Go to your project → Settings → Domains
   - Enter your custom domain (e.g., `yourdomain.com` or `www.yourdomain.com`)
   - Click "Add"

2. **Configure DNS Records**

   Vercel will show you the DNS records to add. You need to add these at your domain registrar:

   **For Root Domain (yourdomain.com):**
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

   **For WWW Subdomain (www.yourdomain.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or the CNAME shown in Vercel dashboard)

   **Alternative: Use CNAME for Root Domain (if your DNS provider supports it)**
   - Some providers (like Cloudflare) support CNAME flattening
   - Type: `CNAME`
   - Name: `@`
   - Value: `cname.vercel-dns.com`

3. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to propagate globally
   - Vercel will show "Valid Configuration" when DNS is correct
   - You can check status in Vercel dashboard

4. **SSL Certificate**
   - Vercel automatically provisions SSL certificates via Let's Encrypt
   - HTTPS will be enabled automatically once DNS is configured

### Step 3: Update Site URL (if needed)

If you set `NEXT_PUBLIC_SITE_URL` as an environment variable, update it to your custom domain:

```bash
# In Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Troubleshooting

- **DNS not resolving**: Wait 24-48 hours for propagation, or check DNS with tools like `dig` or `nslookup`
- **SSL not working**: Ensure DNS is correctly configured and wait for certificate provisioning
- **Subdomain issues**: Make sure both root and www are configured if you want both to work
- **Redirects**: Configure redirects in `vercel.json` if needed

### Example vercel.json (optional)

Create `vercel.json` in your project root for custom redirects:

```json
{
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

## License

MIT
