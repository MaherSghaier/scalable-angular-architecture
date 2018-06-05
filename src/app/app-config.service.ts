import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config: Object;
  private env: Object;

  constructor(private httpClient: HttpClient) {}

  /**
   * Loads the environment config file first. Reads the environment variable from the file
   * and based on that loads the appropriate configuration file - development or production
   */
  load() {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          DataType: 'application/json'
        })
      };

      this.httpClient.get<{ env: string }>('/config/env.json').subscribe(env_data => {
        this.env = env_data;
        this.httpClient
          .get('/config/' + env_data.env + '.json')
          .pipe(
            catchError((err: HttpErrorResponse) => {
              return throwError(err.error || 'Server error');
            })
          )
          .subscribe(data => {
            this.config = data;
            resolve(true);
          });
      });
    });
  }

  /**
   * Returns environment variable based on given key
   *
   * @param key
   */
  getEnv(key: any) {
    return this.env[key];
  }

  /**
   * Returns configuration value based on given key
   *
   * @param key
   */
  get(key: any) {
    return this.config[key];
  }
}
