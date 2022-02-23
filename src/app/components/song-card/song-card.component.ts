import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/Song';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input("song") song: Song = {
    name: "",
    gender: "",
    imageUrl: "",
    stars: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
