import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']

})
export class ForumComponent implements OnInit {

  constructor(public forumService: ForumService, ) { }


  ngOnInit() {

    

  }



}
