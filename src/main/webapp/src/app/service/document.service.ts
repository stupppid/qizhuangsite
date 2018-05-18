import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {

	createNewFileUrl: string = "api/createNewFile";
	getDocUrl: string = "api/getDoc";
	saveDocUrl: string = "api/saveDoc";
	deleteDocUrl: string = "api/deleteDoc";
	

	constructor(private http: HttpClient) {}

	getNode() {

	}
	
	deleteDoc(id:number){
		return this.http.delete<any>(this.deleteDocUrl + "/" + id);
	}
	
	saveDoc(objectId:String,rawData:String){
		return this.http.post<any>(this.saveDocUrl + "/" + objectId, rawData);
	}
	
	createNewFile(obj): Observable<any>{
		return this.http.post<any>(this.createNewFileUrl,obj);
	}
	
	getDoc(obj:String):Observable<String>{
		return this.http.get<String>(this.getDocUrl + "/" + obj);
	}
}