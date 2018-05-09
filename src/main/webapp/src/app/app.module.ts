import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { PanelComponent } from './panel/panel.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { PersonalToolsComponent } from './personal-tools/personal-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    PanelComponent,
    PersonalDocumentComponent,
    PersonalToolsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
