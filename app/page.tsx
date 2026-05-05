import Hero from '@/components/Hero';
import EpisodeCard from '@/components/EpisodeCard';
import VoicemailWidget from '@/components/VoicemailWidget';
import ListenerReviews from '@/components/ListenerReviews';
import { getLatestVideos } from '@/lib/youtube';
import { episodesData } from '@/data/episodes';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.description}`,
};

export default async function Home() {
  const videos = await getLatestVideos(6);

  const episodes = videos.map((video) => {
    const showNotes = episodesData.find((e) => e.youtubeId === video.id);
    return {
      ...video,
      topics: showNotes?.topics || [],
    };
  });

  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6">
        {/* Voicemail Widget */}
        <VoicemailWidget />

        {/* Ian's Substack Block */}
        <div className="my-16 flex flex-col md:flex-row items-center gap-6 bg-slate-900 rounded-3xl p-8 border border-white/5">
          <div className="flex-1">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">Ian Price · Newsletter</p>
            <h2 className="text-3xl font-black text-white mb-3">All-In With Ian</h2>
            <p className="text-slate-400 max-w-lg">
              Full betting picks, F1 analysis, and sports breakdowns straight from Ian. Free on Substack — gambling content for entertainment only.
            </p>
          </div>
          <a
            href={siteConfig.links.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3 rounded-full bg-white text-slate-900 font-black text-sm hover:bg-yellow-400 transition"
          >
            Read on Substack →
          </a>
        </div>

        {/* Latest Episodes */}
        <div className="mb-16">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-4xl font-black uppercase tracking-tight">Latest Episodes</h2>
            <Link href="/episodes" className="text-sm text-yellow-400 hover:text-yellow-300 font-bold uppercase tracking-wider transition">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {episodes.slice(0, 3).map((episode) => (
              <EpisodeCard
                key={episode.id}
                id={episode.id}
                youtubeId={episode.id}
                title={episode.title}
                description={episode.description}
                thumbnail={episode.thumbnail}
                publishedAt={episode.publishedAt}
                topics={episode.topics}
              />
            ))}
          </div>
        </div>

        {/* Listener Reviews */}
        <ListenerReviews />
      </div>
    </>
  );
}
