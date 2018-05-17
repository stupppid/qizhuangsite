import { Component, OnInit,Input } from '@angular/core';
import { TreeNode } from '../domain/tree-node/tree-node';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
import { DialogService} from "ngx-bootstrap-modal";
import { NewFileDialogComponent } from '../new-file-dialog/new-file-dialog.component'
import { DataService } from '../service/data.service';
import { DocumentService } from '../service/document.service';
declare var require: any;

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
	
	constructor(private dialogService: DialogService,
		private dataService:DataService,
		private documentService:DocumentService ) {}

	ngOnInit() {
		this.freshTree();
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

	deleteDoc() {
		
	}

	saveDoc() {
		
	}

	newDoc() {
		var id = this.dataService.user["id"];
		this.dialogService.addDialog(NewFileDialogComponent, {
			title: '新建文件',
			message: '新建文件',
			nodes: this.nodes,
			userId: id
		}).subscribe((obj) => {
			if(obj != null){
				this.dataService.documents; //前端更改信息
				this.freshTree();
				console.log(obj);
			}
			
		});
	}

	freshTree(){
		this.nodes = this.dataService.documents;
	}

}