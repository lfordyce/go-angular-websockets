import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit, OnDestroy {

  // value = '';
  public chatBox: string;
  public messages: Array<any>;


  constructor(private socket: SocketService) {
    this.messages = [];
    this.chatBox = '';
  }

  ngOnInit() {
    this.socket.getEventListener().subscribe(event => {
      if (event.type == "message") {
        let data = event.data.content;
        if (event.data.sender) {
          data = event.data.sender + ": " + data;
        }
        this.messages.push(data);
      }
      if ( event.type == "close" ) {
        this.messages.push("/The Socket connection has been closed");
      }
      if (event.type === "open") {
        this.messages.push("/The socket connection has been established");
      }
    });
  }

  ngOnDestroy(): void {
    this.socket.close();
  }

  public send() {
    if (this.chatBox) {
      this.socket.send(this.chatBox);

      // this.messages.push(this.chatBox);

      this.chatBox = '';
    }
  }

  public isSystemMessage(message: string) {
    return message.startsWith("/") ? "<strong>" + message.substring(1) + "</strong>" : message;
  }

  onChange(event) {
    console.log(event.target.value);
    this.chatBox = event.target.value;
    // this.value = '';
  }
}
