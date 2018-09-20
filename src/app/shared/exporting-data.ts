import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Account } from '../Objects/Account';

export class ExportingData {
    /* private static _instance: ExportingData = new ExportingData(clicker.configUrl); */
    private constructor(private http: HttpClient) {
    }
    postConfig(configUrl): Observable<any> {
        return this.http.post(configUrl, { responseType: 'text' })
    }
    static exportData() : string {
        return '{"cash": "' + Account.getCash().toString() + '"}';
    }
    static postData (){
        
        
    }
}