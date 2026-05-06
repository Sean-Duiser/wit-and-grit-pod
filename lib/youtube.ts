import axios from 'axios';
import { YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY } from './config';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelId: string;
  viewCount: string;
}

export async function getLatestVideos(maxResults = 20): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    return getMockVideos();
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        channelId: YOUTUBE_CHANNEL_ID,
        part: 'snippet',
        order: 'date',
        maxResults,
        type: 'video',
      },
    });

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      channelId: item.snippet.channelId,
      viewCount: '',
    }));
  } catch (error: any) {
    console.error('YouTube API error:', error?.response?.data || error?.message || error);
    return getMockVideos();
  }
}

function getMockVideos(): YouTubeVideo[] {
  return [
    {
      id: 'e3hpgrh',
      title: 'NFL Draft 2026 Prospects, F1 Controversy & NFL Media Scandal',
      description: 'The NFL Draft 2026, Formula 1 controversy, and an NFL media scandal headline this episode of Wit & Grit with Ian Price and Sean Duiser.',
      thumbnail: 'https://img.youtube.com/vi/e3hpgrh/maxresdefault.jpg',
      publishedAt: '2026-04-12T12:00:00Z',
      channelId: YOUTUBE_CHANNEL_ID,
      viewCount: '15000',
    },
  ];
}
