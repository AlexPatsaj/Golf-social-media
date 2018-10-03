import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkillsService {

    constructor(private apiService :ApiService) { }

    getSkillsByuserId(user_id):Observable<any>{
       let url='getskills/'+user_id 
       return this.apiService.get(url)
    }

    getSkillsVideoByUserIdandSkillId(user_id,skill_id):Observable<any>{
        let url ='getskillsVideo/'+skill_id+'/'+user_id
        return this.apiService.get(url);

    }
}