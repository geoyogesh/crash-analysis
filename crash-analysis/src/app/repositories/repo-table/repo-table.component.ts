import {
	Component,
	OnInit,
	ViewChild,
	TemplateRef
} from '@angular/core';

import {
	Table,
	TableModel,
	TableItem,
	TableHeaderItem
} from 'carbon-components-angular';

@Component({
	selector: 'app-repo-table',
	templateUrl: './repo-table.component.html',
	styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
  emptyModel = new TableModel();

	constructor() { }

	ngOnInit() {
    this.emptyModel.header = [
      new TableHeaderItem({data: "Name"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
    ];
	}
}
