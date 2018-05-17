import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService, BuiltInOptions } from 'ngx-bootstrap-modal';
import { TreeNode } from '../domain/tree-node/tree-node';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DocumentService } from '../service/document.service';
import { DataService } from '../service/data.service';
import * as $ from 'jquery';

export interface newFileModel {
	title: string;
	message: string;
	nodes: TreeNode[];
	newFilePath: string;
	userId: number;

}

@Component({
	selector: 'app-new-file-dialog',
	templateUrl: './new-file-dialog.component.html',
	styleUrls: ['./new-file-dialog.component.css']
})

export class NewFileDialogComponent extends DialogComponent < newFileModel, null > implements newFileModel, OnInit {

		title: string;
		message: string;
		nodes: TreeNode[];
		newFilePath: string = "";
		pathNamesNumber: number = 0;
		selectedNodeStack: any[] = [];
		messageArray: string[] = [];
		regexp: string;
		oldChar: string;
		type: String = "";
		allTypes: string[];
		obj: any;
		userId: number;
		test: string;
		profile: string;
		pathStack: TreeNode[] = [];
		rootSet = false;
		pid: number = 0;
		pList: string[] = [];
  		selectedNode: TreeNode = new TreeNode();
  
		constructor(dialogService: DialogService,
			private dataService: DataService,
			private documentService: DocumentService) {
			super(dialogService);
		}

		ngOnInit() {
			this.userId = this.dataService.user.id;
			this.selectedNode.children=this.nodes;
			this.regexp = "\w";
			this.allTypes = ["folder", "text"];
		}

		addPath(path: TreeNode) {
			var pathNames = this.newFilePath.split("/");
			this.selectedNode = path;
			this.newFilePath += path.text + '/';
			this.pathNamesNumber = pathNames.length + 1;
			this.selectedNodeStack[this.pathNamesNumber] = path;
		}

		changePath(event: any) {
			var inputChar = event.keyCode || event.which;
		}

		inputEnter(inputChar) {
			return inputChar == 13;
		}
		
		ifButtonShow(nd:TreeNode){
			return nd.type==this.allTypes[0];
		}

		showError(msg: string) {
			this.dialogService.show(<BuiltInOptions>{  
	          content: msg,
	          icon: 'error',
	          size: 'sm',
	          showCancelButton: false
	      	})
		}
	
	ensure(){
		var r = /([\s\\]|\/{2,})/;
		if(this.type == ""){
			this.showError("类型是必填项!");
		}else if(this.newFilePath == ""){
			this.showError("文件路径是必填项");
		}else if(r.test(this.newFilePath)){
			this.showError("文件路径不能有空格,回车,Tab,\或连续/");
		}else{
			this.checkPath();
			if(this.pList.length == 0){
				this.showError("请检查文件路径最后是否有文件名");
				return
			}
			this.obj = {
				"path":this.pList,
				"type":this.type,
				"title":this.text,
				"profile":this.profile,
				"userId":this.userId,
				"pid":this.pid
			};
			this.documentService.createNewFile(this.obj).subscribe(res=>{
				this.close(res);
			},err=>{
				console.log(err);
				this.showError("服务认证错误,请稍后再试");
			});
		}
	}
	
	checkPath(){
		var pathList1 = this.newFilePath.split("/");
		var pathList:string[] = [];
		var nowPath1:TreeNode[] = this.dataService.documents;
		for(let a in pathList1){
			if(pathList1[a] != '' && pathList1[a] != '/'){
				pathList.push(pathList1[a]);
			}
		}
		var num = 0;
		for(let a in pathList){
				var ifFind:boolean = false;
				if(nowPath1.length > 0){
					for(var cnowPath in nowPath1){
						if(nowPath1[cnowPath]["text"] == pathList[a]){
							ifFind = true;
							this.pid = nowPath1[cnowPath]["id"];
							nowPath1 = nowPath1[cnowPath].children;
							break;
						}
					}
				}else{
					break;
				}
				if(!ifFind){
					break;
				}else{
					++num;
				}
		}
		if(num<(pathList.length)){
			this.pList = pathList.slice(num,pathList.length);
		}
	}
}