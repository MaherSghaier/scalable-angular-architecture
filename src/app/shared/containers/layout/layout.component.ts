import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div class="container-fluid layout-content">
      <ng-content></ng-content>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
