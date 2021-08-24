import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilsService } from './services/appareils.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';


import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
 
   { path: 'appareils', canActivate: [AuthGuardService] ,component: AppareilViewComponent },
   { path: 'appareils/:id', canActivate: [AuthGuardService] ,component: SingleAppareilComponent },
   { path: 'edit', component: EditAppareilComponent },
   { path: 'auth', component: AuthComponent },
   { path: 'users', component: UserListComponent },
   { path: '', component: AppareilViewComponent },
   { path: 'not-found', component: FourOhFourComponent },
   { path: '**', redirectTo: 'not-found' },

]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,   
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    AppareilsService,
    AuthService,
    AuthGuardService,
    UserService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */