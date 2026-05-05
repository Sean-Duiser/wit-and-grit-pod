import EpisodeCard from '@/components/EpisodeCard';
import { getLatestVideos } from '@/lib/youtube';
import { episodesData } from '@/data/episodes';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: `Episodes | ${siteConfig.name}`,
  description: 'Browse all Wit & Grit episodes',
};

export default async function EpisodesPage() {
  const videos = await getLatestVideos(50);

  const episodes = videos.map((video) => {
    const showNotes = episodesData.find((e) => e.youtubeId === video.id);
    return {
      ...video,
      topics: showNotes?.topics || [],
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">All Episodes</h1>
      <p className="text-slate-400 mb-8">
        Watch and listen to all Wit & Grit episodes. Latest first.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode) => (
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

      {episodes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">
            No episodes found. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
