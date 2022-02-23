import { Song } from "./Song";

export interface Artist {
  name: string,
  imageUrl: string,
  songs: Song[];
}
