import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  get_notes() {
    return this._http.get('/notes');
  }

  add_note(num) {
    return this._http.post('/note', num );
  }

}
