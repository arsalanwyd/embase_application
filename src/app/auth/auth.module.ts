import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthserviceService } from './authservice.service';
import { RandomGuard } from 'app/guards/random.guard';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from 'app/guards/auth.guard';
import { MatFormFieldModule, MatProgressBarModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
  ],
  providers: [
    AuthserviceService,
    AuthModule,
    RandomGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class AuthModule { }
