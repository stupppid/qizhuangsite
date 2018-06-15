import { Injectable } from '@angular/core';
import { TreeNode } from '../domain/tree-node/tree-node';

@Injectable()
export class DataService {

	public documents:TreeNode[] = [];
	public user:any = {
		"id":0
	};
	
  constructor() { }
	
	
	clear(){
		this.documents = [];
		this.user = {"id":0};
	}
}
