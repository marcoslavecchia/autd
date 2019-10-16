import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  API_KEY = '4221576acc3f4fcabb6916cf28167700';
  constructor(private httpClient: HttpClient) { }
  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=${this.API_KEY}`);
  }
}
