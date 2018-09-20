import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Account } from '../Objects/Account';

export class ImportingData {
    static importedMockup;
    constructor(private http: HttpClient) {
    }
  
    getConfig(configUrl):Observable<any> {
      return this.http.get(configUrl, {responseType: 'text'});
    }

  
    importData(configUrl: string) {
      
      this.getConfig(configUrl).subscribe( data => console.log(data));
      this.getConfig(configUrl).subscribe( (data) => ImportingData.updateImportedData(data));
      
    }
    static updateImportedData(newValue) {
        ImportingData.importedMockup = JSON.parse(newValue);
        console.log(ImportingData.importedMockup);
        Account.setCash(Number(ImportingData.getCash()));

    }
    static getImportedData(): any {
        return ImportingData.importedMockup
    }
    static getCash(): Number {
        
        console.log(ImportingData.importedMockup.cash);
        return ImportingData.importedMockup.cash;
    }


}