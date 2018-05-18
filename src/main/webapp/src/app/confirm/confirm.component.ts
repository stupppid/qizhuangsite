    import { Component } from '@angular/core';  
    import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';  
      
    export interface ConfirmModel {  
      title:string;  
      message:any;  
    }  
      
    @Component({  
      selector: 'confirm',  
      templateUrl: './confirm.component.html'
    })  
    export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {  
      title: string;  
      message: any;  
      constructor(dialogService: DialogService) {  
        super(dialogService);  
      }  
      confirm() {  
        // on click on confirm button we set dialog result as true,  
        // ten we can get dialog result from caller code  
        this.close(true);  
      }  
      cancel() {  
        this.close(false);  
      }  
    }  