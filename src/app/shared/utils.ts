import {HttpClient} from '@angular/common/http';

class Mini {
  public v: any;
  constructor() {
  }
}

export class Utils {
  variable: Mini;
  constructor(private http: HttpClient) {
  }

  getConfig(configUrl) {
    return this.http.get(configUrl, {responseType: 'text'});
  }

  showConfig(configUrl: string) {
    this.getConfig(configUrl).subscribe( data => console.log(data));
  }


}
