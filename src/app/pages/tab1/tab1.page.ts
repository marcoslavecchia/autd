import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  articles;
  constructor(private apiService: NewsapiService){}
  
  ngOnInit() {
  }
  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}