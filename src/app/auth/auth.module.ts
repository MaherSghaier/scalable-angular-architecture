import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { AuthApiClientService } from './auth-api-client.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [LoginComponent],
  providers: [AuthApiClientService, AuthService]
})
export class AuthModule {}
