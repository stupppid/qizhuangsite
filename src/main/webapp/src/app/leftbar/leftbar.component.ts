import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../domain/leftbutton/button';

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
	
  constructor( private router:Router ) { 
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
  
  goHref(btn : Button){
  	if(!btn.ifActive){
  		alert(btn.unActiveAlert);
  		return;
  	}
		if(this.ifButtonNotLast(btn)){
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
		}else{
			this.router.navigate([btn.href]);
		}
  }
  
  ifButtonNotLast(btn : Button){
  	return (btn.href == "" || btn.href == "#")&&btn.subButton.length>0;
  }
  

}
