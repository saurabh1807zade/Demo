import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DefaultComponent } from './Layout/default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Layout/shared/sidebar/sidebar.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { PostsComponent } from './Layout/dashboard/posts/posts.component';


const Ux_modules=[
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ux_modules,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
