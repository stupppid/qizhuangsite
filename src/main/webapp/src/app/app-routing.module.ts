import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { PersonalToolsComponent } from './personal-tools/personal-tools.component';

const routes: Routes = [
//{
//	path: '#',
//  children: [
//    { path: '#personalTools', component: PersonalToolsComponent },
//		  { path: '#personalDocument', component: PersonalDocumentComponent },
		 
//  ]
//}
	
  { path: 'personalTools', component: PersonalToolsComponent },
	{ path: 'personalDocument', component: PersonalDocumentComponent },
	{ path: '', redirectTo: '/', pathMatch: 'full' }
//{ path: '**', redirectTo: '/', pathMatch: 'full' }
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
