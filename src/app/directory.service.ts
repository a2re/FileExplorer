import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class DirectoryService {

  constructor(private http: Http) { }

  getSubDirectories(sourcePath): Observable<any> {
    return this.http.get('/api/directories/' + sourcePath).map((response: Response) => response.json());
  }

  getDirectoryContent(sourcePath): Observable<any> {
    return this.http.get("/api/directoryContent/" + sourcePath).map(res => res.json());
  }

}
