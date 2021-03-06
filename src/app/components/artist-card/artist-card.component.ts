import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/Artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input("artist") artist: Artist = {
    id_artist: 0,
    artist: "",
    mbid: "",
    gender: "",
    country: "",
    youtube: "",
    instagram: "",
    twitter: "",
    facebook: "",
    website: "",
    spotify: "",
    cover: "",
    api_albums: "",
    songs: [],
  };

  constructor() { }

  ngOnInit(): void {
  }

  showResult(event: any) {
    console.log("Print by father");
  }

}
