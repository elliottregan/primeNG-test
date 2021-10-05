import { Component } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-async-dropdown',
  templateUrl: './async-dropdown.component.html',
  styleUrls: ['./async-dropdown.component.scss']
})
export class AsyncDropdownComponent {

  cities: City[];

  selectedCities!: City[];

  constructor() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
    }

}
