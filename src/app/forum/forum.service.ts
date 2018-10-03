import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api/api.service';
import { Subject } from 'rxjs/Subject';




@Injectable()
export class ForumService {

    public categoryUrl = 'threads';
    public postsUrl = 'posts';
    public postUrl = 'post/create';
    public commentsUrl = 'comments';
    public commentUrl = 'comment';
    public likeUrl = 'post/like/'
    public isForumOpen;
    public isPostOpen;

    public categories;
    public SetdataForum;

    constructor(private apiService: ApiService) {

    }
    public set openForum(value) {
        this.isForumOpen = value;
    }
    public get isOpenForum() {
        return this.isForumOpen;
    }

    public set openPost(value) {
        this.isPostOpen = value;
    }
    public get isOpenPost() {
        return this.isPostOpen;
    }





    GetAllCategories(): Observable<any> {
        const url = `${this.categoryUrl}`;
        return this.apiService.get(url);
    }
    getAllPostsByThreadId(id): Observable<any> {
        const url = `${this.postsUrl}` + '/' + id;
        return this.apiService.get(url);
    }
    getAllcommentByPostId(id): Observable<any> {
        const url = `${this.commentsUrl}` + '/' + id;
        return this.apiService.get(url);
    }
    createComment(post): Observable<any> {
        const url = `${this.commentUrl}`;
        let body = {
            "post_id": post.id,
            "body": post.comment
        }
        return this.apiService.post(url, body);
    }
    setCategories(categories) {
        this.categories = categories;
        if(this.categories && this.categories.length>0){
            this.categories[0].visible = true;
          }
    }
    updateLike(post): Observable<any> {
        const url = `${this.likeUrl}` + post.id;
        let body = {
            "thread_id": post.thread_id
        }
        return this.apiService.put(url, body);

    }

    createPostInThread(body) {

        const url = `${this.postUrl}`;

        return this.apiService.post(url, body);
    }

    getAllPostsByid(id) {
        this.getAllPostsByThreadId(id).subscribe((res) => {

            this.satData(res.data).then((res) => {
                this.SetdataForum.posts = res;
            });
        })
    }

    satData(data: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            data.map(x => {
                x['comment'] = '';
            }
            );
            resolve(data.sort((a: any, b: any) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()

            ));
        });
    }


}

