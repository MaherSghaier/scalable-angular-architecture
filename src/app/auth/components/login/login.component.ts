import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { moveIn } from '@shared/animations';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@moveIn]': '' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public email: AbstractControl;
  public password: AbstractControl;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  /**
   * Builds a form instance (using FormBuilder) with corresponding validation rules
   */
  public initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.authService.validationService.validateEmail]],
      password: ['', Validators.required]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  /**
   * Handles form 'submit' event. Calls sandbox login function if form is valid.
   *
   * @param event
   * @param form
   */
  public onSubmit(event: Event, form: any): void {
    event.stopPropagation();
    this.submitted = true;

    if (this.loginForm.valid) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.authService.login(form, returnUrl);
    }
  }
}
