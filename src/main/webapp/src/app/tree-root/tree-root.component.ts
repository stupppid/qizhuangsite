import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../domain/tree-node/tree-node';
import * as $ from 'jquery';

@Component({
	selector: 'app-tree-root',
	templateUrl: './tree-root.component.html',
	styleUrls: ['./tree-root.component.css']
})
export class TreeRootComponent implements OnInit {

	@Input() nodes: TreeNode[];
	@Input() depth: Number = 0;
	@Output() select = new EventEmitter < TreeNode > ();
	@Output() refactor = new EventEmitter < TreeNode >();
	childNd:TreeNode = null;

	constructor() {}

	ngOnInit() {
	}

	isNotLast(nd) {
		return nd.children != null && nd.children.length > 0;
	}
	
	isNotFirst(nd){
		
	}

	changeSelectedNode(nd: TreeNode) {
		if(!this.isNotLast(nd)) {
			this.select.emit(nd);
		} else {
			nd.showChildren = !nd.showChildren;
		}
	}

	selectc(nd: TreeNode, type: String) {
		this.select.emit(nd);
	}

	crefactor(nd: TreeNode) {
		this.refactor.emit(nd);
	}
	
	colorDependOnType(tp:string){
		var specialStyle = "";
		if(tp == "folder"){
			specialStyle = "lightskyblue";
		}else if(tp == "text"){
			specialStyle = "white";
		}
		return specialStyle;
	}
	
	childRefactor(node:TreeNode){
		this.refactor.emit(node);
	}
	
	getNum(nd:TreeNode){
		if(nd.children == null || nd.children.length < 1){
			return 'empty';
		}else{
			return nd.children.length + ' files';
		}
	}
}