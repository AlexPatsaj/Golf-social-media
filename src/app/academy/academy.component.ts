import {Component, OnInit} from '@angular/core';
import Player from '@vimeo/player';
import { AcademyService } from './academy.service';

@Component({
    selector: 'app-academy',
    templateUrl: './academy.component.html',
    styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
    coursesData;
    private player: Player;
    
    constructor(public academyService: AcademyService) {
    }

    ngOnInit() {
    }

}
