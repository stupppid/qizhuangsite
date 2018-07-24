import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DialogComponent, DialogService, BuiltInOptions } from 'ngx-bootstrap-modal';
import { DataService } from '../service/data.service';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-trader-data',
  templateUrl: './trader-data.component.html',
  styleUrls: ['./trader-data.component.css']
})
export class TraderDataComponent implements OnInit {
	name:string;
	ruleText:string;
	
	constructor(private dialogService:DialogService,
							private dataService:DataService) {
	}

	ngOnInit() {
		this.ruleText = "TEST TEXT ";
	}
	
	createNewSystemDialog(){
		alert('开发中');
	}
	
	selectSymbol(obj:any){
		console.log(obj);
	}
}
