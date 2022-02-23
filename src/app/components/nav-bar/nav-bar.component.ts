import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/Artist';
import { Song } from 'src/app/interfaces/Song';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input("title") title: string = "";
  @Input("artists") artists: Artist[] = [];
  @Input("songs") songs: Song[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
