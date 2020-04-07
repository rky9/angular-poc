import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _http: HttpClient;
  constructor(_http: HttpClient) {
    this._http = _http;
  }

  getUsers() {
    return this._http.get<any[]>("./assets/users-info.json").pipe(map(data => data));;
  }
}
