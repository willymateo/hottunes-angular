import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output("clickBtnPlay") clickBtnPlay = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  playHandler() {
    console.log("Print by son");
    this.clickBtnPlay.emit(this.song.name);
  }

}
