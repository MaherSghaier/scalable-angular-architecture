/** Angular core dependencies */
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ngx-pipes';

/** Custom Pipes */
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { TruncatePipe } from './truncate.pipe';

/** Custom Pipes Registration */
const PIPES = [SanitizeHtmlPipe, TruncatePipe];
const PIPES_MODULES = [NgPipesModule];

@NgModule({
  declarations: PIPES,
  imports: PIPES_MODULES,
  exports: [...PIPES, PIPES_MODULES]
})
export class PipesModule {}
