import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  private tokenSource = new BehaviorSubject<String>(null);
  token = this.tokenSource.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  login(email: String, password: String) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post('http://demo-staging.virtualpowersystems.com:9001/v3/sessions',
      {
        username: email,
        password: password
      },
      {
        headers: headers
      })
      .pipe(map(result => {
        this.tokenSource.next(result['token']);
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
