import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DevicesComponent } from './components/devices/devices.component';

const appRoutes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
