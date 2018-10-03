import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api/api.service';

export const API_URL = environment.apiUrl;

@Injectable()
export class CourseService {


    constructor(private http: HttpClient, private apiService: ApiService) {

    }

    extractData(res: Response) {
        return res;
    }

    getCourses() {
        return this.http.get(API_URL + '/courses/').map(this.extractData);
    }

    //  getCourseDetails(id) {
    //     return this.http.get(API_URL + '/get-course-detail/' + id).map(this.extractData);
    // }
    fetchchatuser(user_id,keyword)  {
        const url = `fetchchatuser/`+user_id+"?"+keyword;
        return this.apiService.get(url)
        .map(res => {
            if (res.data) 
              return  res.data;
             return [];
          });
    }
    createconversationfromcourse(body): Observable<any> {
        const url = `createconversationfromcourse`;
        return this.apiService.post(url, body);

    }
    getUniModules(id) {
        return this.http.get(API_URL + '/unimodules?course_id=' + id).map(this.extractData);
    }
    getReviewListDetail(id): Observable<any> {
        const url = `getReviewListDetail/` + id;
        return this.apiService.get(url);
    }
    
    getGlossarryListDetail(id) : Observable<any>{
        const url = `getGlosarryListDetail/` + id;
        return this.apiService.get(url);
    }
    postReview(body): Observable<any> {
        const url = `postReview`;
        return this.apiService.post(url, body);
    }
    getChapters(id) {
        return this.http.get(`${API_URL}/chapters?unimodule_id=${id}`).map(this.extractData);
    }
    getTrackCourseProcess(course_id, user_id): Observable<any> {
        const url = `trackcourseprocess/` + course_id + "/" + user_id;
        return this.apiService.get(url);
    }
    getPlayListByuser(id: number): Observable<any> {
        const url = `getplaylistbyuser/` + id;
        return this.apiService.get(url);
    }
    addToPlayList(uid: number, playlistName: string, video_id: number): Observable<any> {
        const url = `addtoplaylist/` + uid + '/' + playlistName + '/' + video_id;
        return this.apiService.get(url);
    }
    updateChapterForCourses(body): Observable<any> {
        const url = `updateChapterForCourses`;
        return this.apiService.post(url, body);
    }
    getVideo(course_id, unimodule_id, chapter_id) {
        if (typeof course_id === 'undefined') {
            course_id = 1;
        } else if (typeof unimodule_id === 'undefined') {
            unimodule_id = 1;
        } else if (typeof chapter_id === 'undefined') {
            chapter_id = 1;
        }

        return this.http.get(`${API_URL}/get_vimeo_video?course_id=${course_id}&unimodule_id=${unimodule_id}&chapter_id=${chapter_id}`)
            .map(this.extractData);
    }
}

