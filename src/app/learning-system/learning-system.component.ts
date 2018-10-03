import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum/forum.service';
import { AcademyService } from '../academy/academy.service';

@Component({
    selector: 'app-learning-system',
    templateUrl: './learning-system.component.html',
    styleUrls: ['./learning-system.component.scss']
})
export class LearningSystemComponent implements OnInit {
    constructor(public forumService: ForumService, private academyService: AcademyService) { }
    ngOnInit() {
        this.academyService.getAllCourses().subscribe(
            (res) => {
            if(res.status===200){
                this.academyService.setAllCourses(res.data);
            }
        })
        this.forumService.GetAllCategories().subscribe(
            (res) => {
                this.forumService.setCategories(res.data);
            }
        )
    }
}
