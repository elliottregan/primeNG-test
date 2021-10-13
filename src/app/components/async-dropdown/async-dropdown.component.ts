import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService, Pokemon } from '../../services/http.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface GroupOptions {
  label: string,
  items: Pokemon[]
}

@Component({
  selector: 'app-async-dropdown',
  templateUrl: './async-dropdown.component.html',
  styleUrls: ['./async-dropdown.component.scss']
})
export class AsyncDropdownComponent implements OnDestroy {

  public selectedPokemon: Pokemon[] = [];

  public filterValue:string = '';

  private filterTextChanged!: Subject<string>;

  public groupedOptions:GroupOptions[] = [
    {
      label: 'Party',
      items: [],
    },
    {
      label: 'Search Results',
      items: [],
    }
  ]

  constructor(private HttpService: HttpService) {}

  public onFilter({ filter }: any): void {
    // Try filtering only a sub-section ---- this isn't possible out of the box, but we can make it work.
    // Also try disabling certain items in the list from being unchecked ---- this is possible
    this.filterTextChanged.next(filter);
  }

  public async observeFilterchanges(): Promise<void> {
    this.filterTextChanged = new Subject<string>();
    this.filterTextChanged
      // TODO: If this debounce is shorter than the request,
      // a race condition causes the filterValue to change to the last request,
      // which may be different from the last filterValue the user typed in.
      // I think there's a better way to do this with switchMap.
      // https://www.freakyjolly.com/ng-select-typeahead-with-debouncetime-fetch-server-response/
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(async filterQuery => {
        if (filterQuery === '') {
          this.groupedOptions[1].items = this.selectedPokemon.filter(p => !this.groupedOptions[0].items.find(r => r.id === p.id))
        } else {
          // The selected items must be merged into the search results
          // Otherwise, p-dropdown will not be able to render the selected items.
          const results = await this.HttpService.fetchPokemon_details(filterQuery);
          // Merge the results with the selected items, but exclude the selected items that are already in the search results
          // Otherwise, you end up with duplicates.
          this.groupedOptions[1].items = [...results, ...this.selectedPokemon.filter(p =>!results.find((r:Pokemon) => r.id === p.id))]
        }
        // Next line is required to force p-dropdown to update
        this.filterValue = filterQuery;
      });

    if (!this.groupedOptions[0].items.length) {
      this.filterValue = ' ';
      this.groupedOptions[0].items = await this.HttpService.fetchParty([1, 10, 16, 25]);
      this.filterValue = '';
    }
  }

  public unObserveFilterchanges(): void {
    this.filterTextChanged.next('');
    this.filterTextChanged?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unObserveFilterchanges();
  }
}
