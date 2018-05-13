import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogService,BuiltInOptions} from "ngx-bootstrap-modal";
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@Input() ifSignIn:Boolean;
	@Output() signInInit = new EventEmitter<any>();
	@Output() logOutInit = new EventEmitter<any>();
	
  constructor(private dialogService:DialogService) {}

  ngOnInit() {
  	
  }

	signIn(){
		this.dialogService.addDialog(SignUpDialogComponent, {
			title:"登录",
			type:"signIn"
		}).subscribe((obj) => {
			this.signInInit.emit(obj);
		});
	}
	
	signUp(){
		this.dialogService.addDialog(SignUpDialogComponent, {
			title:"注册",
			type:"signUp"
		}).subscribe((obj) => {
			this.dialogService.show(<BuiltInOptions>{  
          content: "注册成功",  
          icon: 'success',  
          size: 'sm', 
          timeout:1000,
          showCancelButton: false
	     });
		});
	}
	
	logOut(){
		this.logOutInit.emit(true);
	}
}
