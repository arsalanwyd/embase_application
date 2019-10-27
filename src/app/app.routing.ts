import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './auth/auth.component';
import { RandomGuard } from './guards/random.guard';
import { AuthGuard } from './guards/auth.guard';
import { PasswordResetComponent } from './auth/password-reset.component';

const routes: Routes = [
  {
    path: 'password-reset',
    component: PasswordResetComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
    canActivate: [RandomGuard],
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
