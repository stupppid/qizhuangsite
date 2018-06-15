//完善个性化的话可以注册个类OnInit一下
export const leftbutton:any = {
	"name":"leftButton",
	"minColumn":8,
	"lockImagePath":"",
	"buttons":[
		{
			"id":"home",
			"title":"我的主页",
			"ifShow" : true,
			"ifActive" : true,
			"ifUserNeed" : false,
			"unActiveAlert" : "维护中",
			"subButton":[],
			"href":"#"
		},
		{
			"id":"document",
			"title":"我的文档",
			"ifShow" : true,
			"ifUserNeed" : false,
			"ifActive" : true,
			"href":"#",
			"subButton":[
				{
					"id":"persopnalDocument",
					"title":"个人文档",
					"ifShow" : true,
					"ifUserNeed" : true,
					"ifActive" : true,
					"subButton":[],
					"href":"personalDocument"
				}
			]
		},
		{
			"id":"tool",
			"title":"我的工具",
			"ifShow" : true,
			"ifUserNeed" : false,
			"ifActive" : true,
			"href":"personalTools",
			"subButton":[
				{
					"id":"data",
					"title":"交易数据",
					"ifShow" : true,
					"ifUserNeed" : true,
					"ifActive" : true,
					"subButton":[],
					"href":"personalTools/traderData"
				}
			]
		}
	]
}


