import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.css']
})
export class DocumentContainerComponent implements OnInit {

	@Input() data:String;
  constructor() { }

  ngOnInit() {
  }

}
