import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { SVGIconModule } from './modules/svg-icon/svg-icon.module';

import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';

import { AsyncDropdownComponent } from './components/async-dropdown/async-dropdown.component';
import { ToggleFormComponent } from './components/toggle-form/toggle-form.component';
import { SharePanelComponent } from './components/share-panel/share-panel.component';

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
    SVGIconModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    MultiSelectModule,
    OverlayPanelModule,
    SelectButtonModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
