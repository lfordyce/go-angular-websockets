import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class SocketService {

  private socket: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();

  constructor() {
    const websocketUrl = environment.production ? environment.websocket : environment.websocket;
    this.socket = new WebSocket(environment.websocket);
    console.log(this.socket);
    this.socket.onopen = event => {
      this.listener.emit({"type": "open", "data": event});
    }
    this.socket.onclose = event => {
      this.listener.emit({"type": "close", "data": event});
    }
    this.socket.onmessage = event => {
      this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
    }
  }

  public send(data: string) {
    this.socket.send(data);
  }

  public close() {
    this.socket.close();
  }

  public getEventListener() {
    return this.listener;
  }

}
