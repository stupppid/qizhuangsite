
import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { TreeNode } from './domain/tree-node/tree-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '奇状';
  ifSignIn :Boolean = false;
  documents:TreeNode[] = [];
  user:any = {};
  
  constructor(private dataService:DataService){
  	
  }
  
  signInInit(obj:any){
  	this.user = obj["user"];
  	this.documents = obj["documents"];
  	this.ifSignIn = true;
  	this.dataService.user = this.user;
  	this.dataService.documents = this.documents;
  	
  }
  
  logOutInit(obj:any){
  	this.ifSignIn = false;
  	this.dataService.clear();
  	location.href = "";
  }
}
