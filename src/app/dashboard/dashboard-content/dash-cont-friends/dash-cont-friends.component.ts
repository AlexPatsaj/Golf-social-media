import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../dashboard.service";
import { Friend } from "../../model/classes";

@Component({
  selector: 'app-dash-cont-friends',
  templateUrl: './dash-cont-friends.component.html',
  styleUrls: ['./dash-cont-friends.component.scss']
})
export class DashContFriendsComponent implements OnInit {

  friends:Array<Friend> = [
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    {
        'friendsAbatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
        'friendsName': 'Dan Rogers',
        'friendsLocation': 'Ventura, Ca',
    },
    
]

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    
  }

  
}
