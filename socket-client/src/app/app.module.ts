import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

import { SocketService } from './socket.service';
import { TextFormatPipe } from './text-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    TextFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
