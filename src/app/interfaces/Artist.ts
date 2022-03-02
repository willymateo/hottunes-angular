import { Song } from "./Song";

export interface HappiResponse {
    success: boolean;
    length:  number;
    result:  Artist;
}

export interface Artist {
  id_artist:  number;
  artist:     string;
  mbid:       string;
  gender:     string;
  country:    string;
  youtube:    string;
  instagram:  string;
  twitter:    string;
  facebook:   string;
  website:    string;
  spotify:    string;
  cover:      string;
  api_albums: string;
  songs: Song[];
}
