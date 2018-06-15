import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DialogComponent, DialogService, BuiltInOptions } from 'ngx-bootstrap-modal';
import { DataService } from '../service/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-trader-data',
  templateUrl: './trader-data.component.html',
  styleUrls: ['./trader-data.component.css']
})
export class TraderDataComponent implements OnInit {

  s: any;
	asks:any[];
	name:string;
	toolPage:any;//在websocket里,不加就编译不出来
	preAsks:any[];
	searchedSymbol:string;
	ruleText:string;
	
	constructor(private dialogService:DialogService,
							private dataService:DataService) {
								
	}

	ngOnInit() {
		if(typeof(WebSocket) == "undefined" || typeof(WebSocket) == null) {
			alert("您的浏览器不支持WebSocket,无法显示实时信息!");
			return;
		}
		this.asks = [];
		this.s = new WebSocket("ws://127.0.0.1:80/mt4Data");
		
		this.s.onopen = function() {};
		
		this.s.toolPage = this;
		this.s.onmessage = this.handleData;
		this.ruleText = "TEST TEXT ";
	}
	
	findTheSymbolInList(event:any){
		for(let i in this.asks){
			if(this.searchedSymbol.toUpperCase() == this.asks[i].s.toUpperCase()){
				document.getElementById(this.asks[i].s).style.backgroundColor="red";
			}
		}
	}
	
	handleData(msg){
		var newAsk = JSON.parse(msg.data).p;
		if(this.toolPage.asks.length <= 0){
			this.toolPage.asks = newAsk;
		}else{
			var j = 0;
			if(newAsk.length == 0){
				return;
			}
			for(var i in this.toolPage.asks){
				if(this.toolPage.asks[i].s == newAsk[j].s){
					this.toolPage.asks.splice(i,1,newAsk[j]);
					++j;
				}
				if(newAsk.length <= j){
					break;
				}
			}
		}
	}
	
	differColor(i:number){
		if(i % 2 != 0){
			return "#F9F9F9";
		}else{
			return "#E0E0E0";
		}
	}
	
	selectSymbol(obj:any){
		console.log(obj.s,obj.a);
	}
	
	createNewSystemDialog(){
		alert('开发中');
	}
}
