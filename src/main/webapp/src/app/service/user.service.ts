import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

	private signUpUrl:string = "api/signUp";
	private signInUrl:string = "api/signIn";
  constructor(private http:HttpClient) { }
  
	signUp(obj) : Observable<HttpResponse<any>> {
		var httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json'
		//  'Authorization': 'my-auth-token'
		  })
  		}
		return this.http.post<any>(this.signUpUrl,obj,httpOptions);
	}
	
	signIn(obj) : Observable<HttpResponse<any>> {
		var httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json'
		//  'Authorization': 'my-auth-token'
		  })
  		}
		return this.http.post<any>(this.signInUrl,obj,httpOptions);
	}
}
