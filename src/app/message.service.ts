import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    let date = new Date();
    this.messages.push('[' + date.toLocaleTimeString() + '] ' + message);
  }

  clear():void {
    this.messages = [];
  }
}
