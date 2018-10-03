import { Component, OnInit } from '@angular/core';
import { Vlog } from "./model/classes";

@Component({
  selector: 'app-vlog',
  templateUrl: './vlog.component.html',
  styleUrls: ['./vlog.component.scss']
})
export class VlogComponent implements OnInit {

  num: number;
  vlogs: Array<Vlog> = [
    {
        'id': 0,
        'name': 'Vlog',
        'title': 'TITL OF VLOG GOES RIGHT HERE',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta eget tortor quis pretium. Integer vehicula lorem quis tellus vehicula, ut pulvinar eros consequat. Nunc sem est, mattis  rutrum efficitur at, tempus in turpis. Vestibulum eu sem faucibus.',  
        'like': true,
        'viewed': true,
        'postUrl': 'http://www.desktop-screens.com/data/out/47/2906667-golf-course-wallpapers.jpg',
        'sourceUrl1': '',
        'sourceUrl2': '',
        'tracks':[
          {
            'url': 'devstories-en.vtt',
            'label': 'English subtitles',
            'kind': 'subtitles',
            'srclang': 'en'
          }
        ]
       }, 
      {
        'id': 1,
        'name': 'Vlog',
        'title': 'NAME OF VLOG GOES RIGHT HERE',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta eget tortor quis pretium. Integer vehicula lorem quis tellus vehicula, ut pulvinar eros consequat. Nunc sem est, mattis  rutrum efficitur at, tempus in turpis. Vestibulum eu sem faucibus.',  
        'like': true,
        'viewed': true,
        'postUrl': 'http://www.desktop-screens.com/data/out/47/2906667-golf-course-wallpapers.jpg',
        'sourceUrl1': '',
        'sourceUrl2': '',
        'tracks':[
          {
            'url': 'devstories-en.vtt',
            'label': 'English subtitles',
            'kind': 'subtitles',
            'srclang': 'en'
          }
        ]
      }, 
    { 
      'id': 2,
      'name': 'Vlog',
    'title': 'NAME OF VLOG GOES RIGHT HERE',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta eget tortor quis pretium. Integer vehicula lorem quis tellus vehicula, ut pulvinar eros consequat. Nunc sem est, mattis  rutrum efficitur at, tempus in turpis. Vestibulum eu sem faucibus.',  
    'like': true,
    'viewed': true,
    'postUrl': 'http://www.desktop-screens.com/data/out/47/2906667-golf-course-wallpapers.jpg',
    'sourceUrl1': '',
    'sourceUrl2': '',
    'tracks':[
      {
        'url': 'devstories-en.vtt',
        'label': 'English subtitles',
        'kind': 'subtitles',
        'srclang': 'en'
      }
    ]
    }, 
  ]
  constructor() { }

  ngOnInit() {
    this.num=0;
  }
  setFavour(index: number): void{
    for(let one of this.vlogs){
      if(one.id == index){
        one.like = !one.like;
      }
    }
  }
  setViewed(index: number): void{
    for(let one of this.vlogs){
      if(one.id == index){
        one.viewed = !one.viewed;
      }
    }
  }
}
