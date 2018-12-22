import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import {RouterModule,Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppmainComponent } from './appmain/appmain.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ApiserviceService } from './apiservice.service';
import { HttpModule } from '@angular/http';

const appRoutes:Routes = [
{path:'',component:AppComponent},
{path:'about', component:AboutComponent},
{path:'users',component:UserlistComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayComponent,
    AboutComponent,
    AppmainComponent,
    UserlistComponent
        
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule],
  providers: [ApiserviceService],
  bootstrap: [AppmainComponent, NavbarComponent]
})
export class AppModule { }
