import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpResponseHandler } from '@app/shared/async-services/http';

import { DataService } from '@shared/async-services/http';

@Injectable()
export class PostsApiClient extends DataService {
  constructor(httpClient: HttpClient, responseHandler: HttpResponseHandler) {
    super('/api/posts', httpClient, responseHandler);
  }
}
