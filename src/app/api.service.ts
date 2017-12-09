import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
public apiHostUrl: string;
constructor (private http: HttpClient) {
this.apiHostUrl = process.env.apiHost;
}

public fetchApiHostUrl () {
    return this.http.get(this.apiHostUrl);
  }
}
