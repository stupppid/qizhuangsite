export class Button{
	
	id : String;
	title : String;
	href : String;
	subButton : Button[];
	ifShow : Boolean = true;
	ifActive : Boolean = true;
	unActiveAlert : String = "维护中";
	constructor() {
		
	}
	
}
