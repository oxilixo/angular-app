export interface Thumbnails {
    default: ThumbnailDetails;
    medium: ThumbnailDetails;
    high: ThumbnailDetails;
    standard: ThumbnailDetails;
    maxres: ThumbnailDetails;
  }

  export interface ThumbnailDetails {
    url: string;
    width: number;
    height: number;
  }