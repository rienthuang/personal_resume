import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgwWowModule } from "ngx-wow";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TagComponent } from './about/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
