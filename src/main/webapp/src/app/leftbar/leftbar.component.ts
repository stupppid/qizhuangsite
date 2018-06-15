import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../domain/leftbutton/button';
import { DataService } from '../service/data.service';
import { DialogService, BuiltInOptions } from "ngx-bootstrap-modal";
import * as $ from 'jquery';
import * as leftbutton from '../config/leftbar/leftbutton';
//declare var require: any;

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
	
	buttons : Button[];
	private lastButton : String;
	
  constructor( private router:Router ,
  	private dataService:DataService,
  	private dialogService:DialogService) {
  	this.buttons = leftbutton.leftbutton.buttons;
  	let btnTemp = this.buttons;
  	$(document).ready(function(){
  		btnTemp.forEach(function(item,index){
	  		$("#" + item.id).hide();
	  	})
  	});
  }

  ngOnInit() {
  }
  
  goHref(btn : Button,ifSub:boolean){
  	if(btn.ifUserNeed){
  		if(this.dataService.user.id == 0){
  			this.showError("请先登录!");
  			return;
  		}
  	}
  	if(!btn.ifActive){
  		alert(btn.unActiveAlert);
  		return;
  	}
		if(!ifSub){
			if(this.lastButton == btn.id){
				$("#" + this.lastButton).slideUp(200);
				this.lastButton = "";
				return;
			}
			if(this.lastButton != ""){
				$("#" + this.lastButton).slideUp(200);
			}
			try{
				$("#" + btn.id).toggle();
				this.lastButton = btn.id;
			}catch(e){
				console.log(e);
			}
		}
		this.router.navigate([btn.href]);
		
  }
  
  ifButtonNotLast(btn : Button){
  	return (btn.href == "" || btn.href == "#")&&btn.subButton.length>0;
  }
  
  showError(msg: string) {
			this.dialogService.show(<BuiltInOptions>{  
	          content: msg,
	          icon: 'warning',
	          size: 'sm',
	          showCancelButton: false
	      	})
		}
}
