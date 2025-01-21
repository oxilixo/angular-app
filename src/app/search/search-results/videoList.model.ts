import { VideoItem } from '../search-item/videoItem.model';

export interface VideoListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
