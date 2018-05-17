import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {

	createNewFileUrl: string = "api/createNewFile";

	constructor(private http: HttpClient) {}

	getNode() {

	}

	createNewFile(obj): Observable<any>{
		console.log(obj)
		return this.http.post<any>(this.createNewFileUrl,obj);
	}

//		addHero (hero: Hero): Observable<Hero> {
//			return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//			  .pipe(
//			    catchError(this.handleError('addHero', hero))
//			  );
//		}

}