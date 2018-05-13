import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DocumentService {

	createNewFileUrl: string = "api/createNewFile";

	constructor(private http: HttpClient) {}

	getNode() {

	}

	createNewFile() {
//		this.http.post < > (this.createNewFileUrl, , )
	}

	//	addHero (hero: Hero): Observable<Hero> {
	//return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
	//  .pipe(
	//    catchError(this.handleError('addHero', hero))
	//  );
//}

}