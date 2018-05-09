import { Component, OnInit } from '@angular/core';
import { Button } from '../domian/leftbutton/button';
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

  constructor() { 
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
		if(this.ifButtonNotLast(btn)){
			$("#" + btn.id).toggle();
		}else{
			location.href = btn.href.toString();
		}
  }
  
  ifButtonNotLast(btn : Button){
  	return (btn.href == "" || btn.href == "#")&&btn.subButton.length>0;
  }
  

}
