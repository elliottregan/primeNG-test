import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';

import { AsyncDropdownComponent } from './components/async-dropdown/async-dropdown.component';
import { ToggleFormComponent } from './components/toggle-form/toggle-form.component';
import { SharePanelComponent } from './components/share-panel/share-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { faAcorn as faAbacus } from './svg/fontawesome/fontawesome-icon.model'
import { appAbacusIcon } from './svg/abacus'

@NgModule({
  declarations: [
    AppComponent,
    AsyncDropdownComponent,
    ToggleFormComponent,
    SharePanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    MultiSelectModule,
    OverlayPanelModule,
    SelectButtonModule,
    FontAwesomeModule,
    SvgIconsModule.forRoot({
      icons: [
        // appAbacusIcon,
        faAbacus,
      ],
    }),
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
