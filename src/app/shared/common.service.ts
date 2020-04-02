import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _http: HttpClient;
  constructor(_http: HttpClient) {
    this._http = _http;
  }

  pageTitle = new Subject<any>()

  getUsers() {
    return this._http.get("./assets/users-info.json");
  }
  
}
