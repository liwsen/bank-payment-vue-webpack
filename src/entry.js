require('./css/style.css');
var all_bank_list = require('./all_bank_list.js')();
var my_bank_list = require('./my_bank_list.js')();

window.onload = function(){
	var app = new Vue({
		el: '#app',
		data: {
			cardtype: 'c',// 选择银行卡类型
			cardbankname: '',// 选择银行名称
			cardbank: '',// 选择银行编号
			allbanklist: null,// 所有银行列表
			mybanklist: null,// 我的银行卡列表
			showbankbox: false,// 是否显示所有银行列表
			paymentblockshow: false// 是否显示新添加银行卡付款表单
		},
		methods: {
			checkedCardType: function(event){
				this.cardtype = event.target._value;
			},
			checkedCardBank: function(item,event){
				this.showbankbox = false;
				this.cardbankname = item.name +'('+ item.code +')';
				this.cardbank = item.code;
			},
			// 所有银行列表
			getAllBankList: function(){
				this.showbankbox = true;
				this.allbanklist = all_bank_list;
			},
			// 我的银行卡数据
			getMyBankList: function(){
				this.mybanklist = my_bank_list;
			}
		},
		filters: {
		    toUpperCase: function (value) {
		    	if (!value) return '';
		    	return value.toString().toUpperCase();
		    }
		}
	});
	app.getMyBankList();
	// 表单验证
	$("#payment").Validform();
};