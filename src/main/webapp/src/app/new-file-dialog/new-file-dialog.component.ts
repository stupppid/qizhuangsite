import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';  
import { TreeNode } from '../domain/tree-node/tree-node';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
export interface newFileModel{
	title: string;  
  message: string;
  nodes:TreeNode[];
  newFilePath:string;
}
@Component({
  selector: 'app-new-file-dialog',
  templateUrl: './new-file-dialog.component.html',
  styleUrls: ['./new-file-dialog.component.css']
})
export class NewFileDialogComponent extends DialogComponent<newFileModel, null> implements newFileModel,OnInit {
  title: string;  
  message: string;  
  nodes:TreeNode[];
  selectedNode: TreeNode = new TreeNode();
  newFilePath:string = "";
  pathNamesNumber:number = 0;
  selectedNodeStack:any[] = [];
  messageArray:string[] = [];
  regexp:string;
  oldChar:string;
  
  constructor(dialogService: DialogService) {  
    super(dialogService);  
  }  
  
  ngOnInit(){
  	this.selectedNode.children=this.nodes;
  	this.regexp = "\w";
  }

	
	addPath(path:TreeNode){
		var pathNames = this.newFilePath.split("/");
		console.log(pathNames);
		this.selectedNode = path;
		this.newFilePath += path.text + '/';
		this.pathNamesNumber = pathNames.length + 1;
		this.selectedNodeStack[this.pathNamesNumber]=path;
		
	}
	
	changePath(event:any){
		var inputChar = event.keyCode || event.which;
	}
	inputEnter(inputChar){
		return inputChar==13;
	}
	
}
