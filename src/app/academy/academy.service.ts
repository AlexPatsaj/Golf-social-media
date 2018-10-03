import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from 'ngx-auth';
import { environment } from '../../environments/environment';
import { ApiService } from '../api/api.service';


export const API_URL = environment.apiUrl;

@Injectable()
export class AcademyService {
    private getCoursesUrl = 'get-courses';
    private get_course_detail = 'get-course-detail/';
    coursesData;

    constructor(private apiService: ApiService) {
    }

    extractData(res: Response) {
        return res;
    }

    setAllCourses(data) {
        // this.getCourseDetailsById()
       
        this.coursesData = data;
    }
    getAllCourses(): Observable<any> {
        const url = `${this.getCoursesUrl}`;
        return this.apiService.get(url)

    }
    getCourseDetailsById(course_id,user_id): Observable<any> {
        const url = `${this.get_course_detail}` + course_id+'/'+user_id;
        return this.apiService.get(url)
    }
}
