import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  readonly rootUrl = 'https://new.embase.in/backend/api';
  id: string;
  constructor(private http: HttpClient) { }
  getLibraryHistory() {
    return this.http.get<any>(this.rootUrl + '/getLibraryHistory/' + this.id);
  }
  getBookList() {
    return this.http.get<any>(this.rootUrl + '/booksList');
  }

  
}
