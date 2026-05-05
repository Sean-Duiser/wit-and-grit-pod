'use client';
import Link from 'next/link';

export interface EpisodeCardProps {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  topics: string[];
}

export default function EpisodeCard({ id, youtubeId, title, description, thumbnail, publishedAt, topics }: EpisodeCardProps) {
  const episodeUrl = `/episodes/${youtubeId}`;
  const displayDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/50 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <a
          href={`https://youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </a>
        {/* Topic pills overlaid on image */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {topics.slice(0, 2).map((topic) => (
            <span key={topic} className="bg-black/70 backdrop-blur-sm text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">{topic}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={episodeUrl}>
          <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition duration-200 mb-2 line-clamp-2 leading-snug">{title}</h3>
        </Link>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-slate-600">{displayDate}</span>
          <Link href={episodeUrl} className="text-xs font-bold text-yellow-400 hover:text-yellow-300 transition uppercase tracking-wider">
            Show Notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
