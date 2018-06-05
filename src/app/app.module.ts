/** Angular core modules */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
/** Routes */
import { AppRoutingModule } from './app-routing.module';
/** Modules */
import { AppComponent } from './app.component';
import { AuthModule } from '@app/auth/auth.module';

import { ComponentsModule } from '@shared/components';
import { ContainersModule } from '@shared/containers';
import { ErrorsModule } from '@app/shared/errors';
import { HttpServiceModule } from '@shared/async-services/http';
import { UtilityModule } from '@shared/utility';
/** guards */
import { AuthGuard } from '@shared/guards/auth.guard';
import { CanDeactivateGuard } from '@shared/guards/can-deactivate.guard';
/** Services */
import { ConfigService } from './app-config.service';
/** Third party modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtModule } from '@auth0/angular-jwt';

/**
 * Calling functions or calling new is not supported in metadata when using AoT.
 * The work-around is to introduce an exported function.
 *
 * The reason for this limitation is that the AoT compiler needs to generate the code that calls the factory
 * and there is no way to import a lambda from a module, you can only import an exported symbol.
 */

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    /** Angular core dependencies */
    BrowserModule,
    HttpClientModule,

    /** App custom dependencies */
    AuthModule,
    AppRoutingModule,

    ComponentsModule,
    ContainersModule,
    ErrorsModule,
    HttpServiceModule.forRoot(),
    UtilityModule.forRoot(),

    /** Third party modules */
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: [
          '/config/env.json',
          '/config/development.json',
          '/config/production.json',
          '/assets/i18n/en.json',
          'localhost:3000/auth/'
        ]
      }
    })
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
