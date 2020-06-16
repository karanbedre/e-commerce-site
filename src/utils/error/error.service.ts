import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  /**
 * @method - to redirect to login on error
 * @param error
 */
  handleError(error: any) {
    if (error.status === 401) {
      window.location.reload();
    }
  }
}
