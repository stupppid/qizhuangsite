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

	constructor() {}

	ngOnInit() {
	}

	isNotLast(nd) {
		return nd.children != null && nd.children.length > 0;
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

	rename(node) {
		console.log(node)
	}
	changeName(node) {

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
}