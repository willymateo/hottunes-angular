import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/Artist';

@Component({
  selector: 'app-artists-chart',
  templateUrl: './artists-chart.component.html',
  styleUrls: ['./artists-chart.component.css']
})
export class ArtistsChartComponent implements OnInit {
  @Input("artists") artists: Artist[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
