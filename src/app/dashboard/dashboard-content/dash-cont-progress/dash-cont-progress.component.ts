import { Component, OnInit } from '@angular/core';
import { Course, Module } from "../../model/classes";

@Component({
  selector: 'app-dash-cont-progress',
  templateUrl: './dash-cont-progress.component.html',
  styleUrls: ['./dash-cont-progress.component.scss']
})
export class DashContProgressComponent implements OnInit {

  courselist: Array<Course> = [
    {
      'coverUrl': 'http://www.herrickgolf.us/33-244-large/-golf-ball-white-durable-game-ball-4pcs-lot-two-layers-high-quality-far-away-better-stability-outdoor-golf-ball-.jpg',
      'chapter': 1,
      'chapterStr': 'COURSE ONE',
      'chapterTitle': 'INTRODUCTION',
      'chapterDetail': 'Rancho Park Golf Course is an 18-hole, par 71 championship course playing at 6,630 yards, designed by William Johnson and William P. Bell. Rancho Park opened with the 1949 U.S.G.A. Public Links Championship and has been host to eighteen Los Angeles Opens as well as numerous LPGA and Senior tour events between 1978 and 1994. The golf course is a challenging and undulating course requiring a great deal of skill. A variety of lies provide a challenge, especially on approach shots to smallish greens.',
      'progress': 80,
      'modules': [
        {
          'module': 'MODULE ONE',
          'name': 'MODULE NAME1',
          'progress': 55
        },
        {
          'module': 'MODULE TWO',
          'name': 'MODULE NAME2',
          'progress': 100
        },
        {
          'module': 'MODULE THREE',
          'name': 'MODULE NAME3',
          'progress': 85
        }
      ]
    },
    {
      'coverUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Nqr5Dr-gJ55sJ3bjrQBVjm2twC23O0EUbz1fYk6zW5KXznGLZA',
      'chapter': 2,
      'chapterStr': 'COURSE TWO',
      'chapterTitle': 'BALL FILGHT',
      'chapterDetail': 'Rancho Park Golf Course is an 18-hole, par 71 championship course playing at 6,630 yards, designed by William Johnson and William P. Bell. Rancho Park opened with the 1949 U.S.G.A. Public Links Championship and has been host to eighteen Los Angeles Opens as well as numerous LPGA and Senior tour events between 1978 and 1994. The golf course is a challenging and undulating course requiring a great deal of skill. A variety of lies provide a challenge, especially on approach shots to smallish greens.',
      'progress': 80,
      'modules': [
        {
          'module': 'MODULE ONE',
          'name': 'MODULE NAME1',
          'progress': 55
        },
        {
          'module': 'MODULE TWO',
          'name': 'MODULE NAME2',
          'progress': 100
        },
        {
          'module': 'MODULE THREE',
          'name': 'MODULE NAME3',
          'progress': 85
        }
      ]
    },
    {
      'coverUrl': 'https://wallpaper-house.com/data/out/5/wallpaper2you_46279.jpg',
      'chapter': 3,
      'chapterStr': 'COURSE THREE',
      'chapterTitle': 'FULL SWING PT.1',
      'chapterDetail': 'Rancho Park Golf Course is an 18-hole, par 71 championship course playing at 6,630 yards, designed by William Johnson and William P. Bell. Rancho Park opened with the 1949 U.S.G.A. Public Links Championship and has been host to eighteen Los Angeles Opens as well as numerous LPGA and Senior tour events between 1978 and 1994. The golf course is a challenging and undulating course requiring a great deal of skill. A variety of lies provide a challenge, especially on approach shots to smallish greens.',
      'progress': 80,
      'modules': [
        {
          'module': 'MODULE ONE',
          'name': 'MODULE NAME1',
          'progress': 55
        },
        {
          'module': 'MODULE TWO',
          'name': 'MODULE NAME2',
          'progress': 100
        },
        {
          'module': 'MODULE THREE',
          'name': 'MODULE NAME3',
          'progress': 85
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
