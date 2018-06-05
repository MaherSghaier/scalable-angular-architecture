import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-not-found',
  template: `
    <div class="page-not-found">
    	<div class="page-not-found-content">
    		<img src="/assets/images/Martian.png" />
      	<h1>{{ 'PageNotFound.Title' | translate }}</h1>
      	<h3>{{ 'PageNotFound.Subtitle' | translate }}</h3>
      	<button (click)="goBack()">{{ 'PageNotFound.Button' | translate }}</button>
    	</div>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
  constructor(private location: Location) {}

  public goBack() {
    this.location.back();
  }
}
