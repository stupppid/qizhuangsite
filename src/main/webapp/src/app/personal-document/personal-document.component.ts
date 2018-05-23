import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../domain/tree-node/tree-node';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
import { DialogService, BuiltInOptions } from "ngx-bootstrap-modal";
import { NewFileDialogComponent } from '../new-file-dialog/new-file-dialog.component'
import { DataService } from '../service/data.service';
import { DocumentService } from '../service/document.service';
import { ConfirmComponent } from '../confirm/confirm.component';

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
	objectId: String;
	id: number;
	ifChanged: boolean = true;
	ifSelect:boolean;
	defaultRawData:String = '#请从资源管理器选择一个文件';
	row:number = 5;
	rowHeight:number = 15;
	initHeight:string = "450px";

	expandTextArea(){
		var height = this.row * this.rowHeight;
		this.initHeight = $("#textPanel").height() + height - 40 + "px";
	}
	
	reduceTextArea(){
		var height = this.row * this.rowHeight;
		this.initHeight = $("#textPanel").height() - height - 40  + "px";
	}
	
	constructor(private dialogService: DialogService,
		private dataService: DataService,
		private documentService: DocumentService) {}

	ngOnInit() {
		this.freshTree();
		this.rawData = this.defaultRawData;
		this.title = "";
		this.init();
	}

	init() {
		var showdown = require('showdown');
		this.converter = new showdown.Converter();
		this.refreshHTML();
		this.changeWidth();
		this.height = $("#htmlPanel").height();
		this.ifChanged = false;
		this.ifSelect = false;
	}

	setPanelHeight(add: number) {
		this.height = this.height + add;
		$("#textPanel").height(this.height);
	}

	refreshHTML() {
		this.ifChanged = true;
		this.showData = this.converter.makeHtml(this.rawData);
	}

	select(nd: TreeNode) {
		this.ifSelect = true;
		if(nd == null || nd.type == "folder" || this.objectId == nd["objectId"]) {
			return;
		} else {
			this.documentService.getDoc(nd["objectId"]).subscribe(res => {
				if(res == null) {
					this.showError("远程服务未找到该文件!");
				} else {
					if(this.ifChanged) {
						this.showConfirm(res,nd["id"]);
					} else {
						this.doCatchNewFile(res,nd["id"]);
					}
				}
			}, err => {
				console.log(err);
				this.showError("远程服务出错!");
			});
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
		if(!this.ifSelect){
			this.showError("该文档是界面初始文档不能删改!");
			return;
		}
		this.documentService.deleteDoc(this.id).subscribe(res => {
				if(res == null || res["errorMsg"] == null) {
						this.showError("服务器错误!");
					}else if(res["errorMsg"] != ""){
						this.showError(res["errorMsg"].toString());
					}else{
						var nd = this.findTreeNode(this.id,this.dataService.documents);
						if(nd != null){
							var num = 0;
							nd.forEach((o,i)=>{
								if(o["id"] == this.id){
									num = i;
									return;
								}
							});
							nd.splice(num,1);
						}else{
							this.showError("出现BUG!重新登录一下.");
						}
						this.rawData = this.defaultRawData;
						this.showData = this.converter.makeHtml(this.rawData);
						this.refreshHTML();
				        this.ifChanged = false;
				        this.ifSelect = false;
				        this.id = 0;
						this.showSuccess("删除成功");
					}
				},
				err => {
					this.showError("服务认证错误,请稍后再试");
				}
			);
	}
	
	findTreeNode(id:number,nodes:TreeNode[]){
		for(var nd in nodes){
			if(nodes[nd]["type"] != "folder"){
				if(nodes[nd]["id"] == id){
					return nodes;
				}else{
					continue;
				}
			}else if(nodes[nd]["children"]!= null && nodes[nd]["children"].length > 0){
				var q = this.findTreeNode(id,nodes[nd]["children"]);
				if(q != null){
					return q;
				}else{
					continue;
				}
			}else{
				return null;
			}
		}
	}

	saveDoc() {
		if(!this.ifSelect){
			this.showError("该文档是界面初始文档不能删改!");
			return;
		}
		this.documentService.saveDoc(this.objectId,this.rawData).subscribe(res => {
				if(res == null || res["errorMsg"] == null) {
						this.showError("服务器错误!");
					}else if(res["errorMsg"] != ""){
						this.showError(res["errorMsg"].toString());
					}else{
						this.showSuccess("保存成功");
					}
				},
				err => {
					this.showError("服务认证错误,请稍后再试");
				}
			);
		this.ifChanged = false;
	}

	newDoc() {
		var id = this.dataService.user["id"];
		this.dialogService.addDialog(NewFileDialogComponent, {
			title: '新建文件',
			message: '新建文件',
			nodes: this.nodes,
			userId: id
		}).subscribe((obj) => {
			if(obj != null) {
				this.freshTree();
			}else{
//				this.showError("创建失败!");
			}
		});
	}

	freshTree() {
		this.nodes = this.dataService.documents;
	}

	showError(msg: string) {
		this.dialogService.show(<BuiltInOptions>{  
	          content: msg,
	          icon: 'error',
	          size: 'sm',
	          showCancelButton: false
	      	})
	}
	
	showConfirm(res,id) {  
        this.dialogService.addDialog(ConfirmComponent, {  
            title: '确认?',  
            message: '是否保存当前文档?'  
        }).subscribe((isConfirmed) => {
            if(isConfirmed){
                this.saveDoc();
				this.doCatchNewFile(res,id);
            }else{
                this.doCatchNewFile(res,id);
            }
        });
    }
	
	doCatchNewFile(res,id){
		this.objectId = res['id'];
        this.rawData = res["content"];
        this.showData = this.converter.makeHtml(this.rawData);
        this.ifChanged = false;
        this.id = id;
	}
	
	showSuccess(msg:string){
		this.dialogService.show(<BuiltInOptions>{
          content: msg,  
          icon: 'success',  
          size: 'sm', 
          timeout:1000,
          showCancelButton: false
		});
	};
	
}