import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { PanelComponent } from './panel/panel.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { PersonalToolsComponent } from './personal-tools/personal-tools.component';
import { DocumentTreeComponent } from './document-tree/document-tree.component';
import { TreeRootComponent } from './tree-root/tree-root.component';
import { NewFileDialogComponent } from './new-file-dialog/new-file-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component'; 
import { ConfirmComponent } from './confirm/confirm.component';
import { RefactorFileDialogComponent } from './refactor-file-dialog/refactor-file-dialog.component';

import { DocumentService } from './service/document.service';
import { UserService } from './service/user.service';
import { DataService } from './service/data.service';
import { TraderDataComponent } from './trader-data/trader-data.component';
import { TraderDataNowComponent } from './trader-data-now/trader-data-now.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    PanelComponent,
    PersonalDocumentComponent,
    PersonalToolsComponent,
    DocumentTreeComponent,
    TreeRootComponent,
    NewFileDialogComponent,
    SignUpDialogComponent,
    ConfirmComponent,
    RefactorFileDialogComponent,
    TraderDataComponent,
    TraderDataNowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BootstrapModalModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  entryComponents: [
    NewFileDialogComponent,
    SignUpDialogComponent,
    ConfirmComponent,
    RefactorFileDialogComponent
	],
  providers: [
  	DocumentService,
  	UserService,
  	DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
