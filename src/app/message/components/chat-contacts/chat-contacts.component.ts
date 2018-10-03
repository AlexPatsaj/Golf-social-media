import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ContactService } from '../../services/contact.service';
import { ActionService } from '../../services/action.service';
import { environment } from '../../../../environments/environment';
import { Contact, MessageType } from '../../models/models';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../../users/user.service';
import { DatePipe } from '@angular/common';
import { TokenStorage } from '../../../auth/token-storage.service';

import 'rxjs/add/observable/timer';

import { Observable } from 'rxjs/Observable';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge } from 'rxjs/operators';
import * as _ from 'underscore';



const SERVER_URL = `${environment.serverUrl}/`;

@Component({
    selector: 'app-chat-contacts',
    templateUrl: './chat-contacts.component.html',
    styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit, OnDestroy {

    avatarUrl = SERVER_URL;
    contacts: Contact[] = [];
    contactsAll: Contact[] = [];
    selectedContactId: number = 0;
    currentUser;
    searchUser: string = '';
    MessageType = MessageType;
    idTheFirstCase;
    private subScriptions: Subscription[];
    public messagesSummary;
    public messagesSummary1;

    searchContact

    public newContact: any;
    public searching = false;
    public searchFailed = false;
    public hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
    public contactTmp


    public showInput;

    constructor(
        private contactService: ContactService,
        private messageService: MessageService,
        private actionService: ActionService,
        private userService: UserService,
        private datePipe: DatePipe,
        private tokenService: TokenStorage,
    ) {
    }

    ngOnInit() {
        this.currentUser = this.tokenService.currentUser;
        if (this.currentUser && this.currentUser.image) {
            this.currentUser.image = '/assets/images/user.png';
        }
        this.contactService.fetchchatusersgroups(this.currentUser.id).subscribe((res) => {
            this.messagesSummary = res.data;
            this.messagesSummary1 = _.sortBy(this.messagesSummary, 'type').reverse();
            // this.openChat(this.messagesSummary[0]);
        });



        this.subScriptions = [];

        // update timer for contact time
        // let timer = Observable.timer(1000);
        // let timeSubscription = timer.subscribe((t) => {
        //     // this.onUpdateTimer();
        // })
        // this.subScriptions.push(timeSubscription);

       
    }
    ngOnDestroy() {
        this.subScriptions.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }

    onSearch(searchContact): void {
        let messagesSummary1 = Object.assign([],  this.messagesSummary)
        this.messagesSummary1=_.filter(messagesSummary1, function(elm){ return elm.name.toUpperCase().includes(searchContact.toUpperCase()) } )
    }
    onEnter(event: any): void {
        this.contacts = this.contactsAll.filter(
            contact => {
                const name = contact.name.toLocaleLowerCase();
                return name.includes(this.searchUser.toLocaleLowerCase());
            }
        );
        event.preventDefault();
    }
    getPartialMsg(msg) {
        return msg.substring(0, 50) + (msg.length > 50 ? '...' : '');
    }
    getDisplayDate(date: Date) {
        let now = new Date();
        date = new Date(date)
        if (date.getFullYear() < now.getFullYear() || date.getMonth() < now.getMonth() || date.getDay() < now.getDay() - 7) {
            return this.datePipe.transform(date, 'shortDate');
        }
        if (date.getDay() >= now.getDay() - 7 && date.getDay() < now.getDay() - 1) {
            return now.getDay() - date.getDay() + " days";
        }
        if (date.getDay() >= now.getDay() - 1 && date.getHours() < now.getHours() - 10) {
            return now.getHours() - date.getHours() + " hr";

        }
        if (date.getHours() >= now.getHours() - 10) {
            return this.datePipe.transform(date, 'shortTime');

        }

    }


    openChat(chat) {
        // this.newContact = '';
        this.messageService.fetchmessage(chat.id, this.currentUser.id).subscribe((res) => {
            this.messageService.messages = res.data.reverse();
            this.messageService.listUsersInConversation = chat.users;
            this.messageService.setChat(chat);

        });
    }




    search = (text$: Observable<string>) => {
        return text$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap(term => {
                return term.length < 3 ? Observable.of([]) : this.messageService.search(term).pipe(
                    tap(() => this.searchFailed = false),
                    catchError(() => {
                        this.searchFailed = true;
                        return Observable.of([]);
                    }))
            }
            ),
            tap(() => this.searching = false),
            merge(this.hideSearchingWhenUnsubscribed)
        );

    }

    formatter = (x: { first_name: string, last_name: string }) => {
        return x.first_name + ' ' + x.last_name;
    };
    existINmessagesSummary = false;

    createConversation(chat) {
        if (chat.type === 1) {
            let body = {
                "user_id": this.currentUser.id,
                "receiver_id": chat.id
            }

            this.messageService.createConversation(body).subscribe((res) => {
                this.messagesSummary.push({
                    "id": res.data.id,
                    "type": 2,
                    "name": res.data.name
                })
                this.onSearch(this.searchContact); 
                this.messagesSummary1 = _.sortBy(this.messagesSummary1, 'type').reverse();

            })
        } else if (chat.type === 2) {
            this.newContact = '';
            this.openChat(chat)
        }

    }
    showNewContact() {
        if (typeof this.newContact === 'object') {
            this.newContact = '';
            return true;
        } return false;
    }


}
