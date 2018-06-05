import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import * as StackTraceParser from 'error-stack-parser';
import { NotificationsService } from 'angular2-notifications';

import { ErrorsService } from './errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationsService);
    const errorsService = this.injector.get(ErrorsService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
        return notificationService.warn('No Internet Connection');
      }
      // Http Error
      // Send the error to the server
      errorsService.log(error).subscribe();
      // Show notification to the user
      return notificationService.error(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      // Client Error Happend
      // Send the error to the server and then
      // redirect the user to the page with all the info
      errorsService.log(error).subscribe(errorWithContextInfo => {
        router.navigate(['/error'], { queryParams: errorWithContextInfo });
      });
    }
    // Log the error anyway
    console.error(error);
  }
}
