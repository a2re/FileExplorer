import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class DirectoryService {

  constructor(private http: Http) { }

  getSubDirectories(sourcePath: string): Observable<any> {
    return this.http.get('/api/directories/' + encodeURIComponent(sourcePath)).map((response: Response) => response.json());
  }

}
