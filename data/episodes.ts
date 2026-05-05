export interface EpisodeShowNotes {
  id: string;
  slug: string;
  youtubeId: string;
  title: string;
  description: string;
  publishedAt: string;
  topics: string[];
  timestamps: {
    time: string;
    label: string;
  }[];
  highlights: string[];
}

export const episodesData: EpisodeShowNotes[] = [
  {
    id: '1',
    slug: 'nfl-draft-2026',
    youtubeId: 'e3hpgrh',
    title: 'NFL Draft 2026 Prospects, F1 Controversy & NFL Media Scandal',
    description: 'The NFL Draft 2026, Formula 1 controversy, and an NFL media scandal headline this episode.',
    publishedAt: '2026-04-12',
    topics: ['NFL', 'F1', 'Sports Media'],
    timestamps: [
      { time: '00:00', label: 'Intro' },
      { time: '02:00', label: 'F1 2026 controversy' },
      { time: '33:00', label: 'NFL Draft 2026 overview' },
    ],
    highlights: [
      'F1 2026 regulations causing driver backlash',
      'NFL Draft 2026 top prospects',
    ],
  },
];
