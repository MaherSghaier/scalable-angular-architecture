/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components';

/** Custom Containers */
import { LayoutComponent } from './layout/layout.component';

/** Custom Containers Registration */
const CONTAINERS = [LayoutComponent];

@NgModule({
  imports: [
    /** Angular core dependencies */
    CommonModule,
    ComponentsModule
  ],
  declarations: CONTAINERS,
  exports: CONTAINERS
})
export class ContainersModule { }
