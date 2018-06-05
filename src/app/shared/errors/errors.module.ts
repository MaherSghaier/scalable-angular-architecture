import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsRoutingModule } from './errors-routing.module';

import { ErrorsHandler } from './errors-handler';
import { ServerErrorsInterceptor } from './server-errors.interceptor';
import { ErrorsService } from './errors.service';

import { ErrorsComponent } from './components/errors.component';

@NgModule({
  imports: [CommonModule, ErrorsRoutingModule],
  declarations: [ErrorsComponent],
  providers: [
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ]
})
export class ErrorsModule {}
