import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { TreeRootComponent } from '../tree-root/tree-root.component';
import { TreeNode } from '../domain/tree-node/tree-node';

@Component({
  selector: 'app-document-tree',
  templateUrl: './document-tree.component.html',
  styleUrls: ['./document-tree.component.css']
})
export class DocumentTreeComponent implements OnInit {

	ifDocumentTreeHide : Boolean = true;
	@Output() selectc = new EventEmitter<TreeNode>();
	@Output() refactor = new EventEmitter<TreeNode>();
	@Input() nodes : TreeNode[];
	hideString:String = "隐藏";
	showString:String = "资源管理器";
	
  constructor() { }

  ngOnInit() {
  	$("#hideString").html(this.showString);
  	$("#nodeRoot").slideToggle(0);
  	this.ifDocumentTreeHide = $("#hideString").html() == this.hideString;
  }
  
	hideDocumentTree(){
		$("#nodeRoot").slideToggle();
		if(this.ifDocumentTreeHide){
			$("#hideString").html(this.showString);
		}else{
			$("#hideString").html(this.hideString);
		}
		this.ifDocumentTreeHide = !this.ifDocumentTreeHide;
	}
	
	select2(nd:TreeNode){
		this.selectc.emit(nd);
	}
	
	crefactor(nd:TreeNode){
		this.refactor.emit(nd);
	}
}
