import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsModule, SvgIconComponent } from '@ngneat/svg-icon';

import { acornIcon as faRegularAcorn } from 'IconLibrary/fontawesome/regular/acorn'
import { acornIcon as faSolidAcorn } from 'IconLibrary/fontawesome/solid/acorn'
faRegularAcorn.name = 'fa-regular-acorn'
faSolidAcorn.name = 'fa-solid-acorn'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        faSolidAcorn,
        faRegularAcorn,
      ],
    }),
  ],
  exports: [
    SvgIconComponent,
  ]
})
export class SVGIconModule { }
