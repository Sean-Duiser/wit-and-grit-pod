# Wit & Grit Podcast Website

A modern, SEO-optimized podcast website for Wit & Grit built with Next.js, React, and Tailwind CSS.

## Features

- YouTube integration (auto-import episodes)
- Individual episode pages with timestamps and show notes
- Host profiles and about section
- Sponsorship/advertiser page
- VoicemailWidget integration ready (SpeakPipe)
- Listener reviews section
- Responsive design for all devices
- SEO-optimized with metadata and schema markup
- Fast static generation

## Project Structure

```
wit-and-grit-podcast/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── episodes/          # Episodes pages
│   ├── hosts/             # Hosts page
│   ├── about/             # About page
│   └── advertise/         # Sponsorship page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── EpisodeCard.tsx
│   ├── VoicemailWidget.tsx
│   └── ListenerReviews.tsx
├── lib/                   # Utility functions
│   ├── config.ts         # Site configuration
│   └── youtube.ts        # YouTube API integration
├── data/                  # Data files
│   └── episodes.ts       # Episode metadata and timestamps
└── public/               # Static files
    └── images/
```

## Setup & Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### YouTube API Setup

To enable live YouTube integration:

1. Get your YouTube API key from Google Cloud Console
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_YOUTUBE_API_KEY=your_key_here
   ```
3. Update `YOUTUBE_CHANNEL_ID` in `lib/config.ts` with your channel ID

### Site Config

Edit `lib/config.ts` to:
- Update host information
- Add podcast platform links
- Configure radio stations
- Set sponsorship contact email

### Episodes Data

Add episode show notes, timestamps, and highlights to `data/episodes.ts`

## Voicemail Integration

Set up SpeakPipe at: https://speakpipe.com

- Update `siteConfig.links.voicemail` in `lib/config.ts` with your SpeakPipe URL
- VoicemailWidget component will embed the recording button

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- GitHub Pages
- AWS Amplify
- Digital Ocean

## SEO Optimization

- Dynamic meta tags per page
- Automatic sitemap generation
- Schema markup for episodes
- Open Graph tags for social sharing
- Lazy-loaded images
- Fast page load times

## Roadmap

- [ ] Dynamic episode pages from YouTube API
- [ ] Podcast search/filter functionality  
- [ ] Newsletter signup integration
- [ ] Transcript/chapter support
- [ ] Merchandise integration
- [ ] Member/Premium content support
- [ ] Analytics integration

## Support

For issues or feature requests, contact: contact@witandgritpodcast.com

---

**Stats + Intuition. That's Wit & Grit.**
