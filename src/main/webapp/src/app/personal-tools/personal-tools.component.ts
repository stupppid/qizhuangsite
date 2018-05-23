import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-personal-tools',
  templateUrl: './personal-tools.component.html',
  styleUrls: ['./personal-tools.component.css']
})
export class PersonalToolsComponent implements OnInit {

	@Input() data:any;
  constructor() { }

  ngOnInit() {
  	
  }
	
}
