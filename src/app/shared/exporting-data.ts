import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Account } from '../Objects/Account';

export class ExportingData {
    static importedMockup;
    constructor(private http: HttpClient) {
    }


    postConfig(configUrl): Observable<any> {
        return this.http.post(configUrl, { responseType: 'text' })
    }
}