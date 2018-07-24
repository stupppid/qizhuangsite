import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-trader-data-now',
	templateUrl: './trader-data-now.component.html',
	styleUrls: ['./trader-data-now.component.css']
})
export class TraderDataNowComponent implements OnInit {
	
	@Output() selects = new EventEmitter < any > ();
	s: any;
	asks: any[];
	toolPage: any; //在websocket里,不加就编译不出来
	websocketIp: string;
	preAsks: any[];
	searchedSymbol: string;
	constructor() {}

	ngOnInit() {
		this.websocketIp = environment.websocketIp;
		if(typeof(WebSocket) == "undefined" || typeof(WebSocket) == null) {
			alert("您的浏览器不支持WebSocket,无法显示实时信息!");
			return;
		}
		if(environment.production==false){
			this.asks = [{ a: 0.97304, s: "AUDCADs" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },
			{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },
			{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },
			{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },
			{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" },{ a: 0.97304, s: "AUDCAD" }];
		}else{
			this.asks = [];
		}
		
		this.s = new WebSocket("ws://" + this.websocketIp + ":80/mt4Data");
		this.s.onopen = function() {};
		this.s.toolPage = this;
		this.s.onmessage = this.handleData;
	}

	handleData(msg) {
		var newAsk = JSON.parse(msg.data).p;
		if(this.toolPage.asks.length <= 0) {
			this.toolPage.asks = newAsk;
		} else {
			var j = 0;
			if(newAsk.length == 0) {
				return;
			}
			for(var i in this.toolPage.asks) {
				if(this.toolPage.asks[i].s == newAsk[j].s) {
					this.toolPage.asks.splice(i, 1, newAsk[j]);
					++j;
				}
				if(newAsk.length <= j) {
					break;
				}
			}
		}
	}

	findTheSymbolInList(event: any) {
		for(let i in this.asks) {
			if(this.searchedSymbol.toUpperCase() == this.asks[i].s.toUpperCase()) {
				document.getElementById(this.asks[i].s).style.backgroundColor = "red";
			}
		}
	}
	
	selectSymbol(obj:any){
		this.selects.emit(obj);
	}
	
}