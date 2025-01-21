import { Thumbnails } from "./thumbnails.model";

export interface VideoItem {
    kind: string;
    etag: string;
    id: string;
    snippet: VideoSnippet;
    statistics: VideoStatistics;
  }
  
  export interface VideoSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
  }
  
  export interface Localized {
    title: string;
    description: string;
  }

  export interface VideoStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  }