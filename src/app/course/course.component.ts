///<reference path="../../../node_modules/rxjs/add/operator/concatMap.d.ts"/>

import { FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR } from "@angular/forms";
import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Inject,
  OnDestroy,
  ElementRef,
  AfterViewInit,
  forwardRef
} from "@angular/core";
import { CourseService } from "./course.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DomSanitizer } from "@angular/platform-browser";
import { AcademyService } from "../academy/academy.service";
import { TokenStorage } from "../auth/token-storage.service";
import { Body } from "@angular/http/src/body";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  switchMap,
  merge
} from "rxjs/operators";
declare var Vimeo: any;
import * as _ from "underscore";

import { HostListener } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
  providers: [
    CourseService,
  ]
})
export class CourseComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    //    console.log(window.innerHeight,window.innerWidth);
  }
  id: "";
  isAdd = "0";
  id_chapter;
  id_playlist;
  coursesData: any;
  unimodulesData: any;
  chaptersData: any;
  details: any;
  iframe: any;
  video_iframe: any;
  objVideo: any;
  urlVideo: any;
  playLists;
  playLists1: any;
  currentUser;
  round;
  previous = 0;
  next = 2;
  public isChapterOpened: boolean = false;
  public openedChapter;
  ReviewListDetails;
  GlossarryListDetails;
  process = 0;
  gradeIndex = 0;

  player;

  public loading = false;
  public loading_tab_content = false;
  public loadingByPlayListId = false;
  public loadingByQuestion = false;
  public loadingMessage = false;
  public message='';
  public name='';
  public loadingReview = false;
  receiver_id;
  addReview;
  addToPlayListForm;
  @ViewChild("video_iframe_element") elementView;

  public searching = false;
  public searchFailed = false;
  public hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  public newContact: any;
  public messageCourse: any;
  AddConversationFromCourse() {
    this.loadingMessage=true;  
    const formData: FormData = new FormData();
    formData.append("user_id", this.currentUser.id);
    formData.append(
      "message",
      this.message
    ); 
    formData.append("receiver_id", this.receiver_id);
    this.courseService.createconversationfromcourse(formData).subscribe(res => {
        this.loadingMessage=false;
      this.createconversationfromcourse.reset();
    });
  }
  isDisabled(){
    //   console.log(this.name.length>1 ,this.message.length>1)
      return !(this.name.length>1 && this.message.length>1);
  }
  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term => {
        return term.length < 1
          ? Observable.of([])
          : this.courseService.fetchchatuser(this.currentUser.id, term).pipe(
              tap(() => (this.searchFailed = false)),
              catchError(() => {
                this.searchFailed = true;
                return Observable.of([]);
              })
            );
      }),
      tap(() => (this.searching = false)),
      merge(this.hideSearchingWhenUnsubscribed)
    );
  };

  formatter = (x: { userid: number; name: string }) => {
    if (typeof x === "object") {
      this.receiver_id = x.userid;
      this.createconversationfromcourse.setValue({
        name: x.name,
        message: this.objVideo
          ? 'I am checking this video : '+ this.objVideo.url
          : ""
      });
      this.name= x.name;
      this.message= this.objVideo
      ? 'I am checking this video : <a href="'+ this.objVideo.url+'">'+this.objVideo.url+'</a>'
      : ""
      console.log(this.name,this.message)
    }
    return x.name;
  };
  fetchchatuser(term) {
    this.courseService
      .fetchchatuser(this.currentUser.id, term)
      .subscribe(res => {
        if (res.data) return res.data;
      });
    return [];
  }

  createconversationfromcourse;
  constructor(
    private route: ActivatedRoute,
    private service: CourseService,
    private sanitizer: DomSanitizer,
    private academyService: AcademyService,
    private courseService: CourseService,
    private tokenService: TokenStorage,
    private router: Router
  ) {
    this.onResize();
    this.addToPlayListForm = new FormGroup({
      PlaylistName: new FormControl("", [Validators.required])
    });
    this.addReview = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
    this.createconversationfromcourse = new FormGroup({
      name: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
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
    });
  }

  countColmpletedChapter(module) {
    let count = 0;
    module.chapters.forEach(el => {
      if (el.is_mark) count += 1;
    });
    return count;
  }
  getDuration() {
    this.player
      .getDuration()
      .then(function(duration) {})
      .catch(function(error) {});
  }

  getEnded() {
    if (this.elementView && this.elementView.nativeElement)
      this.player
        .getEnded()
        .then(function(ended) {})
        .catch(function(error) {});
  }
  ngAfterViewInit() {
    // console.log('kakakkak',this.elementView)
    // if (this.elementView && this.elementView.nativeElement) {
    //     this.player = new Vimeo.Player(this.elementView.nativeElement);
    //     console.log(this.player)
    //     this.player.getDuration().then(function (duration) {
    //     }).catch(function (error) {
    //     });
    // }
  }
  indice = 0;
  nextChapter() {
    this.indice += 1;
    if (this.indice === this.allChapters.length) this.indice = 0;
    this.loadVimeoVideo(this.allChapters[this.indice]);
  }
  prevChapter() {
    this.indice -= 1;
    if (this.indice === -1) this.indice = this.allChapters.length-1;
    this.loadVimeoVideo(this.allChapters[this.indice]);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (
        this.academyService.coursesData &&
        this.academyService.coursesData.details
      ) {
      } else {
        this.getUserProfile().then(res => {
          this.currentUser = res;
          this.getGlossarryListDetail();
          this.getReviewListDetail();
          this.academyService
            .getCourseDetailsById(this.id, this.currentUser.id)
            .subscribe(res => {
              if (res.status === 200) {
                this.details = res.data[0];
                this.getAllChapters(this.details);
                if (
                  this.details.modules[0] &&
                  this.details.modules[0].chapters[0]
                ) {
                  let chapter = this.details.modules[0].chapters[0]; //chapters 0 not 1
                  this.loadVimeoVideo(chapter);

                  this.courseService
                    .getPlayListByuser(this.currentUser.id)
                    .subscribe(res => {
                      this.getTrackCourseProcess(this.id, this.currentUser.id);
                      this.playLists = res.data;
                      this.sortBy(this.playLists);
                      this.initPlayList();
                    });
                } else {
                  this.loadVimeoVideo(null);
                  this.playLists = [];
                  this.process = 0;
                }
              }
            });
        });
      }
    });
  }

  allChapters = [];
  getAllChapters(details) {
    var arr = [];
    _.map(details.modules, res => {
      let tmp = _.reduceRight(
        res.chapters,
        (a, b) => {
          return a.concat(b);
        },
        []
      );
      arr.push(tmp);
    });
    this.allChapters = _
      .reduceRight(
        arr,
        (a, b) => {
          return a.concat(b);
        },
        []
      )
      .reverse(); 
  }
  getTrackCourseProcess(course_id, user_id) {
    this.courseService
      .getTrackCourseProcess(course_id, user_id)
      .subscribe(res => {
        this.process = Math.floor(res.data.process);
      });
  }
  getReviewListDetail() {
    this.courseService.getReviewListDetail(this.id).subscribe(res => {
      this.ReviewListDetails = res.data.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
  }

  getGlossarryListDetail() {
    this.courseService.getGlossarryListDetail(this.id).subscribe(res => {
      this.GlossarryListDetails = res.data;
    });
  }
  completedChapter(moduleData) {
    return Math.floor(
      this.countColmpletedChapter(moduleData) / moduleData.chapters.length
    );
  }
  postReview() {
    this.loadingByQuestion = true;
    const formData: FormData = new FormData();
    formData.append("course_id", this.id);
    formData.append("user_id", this.currentUser.id);
    formData.append("publish_flag", "1");
    formData.append("title", this.addReview.get("title").value);
    formData.append("description", this.addReview.get("description").value);

    this.courseService.postReview(formData).subscribe(res => {
      if (res.status === 200) {
        this.loadingByQuestion = false;
        this.getReviewListDetail();
        this.addReview.reset();
      }
    });
  }
  updateChapterForCourses(chapterData) {
    this.id_chapter = chapterData.id;
    this.loading_tab_content = true;
    let m = Number(chapterData.is_mark);
    m = m === 0 ? 1 : 0;
    const formData: FormData = new FormData();
    formData.append("user_id", this.currentUser.id);
    formData.append("chapter_id", chapterData.id);
    formData.append("courseid", this.id);
    formData.append("is_mark", m.toString());

    this.courseService.updateChapterForCourses(formData).subscribe(res => {
      if (res.status === 200) {
        this.getTrackCourseProcess(this.id, this.currentUser.id);
        this.loading_tab_content = false;
      }
    });
  }

  initPlayList() {
    this.addToPlayListForm.reset();
    this.playLists1 = Object.assign([], this.playLists);
    this.playLists1 = this.playLists1.slice(this.previous, this.next);
  }

  onPrevious() { 
    let playlist = Object.assign([], this.playLists);
    if (this.previous === 0 && this.next === 2) {
      this.previous = 0;
      this.next = playlist.length - 1;
      this.playLists1 = [];
      this.playLists1.push(playlist[this.previous]);
      this.playLists1.push(playlist[this.next]);
      this.previous = this.next;
    } else if (this.previous === playlist.length - 1) {
      this.next = this.previous;
      this.previous = this.next - 2;
      this.playLists1 = playlist.slice(this.previous, this.next);
    } else {
      this.previous -= 1;
      this.next -= 1;
      this.playLists1 = playlist.slice(this.previous, this.next);
    }
  }
  onNext() { 

    let playlist = Object.assign([], this.playLists);
    if (this.next === playlist.length) {
      this.next = 0;
      this.previous = playlist.length - 1;
      this.playLists1 = [];
      this.playLists1.push(playlist[this.next]);
      this.playLists1.push(playlist[this.previous]);
      this.next = 2;
      this.previous = 0;
    } else {
      this.previous += 1;
      this.next += 1;
      this.playLists1 = playlist.slice(this.previous, this.next);
    }
  }

  onKey(id) {
    this.id_chapter = id;
  }
  checkByChapterId(id) {
    return this.id_chapter === id;
  }
  checkByPlayListId(id) {
    return this.id_playlist === id;
  }

  loadModuleData() {
    this.service
      .getUniModules(this.id)
      .concatMap((it: any) => {
        this.unimodulesData = it.data;
        return Observable.forkJoin(
          this.unimodulesData.map(item => this.service.getChapters(item.id)),
          (...values: Array<any>) => values
        );
      })
      .subscribe(
        data => {
          this.chaptersData = data;
        },
        error => console.log(error)
      );
  }
  loadVimeoVideo(chapter) { 
    if (chapter) {
      this.objVideo = chapter.video;
      if (this.objVideo) {
        let url = "https:player.vimeo.com/video/" + this.objVideo.vimeo_id;
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

      this.isChapterOpened = true;
      this.openedChapter = chapter;
    } else {
      this.objVideo = null;
      this.urlVideo = null;
    }
  }
  addToPlaylist() {
    this.loading = true;
    let name = this.addToPlayListForm.get("PlaylistName").value;
    if (this.addToPlayListForm.valid && name.trim() !== "") {
      if (this.objVideo && this.objVideo.id)
        this.courseService
          .addToPlayList(this.currentUser.id, name, this.objVideo.id)
          .subscribe(res => {
            if (res.status === 200) {
              this.loading = false;
              let playListTmp = {
                id: null,
                name: name,
                updated_at: new Date()
              };
              this.playLists.push(playListTmp);
              this.sortBy(this.playLists);
              this.initPlayList();
            }
          });
      else this.loading = false;
    }
  }

  sortBy(data) {
    this.playLists = data.sort(
      (a: any, b: any) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  }
  addtoplaylistBylist(playlist) {
    this.loadingByPlayListId = true;
    this.id_playlist = playlist.id;
    if (this.objVideo && this.objVideo.id)
      this.courseService
        .addToPlayList(this.currentUser.id, playlist.name, this.objVideo.id)
        .subscribe(res => {
          this.loadingByPlayListId = false;
        });
    else this.loadingByPlayListId = false;
  }

  setGradeIndice(id): boolean {
    if (this.gradeIndex <= id) {
      this.gradeIndex += 1;
      return true;
    }
    return false;
  }

  ngOnDestroy() {}
  prev_Video() {}
  backButton() {
    if (this.isChapterOpened) {
      this.isChapterOpened = false;
    } else {
      this.router.navigate(["/course/academy"]);
    }
  }
}
