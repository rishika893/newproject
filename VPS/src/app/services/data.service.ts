import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private token: String;

  constructor(
    private authService: AuthserviceService,
    private http: HttpClient
  ) {
    this.authService.token.subscribe(token => {
      this.token = token;
    });
  }

  fetchDevices() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    headers = headers.append('Token', this.token.toString());
    return this.http.get(
      'http://demo-staging.virtualpowersystems.com:9001/v3/catalog/device',
      {
        headers: headers
      })
      .pipe(map(result => {
        return result;
      }, error => {
        this.handleError(error);
      }));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw('Error!');
  }

}
