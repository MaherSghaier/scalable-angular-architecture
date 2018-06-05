/** Angular core modules */
import { NgModule, ModuleWithProviders } from '@angular/core';
/** Custom Utilities Services */
import { ValidationService } from './validation.service';
import { UtilityService } from './utility.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityService, ValidationService]
    };
  }
}
