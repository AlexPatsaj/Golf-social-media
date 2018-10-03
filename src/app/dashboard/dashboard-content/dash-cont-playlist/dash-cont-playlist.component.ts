import { Component, OnInit } from '@angular/core';
import { PlayList } from "../../model/classes";
import { PlaylistDetails } from "../../model/classes";

@Component({
  selector: 'app-dash-cont-playlist',
  templateUrl: './dash-cont-playlist.component.html',
  styleUrls: ['./dash-cont-playlist.component.css']
})
export class DashContPlaylistComponent implements OnInit {

  playlists: Array<PlayList> = [
    {
      'playListName': 'Game1',
      'playListDetails':[
        {
          'playUrl': '',
          'customerName': 'PILOT',
          'customerAvatarUrl': 'https://img1.ak.crunchyroll.com/i/spire4/c08b24a5202ae0295c89edb869b08cef1276961736_full.jpg',
          'playTime': '45'
        },
        {
          'playUrl': '',
          'customerName': 'HONOR THY FATHER',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
          'playTime': '30'
        },
        {
          'playUrl': '',
          'customerName': 'LONE CUNMEN',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/ZbZuIGeRWXTXmIWnF0IIjbXj0NVc4Y6KGuJsz59bG45eMIEhYooGuLjVhEM3vB29lR7uHXw=s85',
          'playTime': '25'
        },
        {
          'playUrl': '',
          'customerName': 'AN INNOCENT MAN',
          'customerAvatarUrl': 'https://icon2.kisspng.com/20180616/qlf/kisspng-lightning-returns-final-fantasy-xiii-final-fantas-5b25b4dc78fc11.9722095115291977884956.jpg',
          'playTime': '36'
        },
        {
          'playUrl': '',
          'customerName': 'DAMAGED',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/QBWVUZtENz2HGfBzy03SImT5SP__ud_HDgPYG2T_3YmjeWkuVL_c8UvNrKavGCjP7HLB=s85',
          'playTime': '55'
        },
        {
          'playUrl': '',
          'customerName': 'LEGACIES',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
          'playTime': '15'
        }
      ]
    },
    {
      'playListName': 'Game1',
      'playListDetails':[
        {
          'playUrl': '',
          'customerName': 'PILOT',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
          'playTime': '45'
        },
        {
          'playUrl': '',
          'customerName': 'HONOR THY FATHER',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/E10gbKNqSFXrcOTNaL_T75BeqNHdQuYcpg_IaIC44QP4vanjFC6rW4UxRJicnYnkcdc6ZmQ=s85',
          'playTime': '30'
        },
        {
          'playUrl': '',
          'customerName': 'LONE CUNMEN',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/QBWVUZtENz2HGfBzy03SImT5SP__ud_HDgPYG2T_3YmjeWkuVL_c8UvNrKavGCjP7HLB=s85',
          'playTime': '25'
        },
        {
          'playUrl': '',
          'customerName': 'AN INNOCENT MAN',
          'customerAvatarUrl': 'https://img1.ak.crunchyroll.com/i/spire4/c08b24a5202ae0295c89edb869b08cef1276961736_full.jpg',
          'playTime': '36'
        },
        {
          'playUrl': '',
          'customerName': 'DAMAGED',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/ZbZuIGeRWXTXmIWnF0IIjbXj0NVc4Y6KGuJsz59bG45eMIEhYooGuLjVhEM3vB29lR7uHXw=s85',
          'playTime': '55'
        },
        {
          'playUrl': '',
          'customerName': 'LEGACIES',
          'customerAvatarUrl': 'https://lh3.googleusercontent.com/QBWVUZtENz2HGfBzy03SImT5SP__ud_HDgPYG2T_3YmjeWkuVL_c8UvNrKavGCjP7HLB=s85',
          'playTime': '15'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  close() {

  }

  details() {

  }
  
  click_playlistdetail(){

  }
}
