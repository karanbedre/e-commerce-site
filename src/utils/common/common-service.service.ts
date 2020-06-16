import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpService: HttpServiceService, private errService: ErrorService) { }

  /**
   * @method - to send the data
   * @param url - api name
   */
  get(): Observable<any> {
    return this.httpService.get()
      .pipe(
        map((res: Response) => {
          return res.json()
        }),
        catchError(error => {
          this.errorHandler(error);
          return throwError(error.json())
        })
      );
  }

  /* error handler */
  errorHandler(error: any) {
    this.errService.handleError(error);
  }

}
