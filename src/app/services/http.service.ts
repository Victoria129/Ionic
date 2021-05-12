import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {headersToString} from 'selenium-webdriver/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(servicename: string, data: any) {

    const headers = new HttpHeaders();
    const options = {header: headers, withCredentials: false};

    const url = environment.apiUrl + servicename;

    return this.http.post(url, JSON.stringify(data), options);

  }
}



