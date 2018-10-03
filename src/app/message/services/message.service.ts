import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs/Rx';
import { map } from 'rxjs/operators'
import { Message } from '../models/models';
import { ApiService } from '../../api/api.service';

@Injectable()
export class MessageService {

  private messagesUrl = 'messages';  // URL to web api
  private messageUrl = 'message';  // URL to web api
  private conversationUrl = 'create/conversation';
  private add_participant = 'add-participant';
  messages: Message[] = [];
  listUsersInConversation=[];

  openedChat: Subject<any> = new Subject<any>()
  currentMessagesSummary;


  constructor(private apiService: ApiService) {

  }
  addmessagetoconversation(body) : Observable<any>{
    let url="addmessagetoconversation"
    return this.apiService.post(url, body);
  }
  fetchmessage(conv_id,userId): Observable<any> {
    let url ='fetchmessage/'+conv_id+'/'+userId;
    return this.apiService.get(url);

  }
  addusertoconversation(conv_id,userId): Observable<any>{
    let url ='addusertoconversation/'+conv_id+'/'+userId;
    return this.apiService.get(url);
  }
  createConversation(body): Observable<any> {
    const url = 'createconversation';
    return this.apiService.post(url, body);
  }
  addParticipant(body): Observable<any> {
    const url = `${this.add_participant}`;
    return this.apiService.post(url, body);
  }
  getUserMessages(): Observable<any> {
    const url = `${this.messagesUrl}/summary`;
    return this.apiService.get(url);
  }

  getChatHistory(userId: number, objectId): Observable<any> {
    const url = `${this.messagesUrl}?receiver=${userId}&&sender=${objectId}`;
    return this.apiService.get(url);
  }

  createMessage(message: any): Observable<any> {
    const url = `${this.messagesUrl}`;
    return this.apiService.post(url, message);
  }

  updateMessage(message: Message): Observable<any> {
    const url = `${this.messagesUrl}/${message.id}`;
    return this.apiService.put(url, message);
  }

  updateUnreadMessage(param: any): Observable<any> {
    const url = `${this.messagesUrl}status`;
    return this.apiService.put(url, param);
  }

  updateMessagesList(messages: Message[]) {
    this.messages = messages;
  }

  updateMessageOnList(message: Message) {
    const index = this.messages.findIndex(x => x.id === message.id);
    this.messages[index] = message;
  }

  addMessageOnList(message: Message) {
    this.messages.push(message);
  }
  setChat(chat) {
    this.openedChat.next(chat);
  }




  createMessageReceiver(obj: any): Observable<any> {
    const url = `${this.messageUrl}`;

    return this.apiService.post(url, obj);
  }

  getMessagesByReceiver(receiver: any): Observable<any> {
    const url = `${this.messagesUrl}` + `/thread`;
    let body = { receiver: receiver }
    return this.apiService.post(url, body);
  }

  search(term: string) {
    return this.apiService.post('contact/search', { "q": term }).map(res => {
      if (res.success) 
        return  res.data;
       return [];
    });

  }
}
