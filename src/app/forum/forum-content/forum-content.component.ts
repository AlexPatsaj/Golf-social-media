import { Component, OnInit } from '@angular/core';
import {ForumService} from '../forum.service';

@Component({
  selector: 'app-forum-content',
  templateUrl: './forum-content.component.html',
  styleUrls: ['./forum-content.component.scss']
})
export class ForumContentComponent implements OnInit {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public forums;
  public currentIdx =0;
  constructor( public forumService: ForumService) { }

  ngOnInit() {
   
    console.log(this.forumService.categories)
  }
  open(category){
    this.forumService.openForum=true;
    this.forumService.SetdataForum=category;
    this.forumService.getAllPostsByid(category.id);
    
  }

  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    if (currentIndex > this.forumService.categories.length || currentIndex < 0) return;

    let nextIndex = 0;
    
    // next
    if (action === this.SWIPE_ACTION.LEFT) {
        const isLast = currentIndex === this.forumService.categories.length - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // previous
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.forumService.categories.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    this.currentIdx = nextIndex;
    
    this.forumService.categories.forEach((x, i) => x.visible = (i === nextIndex));
}

}
