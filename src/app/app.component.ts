import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './app-config.service';
import { AuthService } from '@app/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: `
    <div class="full-height" *ngIf="auth.isLoggedIn()">
      <app-layout>
      <router-outlet></router-outlet>
      </app-layout>
    </div>
    <div class="full-height" *ngIf="!auth.isLoggedIn()">
      <router-outlet></router-outlet>
    </div>
    <simple-notifications [options]="getNotificationOptions()"></simple-notifications>
  `
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private configService: ConfigService,
    public auth: AuthService
  ) {
    this.setupLanguage();
    this.getNotificationOptions();
  }
  /**
   * Sets up default language for the application. Uses browser default language.
   */
  public setupLanguage(): void {
    const localization: any = this.configService.get('localization');
    const languages: Array<string> = localization.languages.map(lang => lang.code);
    const browserLang: string = this.translate.getBrowserLang();

    this.translate.addLangs(languages);
    this.translate.setDefaultLang(localization.defaultLanguage);
    const selectedLang =
      languages.indexOf(browserLang) > -1 ? browserLang : localization.defaultLanguage;
    const selectedCulture = localization.languages.filter(lang => lang.code === selectedLang)[0]
      .culture;
    this.translate.use(selectedLang);
  }

  /**
   * Returns global notification options
   */
  public getNotificationOptions(): any {
    return this.configService.get('notifications').options;
  }
}
