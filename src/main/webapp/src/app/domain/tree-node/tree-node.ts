export class TreeNode{
	id : number;
	text : String;
	children : TreeNode[];
	showChildren : Boolean = true;
	objectId : String;
	profile : string = "";
	changeTime: Date;
	createTime: Date;
	type:string;
	zindex: number;
	isRoot: boolean;
	userSet: any[] = [];
}
