import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService, BuiltInOptions } from 'ngx-bootstrap-modal';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

export interface signUpModel {
	title: string;
	type: string;
}

@Component({
	selector: 'app-sign-up-dialog',
	templateUrl: './sign-up-dialog.component.html',
	styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent extends DialogComponent < signUpModel, null > implements OnInit, signUpModel {
		title: string;
		type: string;
		id: string;
		mail: string;
		phoneNumber: string;
		password: string = "";
		passwordEnsure: string = "";
		passwordWrongMsg: string = "";
		typeObj: any = {
			"signIn": "signIn",
			"signUp": "signUp"
		}

		constructor(dialogService: DialogService, private userService: UserService) {
			super(dialogService);
		}

		ngOnInit() {}

		ifSignIn() {
			return this.type == this.typeObj["signIn"];
		}

		judgeId() {
			if(this.matchMail()) {
				this.mail = this.id;
				this.phoneNumber = null;
			} else if(this.matchPhoneNumber()) {
				this.phoneNumber = this.id;
				this.mail = null;
			} else {
				this.passwordWrongMsg = "账号格式不正确";
				return false;
			}
			return true;
		}

		judgePassword() {
			if(!this.judgeId()) {
				return false;
			}
			var pattern = /[\w`~!@#$%^&*()+=|:;<>,.\/?\{\}\[\]\"\'\-\\]+/g;
			var matches = this.password.match(pattern);
			if(matches == null || matches.length > 1 || matches.length == 0 ||
				matches[0] != this.password || this.password.length > 18 || this.password.length < 8) {
				this.passwordWrongMsg = "密码不能为空且不能输入特殊字符 8-18位";
				return false;
			} else if(this.password != this.passwordEnsure) {
				this.passwordWrongMsg = "两次输入密码不一致";
				return false;
			}
			return true;
		}

		ensure() {
			if(this.ifSignIn()) {
				if(this.judgeId()) {
					this.signIn();
				} else {
					this.showError(this.passwordWrongMsg);
				}
			} else {
				if(this.judgePassword()) {
					this.signUp();
				} else {
					this.showError(this.passwordWrongMsg);
				}
			}
		}

		signIn() {
			this.userService.signIn({
				phoneNumber: this.phoneNumber,
				mail: this.mail,
				password: this.password
			}).subscribe(res => {
				if(res == null || res["errorMsg"] == null || res["errorMsg"] != "") {
						this.showError(res["errorMsg"].toString());
					} else {
						this.doPre(res);
					}
				},
				err => {
					console.log(err);
					this.showError("服务认证错误,请稍后再试");
				}
			)
		}
		
		doPre(res){
			this.close(res);
		}

		signUp() {
			this.userService.signUp({
				phoneNumber: this.phoneNumber,
				mail: this.mail,
				password: this.password
			}).subscribe(res => {
					if(res == null || res["errorMsg"] == null || res["errorMsg"] != "") {
						this.showError(res["errorMsg"].toString());
					} else {
						this.showSuccess(res);
					}
				},
				err => {
					console.log(err);
					this.showError("服务认证错误,请稍后再试");
				}
			)
		}

		matchMail() {
			var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g;
			return pattern.test(this.id);
		}

		matchPhoneNumber() {
			var pattern = /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/g;
			return pattern.test(this.id);
		}

		showError(msg: string) {
			this.dialogService.show(<BuiltInOptions>{  
          content: msg,  
          icon: 'error',  
          size: 'sm', 
          showCancelButton: false  
	      })  
		}
		
		showSuccess(res){
			this.close(res);
		}
		
}