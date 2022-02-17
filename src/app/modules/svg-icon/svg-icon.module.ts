import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsModule, SvgIconComponent } from '@ngneat/svg-icon';

import { faAcornIcon as faRegularAcorn } from 'IconLibrary/fontawesome/regular/acorn';

faRegularAcorn.name = 'fa-regular-acorn';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        faRegularAcorn,
      ],
    }),
  ],
  exports: [
    SvgIconComponent,
  ],
})
export class SVGIconModule { }
