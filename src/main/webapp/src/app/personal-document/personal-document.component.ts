declare var require: any;

import { Component, OnInit,Input } from '@angular/core';
import { TreeNode } from '../domain/tree-node/tree-node';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
import { DialogService} from "ngx-bootstrap-modal";
import { NewFileDialogComponent } from '../new-file-dialog/new-file-dialog.component'

@Component({
	selector: 'app-personal-document',
	templateUrl: './personal-document.component.html',
	styleUrls: ['./personal-document.component.css']
})
export class PersonalDocumentComponent implements OnInit {

	nodes: TreeNode[];
	rawData: String;
	showData: String;
	title: String;
	edit: Boolean = false;
	converter: any;
	showDataClass: String;
	height: number;
	@Input() data:any;
	constructor(public dialogService: DialogService) {}
	show() {
		this.dialogService.addDialog(NewFileDialogComponent, {
			title: '新建文件',
			message: '新建文件',
			nodes: this.nodes
		}).subscribe((path) => {
			console.log(path);
		});
	}

	ngOnInit() {
		this.nodes = [{
				id: "p1",
				objectId: "",
				text: "Parent 1",
				showChildren: true,
				children: [{
						id: "c1",
						text: "Child 1",
						showChildren: false,
						objectId: "",
						children: [{
								id: "g1",
								text: "孙子 1",
								showChildren: true,
								objectId: "",
								children: null
							},
							{
								id: "g2",
								text: "Grandchild 2",
								showChildren: true,
								objectId: "",
								children: null
							}
						]
					},
					{
						id: "c2",
						text: "Child 2",
						showChildren: true,
						objectId: "",
						children: null
					}
				]
			},
			{
				id: "p2",
				text: "Parent 2",
				showChildren: false,
				objectId: "",
				children: null
			}
		];

		this.rawData = '#abc';
		this.title = "test";
		this.init();
	}

	init() {
		var showdown = require('showdown');
		this.converter = new showdown.Converter();
		this.refreshHTML();
		this.changeWidth();
		this.height = $("#htmlPanel").height();
	}

	setPanelHeight(add: number) {
		this.height = this.height + add;
		$("#textPanel").height(this.height);
	}

	refreshHTML() {
		this.showData = this.converter.makeHtml(this.rawData);
	}
	select(nd: TreeNode) {
		if(nd == null) {
			return;
		} else {
			console.log(nd);
		}
	}

	editDoc() {
		this.edit = !this.edit;
		this.changeWidth();
	}

	changeWidth() {
		if(this.edit) {
			this.showDataClass = "col-6";
		} else {
			this.showDataClass = "col-12";
		}
	}

	deleteDoc() {}

	saveDoc() {}

	newDoc() {
		this.show()
	}

	showNewDialog() {

	}

}