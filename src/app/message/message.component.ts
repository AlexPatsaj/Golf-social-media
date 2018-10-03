import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActionService } from './services/action.service';
import { MessageService } from './services/message.service';

import { Message, Contact, MessageType } from './models/models';
import { TokenStorage } from '../auth/token-storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  private contactSubscription: Subscription;
  selectedContact: Contact;
  messages;
  openedChat;
  currentUser
  constructor( private actionService: ActionService, private messageService: MessageService,private tokenService: TokenStorage,) { }

  ngOnInit() {
    this.messageService.openedChat.subscribe(chat => {
      this.openedChat = chat
        
  })

    this.currentUser = this.tokenService.currentUser;
    this.contactSubscription = this.actionService.getSelesctedUser().subscribe(
      contact => {
          this.selectedContact = { ...contact };
          this.messages = [{
            id: 1,
            type: 0,
            message: "Hey",
            ext: "22",
            created_at: new Date(),
            sender: this.selectedContact.id,
            receiver: "3",
            status: 1
        },{
            id: 2,
            type: 0,
            message: "Hey",
            ext: "22",
            created_at: new Date(),
            sender: 1,
            receiver: "3",
            status: 1
        }]
      }
  );
  }
  back(){
    this.openedChat = null;
  }

}
