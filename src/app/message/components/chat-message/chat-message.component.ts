import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { ActionService } from '../../services/action.service';
// import { SocketService } from '../../services/socket.service';
import { environment } from '../../../../environments/environment';
import { ContactService } from '../../services/contact.service';
import { Message, Contact, MessageType } from '../../models/models';
import { TokenStorage } from '../../../auth/token-storage.service';

const SERVER_URL = `${environment.serverUrl}/`;
import * as _ from 'underscore';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.scss']
})

export class ChatMessageComponent implements OnInit {

   @Input() messages;
   @Input() openedChat;
    draftMessage = '';
    selectedPromo = 'All';
    avatarUrl = SERVER_URL;

    currentUser: Contact;


    closeResult: string;
    listUsers

    
    @ViewChild('uploadAnyFile') uploadAnyFile;
    @ViewChild('chatMessages') chatMessages;
 

    constructor(
        private messageService: MessageService,
        private modalService: NgbModal,
        private tokenService: TokenStorage,
        private contactService: ContactService,


    ) { }
    fetchmessage(){
        this.messageService.fetchmessage(this.openedChat.id,this.currentUser.id).subscribe((res)=>{
            this.messageService.messages=res.data.reverse();
        });
    }
    listUsersInConversation(){
        return this.openedChat.users;
    }
    addUserToConversation(chat){
        this.messageService.addusertoconversation(this.openedChat.id,chat.id).subscribe((res)=>{
            this.openedChat.users.push({
                id:chat.id,
                name:chat.name
            });
        })
    }
    addmessagetoconversation(message){
        const formData: FormData = new FormData();
        formData.append('user_id', this.currentUser.id+'');
        formData.append('conversationid', this.openedChat.id+'');
        formData.append('message', message);
        
        this.messageService.addmessagetoconversation(formData).subscribe((res)=>{
            this.draftMessage='';
            this.fetchmessage()
        })
    }
    ngOnInit() {
        this.currentUser = this.tokenService.currentUser;
        if (this.currentUser && this.currentUser.image) { 
            this.currentUser.image = '/assets/images/user.png';
        }
        this.contactService.fetchchatusersgroups(this.currentUser.id).subscribe((res)=>{
            this.listUsers=res.data;
            this.listUsers=_.filter(this.listUsers,function(res){ return res.type === 1; });
        });
    }

    sendMessage() {

        const message = {
        };

        this.messageService.createMessage(message).subscribe(
            res => {
            }
        );
        this.draftMessage = '';

    }

    sendImageMessage(image: any) {

        const message = {
        };

        this.messageService.createMessage(message).subscribe(
            res => {
            }
        );

    }
    // trigger upload file
    triggerUploadFile = function () {
        if (this.uploadAnyFile) {
            this.uploadAnyFile.nativeElement.click();
        }
    };

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.sendImageMessage(reader.result);
    }

    handleInputChange(e) {

        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file || !file.type.match(pattern)) {
            // alert('invalid format');
            return;
        }

        // this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    onEnter(event: any): void {
        if (this.draftMessage.trim() === '') {
            return;
        }

        
        this.addmessagetoconversation(this.draftMessage);
    }

    getChatHistory() {

        this.messageService.getChatHistory(this.currentUser.id, this.openedChat.id).subscribe(
            res => {
                this.messages = res.data;
                // this.messageService.updateMessagesList(this.messages);

                this.scrollToBottom();
            },
            err => {
                this.messages = [];
            }
        );

    }

    scrollToBottom(): void {

        setTimeout(() => {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight
        }, 100);

    }
    getFirstName(fullname) {
        let firstName = fullname.split(" ")[0];
        return firstName
    }
    selectPromo(promo) {
        this.selectedPromo = promo;
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
}
