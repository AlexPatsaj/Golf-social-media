import { Component, OnInit, Input } from '@angular/core';
import { ForumService } from '../forum.service';
import { DatePipe } from '@angular/common';
import { TokenStorage } from '../../auth/token-storage.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-forum-open',
  templateUrl: './forum-open.component.html',
  styleUrls: ['./forum-open.component.scss']
})
export class ForumOpenComponent implements OnInit {

  @Input('data') dataforum;
  public isPostOpen;
  public posts;

  public selectedPromo;
  public title;
  public content;
  public currentUser;
  public openedPost;
  constructor(public forumService: ForumService, private datePipe: DatePipe,
    private tokenService: TokenStorage) { }

  ngOnInit() {
    this.getUserProfile();
  }


  getUserProfile() {
    this.tokenService.getUserInfo().subscribe(
      user => {
        this.currentUser = user;
        if (this.currentUser && this.currentUser.image) {
          this.currentUser.image = '/assets/images/user.png';
        }
      }
    );
  }

  openPost(post) {
    this.forumService.openPost = true;
    this.openedPost = post;
    this.openedPost.comment = ''
    this.currentComment = null;

  }
  closePost() {
    this.forumService.openPost = false;
    this.openedPost = null;


  }
  closeForum() {
    this.forumService.openForum = false;

  }
  getClosedComments(post) {
    if (post.comments) {
      if (post.comments.length <= 2) {
        return post.comments;

      } else {
        let comments = Object.assign([], post.comments);
        return comments.slice(0, 2)
      }
    } else {
      return [];
    }

  }


  getDisplayDate(date: Date) {
    let now = new Date();
    date = new Date(date)
    if (date.getFullYear() < now.getFullYear() || date.getMonth() < now.getMonth() || date.getDay() < now.getDay() - 7) {
      return this.datePipe.transform(date, 'shortDate');
    }
    if (date.getDay() >= now.getDay() - 7 && date.getDay() < now.getDay() - 1) {
      return now.getDay() - date.getDay() + " days";
    }
    if (date.getDay() >= now.getDay() - 1 && date.getHours() < now.getHours() - 10) {
      return now.getHours() - date.getHours() + " hr";
    }
    if (date.getHours() >= now.getHours() - 10) {
      return this.datePipe.transform(date, 'shortTime');
    }

  }
  createComment(post) {
    console.log(post.comment.length, 'post.content');
    console.log(this.dataforum.posts, '')
    if (post.comment === '') {
      return
    }

    this.forumService.createComment(post).subscribe((res) => {
      if (res.success)
        this.dataforum.posts.map((x) => {
          if (x.id === post.id) {
            x.comment = '';
            if (!x.total_likes) {x.total_likes = 0;
            console.log(x.total_likes)}
            if (!x.total_comments) x.total_comments = 0;
            x.total_comments += 1;
            x.comments.unshift(res.data)

            this.currentComment = null;
          }
        })
    })
  }
  showComments(post) {
    this.isPostOpen = post.id
  }
  currentComment;
  iShowCreatePost;
  showComment(id) {
    this.currentComment = id;
  }
  isShowComment(id) {
    return this.currentComment === id;
  }
  showCreatePost() {
    this.iShowCreatePost = !this.iShowCreatePost
  }
  updateLike(post) {
    if (!this.isLiked(post))
      this.forumService.updateLike(post).subscribe((res) => {
        if (res.status === 200) {
          this.dataforum.posts.map((x) => {
            if (x.id === post.id) {
              console.log(x)
              x.total_likes = res.data.total_likes;
              x.likes.push(res.data);
            }
          })
        }
      });
  }
  isLiked(post) {
    return _.find(post.likes, (x) => {
      return (x.user && x.user.id === this.currentUser.id) || (x.author_id === this.currentUser.id);
    })
  }
  isValid() {
    if (this.title && this.content)
      if (this.title.length >= 3 && this.content.length >= 3)
        return true;
    return false;

  }

  createPost(dataforum, title, content) {
    let body = {
      "thread_id": dataforum,
      "title": title,
      "content": content
    }
    this.forumService.createPostInThread(body).subscribe((res) => {
      if (res.status === 200) {
        res.data.comments = [];
        res.data.likes = [];
        res.data.comment = '';
        res.data.total_likes=0;
        res.data.total_comments=0;
        this.content = '';
        this.title = '';
        this.showCreatePost();
        this.dataforum.posts.unshift(res.data);
      }
    });
  }
  onEnter(e) {

  }
  selectPromo(p) {

  }






































}
