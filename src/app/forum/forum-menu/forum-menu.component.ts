import { Component, OnInit } from '@angular/core';
import {ForumService} from '../forum.service';

@Component({
  selector: 'app-forum-menu',
  templateUrl: './forum-menu.component.html',
  styleUrls: ['./forum-menu.component.css']
})
export class ForumMenuComponent implements OnInit {

  constructor(public forumService: ForumService) { }
  public menu;
  ngOnInit() {
  }
  open(category){
    this.forumService.openForum=true;
    this.forumService.SetdataForum=category;
    this.forumService.getAllPostsByid(category.id);
 
    
  }


  close(){
    this.forumService.openForum=false;
  }
}
