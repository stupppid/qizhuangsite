import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { PersonalToolsComponent } from './personal-tools/personal-tools.component';
import { TraderDataComponent } from './trader-data/trader-data.component';

const routes: Routes = [
  	{ path: 'personalTools', component: PersonalToolsComponent, children:[
  		{ path: 'traderData', component: TraderDataComponent },
  	]},
	{ path: 'personalDocument', component: PersonalDocumentComponent },
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
  	RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { 
	

}
