import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilService } from './service/appareil.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './service/authGuard.service';
import { SimpleAppareilComponent } from './simple-appareil/simple-appareil.component';


const appRoutes:Routes=[
  {path:'appareils',canActivate:[AuthGuard], component:AppareilViewComponent},
  {path:'appareils/:id', canActivate:[AuthGuard],component:SimpleAppareilComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:AuthComponent},
  {path:'not-found',component:FourOhFourComponent},
  { path: '**', redirectTo:'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,    
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    SimpleAppareilComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
