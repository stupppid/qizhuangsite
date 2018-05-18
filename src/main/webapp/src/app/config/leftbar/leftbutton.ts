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
			"unActiveAlert" : "维护中",
			"subButton":[],
			"href":"#"
		},
		{
			"id":"document",
			"title":"我的文档",
			"ifShow" : true,
			"ifActive" : true,
			"subButton":[
				{
					"id":"persopnalDocument",
					"title":"个人文档",
					"ifShow" : true,
					"ifActive" : true,
					"subButton":[],
					"href":"personalDocument"
				}
			],
			"href":"#"
		},
		{
			"id":"tool",
			"title":"我的工具",
			"ifShow" : true,
			"ifActive" : true,
			"subButton":[
				{
					"id":"date",
					"title":"财经日历",
					"ifShow" : true,
					"ifActive" : true,
					"subButton":[],
					"href":"personalTools"
				}
			],
			"href":"#"
		}
	]
}


