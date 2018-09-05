import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  uri = 'http://localhost:4568/';

  constructor(
    private http: HttpClient
  ) { }
  addAdUnit(data) {
    this
    .http
    .post(`${this.uri}input`, data)
        .subscribe(( res: any) => {
          if (data) {
            alert('successfully sent');
          } else {
            console.log('error');
          }
        });
  }
}
