import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService, BuiltInOptions } from 'ngx-bootstrap-modal';
import { TreeNode } from '../domain/tree-node/tree-node';
import { DataService } from '../service/data.service';
import { DocumentService } from '../service/document.service';

export interface refactorFileModel {
	title: string;
	message: string;
	nodes: TreeNode[];
	newFilePath: string;
	selectedNode: TreeNode;
	userId: number;
	oldPath: string;
}

@Component({
	selector: 'app-refactor-file-dialog',
	templateUrl: './refactor-file-dialog.component.html',
	styleUrls: ['./refactor-file-dialog.component.css']
})

export class RefactorFileDialogComponent extends DialogComponent < refactorFileModel, null > implements refactorFileModel, OnInit {

		selectedNode: TreeNode;
		selectedNodeBtns: TreeNode;
		title: string;
		message: string;
		nodes: TreeNode[];
		newFilePath: string = "";
		userId: number;
		oldPath: string;
		allTypes: string[];
		nowParent : TreeNode[];
		pid: number;
		pList : string[];

		constructor(dialogService: DialogService,
			private dataService: DataService,
			private documentService: DocumentService) {
			super(dialogService);
		}

		ngOnInit() {
			this.userId = this.dataService.user.id;
			this.selectedNodeBtns = new TreeNode();
			this.selectedNodeBtns.children = this.nodes;
			this.allTypes = ["folder", "text"];
		}

		changePath(event: any) {
			var inputChar = event.keyCode || event.which;
		}

		inputEnter(inputChar) {
			return inputChar == 13;
		}

		ifButtonShow(nd: TreeNode) {
			return nd.type == this.allTypes[0];
		}

		showError(msg: string) {
			this.dialogService.show(<BuiltInOptions>{  
	          content: msg,
	          icon: 'error',
	          size: 'sm',
	          showCancelButton: false
	      	})
		}
		
		addPath(nd:TreeNode){
			this.newFilePath += nd['text'] + '/';
			this.selectedNodeBtns = nd;
		}
		
		ensure(){
			if(this.newFilePath.toLowerCase() == 'null' ){
				//向上close到personaldocument
			}else{
				var r = /([\s\\]|\/{2,})/;
				var tmp = this.newFilePath.split("/");
				var maxLength = 42;
				if(r.test(this.newFilePath)){
					this.showError("文件路径不能有空格,回车,Tab,\或连续/");
				}else if(tmp[tmp.length-1].length > maxLength){
					this.showError("文件名不能超过"+ maxLength + "个字符");
				}
				else{
					this.pid = 0;
					this.checkPath();
					var op = this.oldPath.split("/");
					var np = this.newFilePath.split("/");
					var obj = {
						"path":this.pList,
						"ifRename":this.newFilePath.slice(this.newFilePath.length-1) != '/' && (op[op.length-1] != np[np.length-1]),
						"userId":this.userId,
						"id":this.selectedNode.id,
						"type":this.selectedNode.type,
						"pid":this.pid,
						"oldName":op[op.length-1]
					};
					
					var childPath = true;
					if(np.length > op.length){
						for(let a in op){
							if(np[a] == null){
								break;
							}
							if(op[a] != np[a]){
								childPath = false;
								break;
							}
						}
						if(childPath){
							this.showError("不能移到子路径");
							return;
						}
					}
					
					if(this.pList.length < 1 && obj["ifRename"]){
						this.showError("文件已存在,是否末尾少加了`/`?");
						return;
					}
					if(this.pList.length > 1 || (this.pList.length == 1 && (!obj["ifRename"]))){
						this.showError("该文件不存在,请新建该文件夹后再移动");
						return;
					}
					if((this.oldPath == this.newFilePath && obj["ifRename"]) || 
						(op[op.length-2] == np[np.length-2] && !obj["ifRename"]) || 
						((this.newFilePath==''||this.newFilePath == '/') && op.length==1)){
						this.showError("文件路径没有改变");
						return;
					}
					this.documentService.refactorDoc(obj).subscribe(res=>{
						this.changeDocumentInDataService(obj);
						this.close(res); 
					},err=>{
						this.showError("服务认证错误,请稍后再试");
					});
				}
			}
		}
		
		changeDocumentInDataService(obj){
			var nodes = this.dataService.documents;
			var old = this.findTreeNode(obj['id'],nodes);
			var tmp;
			for(let i in old){
				if(old[i]['id'] == obj['id']){
					tmp = old[i];
					old.splice(i,1);
					break;
				}
			}
			var aim = this.findTreeNode(obj['pid'],nodes);
			for(let j in aim){
				if(aim[j]['id'] == obj['pid']){
					aim[j].children.push(tmp)
				}
			}
		}
		
		findTreeNode(id:number,nodes:TreeNode[]){
			for(var nd in nodes){
				if(nodes[nd]["id"] == id){
					return nodes;
				}else if(nodes[nd]["children"]!= null && nodes[nd]["children"].length > 0){
					var q = this.findTreeNode(id,nodes[nd]["children"]);
					if(q != null){
						return q;
					}else{
						continue;
					}
				}else{
					continue;
				}
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
			this.nowParent = this.dataService.documents;
			for(let a in pathList){
					var ifFind:boolean = false;
					if(nowPath1.length > 0){
						for(var cnowPath in nowPath1){
							if(nowPath1[cnowPath]["text"] == pathList[a]){
								ifFind = true;
								this.pid = nowPath1[cnowPath]["id"];
								if(nowPath1[cnowPath].children == null){
									let t:TreeNode[] = [];
									nowPath1[cnowPath].children = t;
								}
								nowPath1 = nowPath1[cnowPath].children;
								this.nowParent = nowPath1;
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
			if(num<=(pathList.length)){
				this.pList = pathList.slice(num);
			}
		}
}