import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';
import { AsyncDropdownComponent } from './components/async-dropdown/async-dropdown.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AsyncDropdownComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MultiSelectModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
