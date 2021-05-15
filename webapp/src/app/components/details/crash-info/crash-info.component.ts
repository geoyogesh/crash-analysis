import { Component, OnInit } from '@angular/core';
import { ListItem, TableHeaderItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-crash-info',
  templateUrl: './crash-info.component.html',
  styleUrls: ['./crash-info.component.scss']
})
export class CrashInfoComponent implements OnInit {

  emptyModel = new TableModel();

  constructor() { }

  ngOnInit() {
    this.emptyModel.header = [
      new TableHeaderItem({data: "Name"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
    ];
	}

  items: ListItem[] = [
		{ content: "one", selected: false },
		{ content: "two", selected: true },
		{ content: "three", selected: false },
		{ content: "four", selected: false }
	];

}
