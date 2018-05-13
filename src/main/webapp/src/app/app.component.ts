import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '奇状';
  ifSignIn :Boolean = false;
  documents:any[] = [];
  user:any = {};
  
  data:any = {};
  
  signInInit(obj:any){
  	this.user = obj["user"];
  	this.documents = obj["documents"];
  	this.ifSignIn = true;
  }
  
  logOutInit(obj:any){
  	this.user = {};
  	this.documents = [];
  	this.ifSignIn = false;
  	this.data = {};
  }
}
