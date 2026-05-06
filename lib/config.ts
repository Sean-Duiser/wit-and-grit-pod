// Site Configuration
export const siteConfig = {
  name: 'Wit & Grit',
  description: 'Stats + Intuition: NFL, F1, NBA, and Pop Culture Analysis',
  url: 'https://witandgritpodcast.com',
  domain: 'witandgritpodcast.com',
  ogImage: '/og-image.jpg',
  links: {
    youtube: 'https://www.youtube.com/@WitAndGritPod',
    spotify: 'https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ',
    applePodcasts: 'https://podcasts.apple.com/podcast/wit-grit/id1234567890',
    substack: 'https://allinwithian.substack.com',
    voicemail: 'https://www.speakpipe.com/witandgrit',
  },
  radio: {
    stations: [
      { name: 'Sports Radio 101.1 FM', city: 'Roanoke' },
      { name: '107.5 FM', city: 'Lynchburg' },
    ],
  },
  hosts: [
    {
      name: 'Ian Price',
      role: 'Co-host, Stats & Analysis',
      bio: 'Hammered on sports with data-driven betting insights and F1 analysis.',
      image: '/images/ian-price.jpg',
      substack: 'https://allinwithian.substack.com',
    },
    {
      name: 'Sean Duiser',
      role: 'Co-host, Gut Instinct',
      bio: 'Brings the intuition, the passion, and the takes that stick.',
      image: '/images/sean-duiser.jpg',
    },
  ],
};

export const YOUTUBE_CHANNEL_ID = 'UCvLYGdxa0jDwqAIVST5Ou3w';
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
export const TOPICS = ['NFL', 'F1', 'NBA', 'Pop Culture', 'Betting', 'Sports Media', 'Misc'];
