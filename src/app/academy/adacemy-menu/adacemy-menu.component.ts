import {Component, OnInit} from '@angular/core'; 
import { Observable } from 'rxjs/Observable'; 
import { AcademyService } from '../academy.service';

@Component({
    selector: 'app-adacemy-menu',
    templateUrl: './adacemy-menu.component.html',
    styleUrls: ['./adacemy-menu.component.css']
})

export class AdacemyMenuComponent implements OnInit {
  
    constructor(public academyService: AcademyService) {
    }
    public courses;

    ngOnInit() {
    }

  


    
}
