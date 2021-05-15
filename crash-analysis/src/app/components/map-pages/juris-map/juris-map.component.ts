import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juris-map',
  templateUrl: './juris-map.component.html',
  styleUrls: ['./juris-map.component.scss']
})
export class JurisMapComponent implements OnInit {

  layoutProps = {
    leftGutter: true,
    rightGutter: true,
    rowCondensed: false,
    gridCondensed: false,
    gutter: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
