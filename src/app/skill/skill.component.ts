import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skillsService';
import { TokenStorage } from '../auth/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'underscore';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills;
  skillsVideos;
  currentUser;
  selectedItem

  id;

  constructor(private skillsService: SkillsService, private tokenService: TokenStorage, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {


    this.getUserProfile().then((res) => {
      let self = this;
      this.currentUser = res;
      this.route.params.subscribe(params => {
        this.id = params['id']
        this.skillsService.getSkillsByuserId(this.currentUser.id).subscribe((res) => {
          if (res.status === 200) {
            this.skills = res.data;
            if (this.id) {
              this.selectedItem =_.find(this.skills, function(skill){ return skill.skill_id.toString() === self.id});
              this.getSkillsVideoByUserIdandSkillId(this.id);
            } else {
              let skill_id = this.skills[0].skill_id
              this.selectedItem = this.skills[0];
              this.getSkillsVideoByUserIdandSkillId(skill_id);
            }
          }

        })

      })

    });
  }
  getSkillsByuserId() {

  }
  getSkillsVideoByUserIdandSkillId(skill_id) {
    this.skillsService.getSkillsVideoByUserIdandSkillId(this.currentUser.id, skill_id).subscribe((res) => {
      if (res.status === 200) {
        this.skillsVideos = res.data;
        this.skillsVideos.forEach(skillsVideo => {
          skillsVideo.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https:player.vimeo.com/video/' + skillsVideo.vimeo_id);
        });
      }
    })

  }
  toSkillsVideos(item) {
    this.selectedItem = item;
    this.getSkillsVideoByUserIdandSkillId(item.skill_id);

  }
  getUserProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tokenService.getUserInfo().subscribe(
        user => {
          resolve(user);
        },
        err => {
          reject(err);
        }
      );
    })

  }
}
