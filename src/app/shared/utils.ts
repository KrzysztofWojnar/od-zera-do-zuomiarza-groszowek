import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ImportingData } from './importing-data';

/* class Mini {
  public v: any;
  constructor() {
  }
} */

export class Utils {
/*   variable: Mini; */
  constructor(private http: HttpClient) {
  }
  getConfig(configUrl):Observable<any> {
    return this.http.get(configUrl, {responseType: 'text'});
  }



}
