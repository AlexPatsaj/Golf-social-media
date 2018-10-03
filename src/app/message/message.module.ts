import { NgModule } from '@angular/core';
import { CommonModule ,DatePipe} from '@angular/common';

import { MessageService } from './services/message.service';
// import { SocketService } from './services/socket.service';
import { ContactService } from './services/contact.service';
import { UserService } from '../users/user.service';

import { ActionService } from './services/action.service';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatContactsComponent } from './components/chat-contacts/chat-contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TimeSinceModule } from '@thisissoon/angular-timesince';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TimeSinceModule
  ],
  declarations: [
      MessageComponent,
      ChatMessageComponent,
      ChatContactsComponent
  ],
  providers: [
    ContactService,
    MessageService, 
    ActionService,
    UserService,
    DatePipe
  ]
})
export class MessageModule { }
