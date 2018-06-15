export class Button{
	
	id : String;
	title : String;
	href : String;
	subButton : Button[];
	ifShow : Boolean = true;
	ifActive : Boolean = true;
	ifUserNeed : Boolean = false; 
	unActiveAlert : String = "维护中";
	constructor() {
		
	}
	
}
