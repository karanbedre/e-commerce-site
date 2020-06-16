import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  public baseUrl: string = environment.baseUrl;

  constructor(private http: Http) { }

  /**
 * @method to perform the http `get` method
 * @param api - name of the service/api to be called
 * @returns the Observable<any>
*/
  get(): Observable<any> {
    return this.http
      .get(this.baseUrl, new RequestOptions({
        headers: this.getRequestHeaders()
      }))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  /**
   * @method to capture the service errors
   * @param api - name of the service/api to be called
   * @param data - data to be passed for deleting
  */
  handleError(error: any): Observable<any> {
    return throwError(error);
  }
  /**
 * @method to get the request headers
 * @param api - name of the service/api to be called
 * @param data - data to be passed for deleting
 * @returns the request headers of type `Headers`
*/
  getRequestHeaders(): Headers {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
    });

    return headers;
  }

}
