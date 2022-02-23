import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input("title") title: string = "";
  author: string = "Willy Mateo Espinoza @ DarkOs";

  constructor() { }

  ngOnInit(): void {
  }

}
