import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-crash-info',
  templateUrl: './crash-info.component.html',
  styleUrls: ['./crash-info.component.scss']
})
export class CrashInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: ListItem[] = [
		{ content: "one", selected: false },
		{ content: "two", selected: true },
		{ content: "three", selected: false },
		{ content: "four", selected: false }
	];

}
