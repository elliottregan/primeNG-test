import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Subscription, from } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HttpService } from '../../services/http.service';

interface shareSettings extends FormGroup {
  value : {
    privacyLevel: FormControl,
    bulbUsers: FormControl,
    bulbGroups: FormControl,
  }
}

enum PrivacyLevel {
  PRIVATE = 'Private',
  CUSTOM = 'Custom',
  PUBLIC = 'Public',
}

enum PrivacyIcons {
  PRIVATE = 'pi pi-lock',
  CUSTOM = 'pi pi-cog',
  PUBLIC = 'pi pi-globe',
}

@Component({
  selector: 'app-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: ['./toggle-form.component.scss']
})
export class ToggleFormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subscription = new Subscription();

  public privacyOptions = Object.keys(PrivacyLevel).map((v, i)=> ({
    code: v,
    name: Object.values(PrivacyLevel)[i],
    icon: Object.values(PrivacyIcons)[i]
  }));

/**
 *     id: string,
    private: boolean, // published or not
    privateShareLink: string, // always there, no need to create it
    permissions: {
        publicUnit: boolean,
        bulbUsers: [permissionUnit],
        bulbGroups: [permissionUnit],
    },
    ancesterUnits: [AncestorUnit],
 */

  public shareSettings:shareSettings = new FormGroup({
    id: new FormControl('123'),
    privacyLevel: new FormControl('PRIVATE'),
    bulbUsers: new FormControl([]),
    bulbGroups: new FormControl([]),
  });

  fetchFavorites: (id?: Number | Number[]) => Promise<any[]>;

  fetchPeople: (name?: string) => Promise<any[]>;

  constructor(private HttpService: HttpService) {
    this.fetchFavorites = (...args) => this.HttpService.fetchParty(...args);
    this.fetchPeople = (...args) => this.HttpService.fetchPokemon_details(...args);
  }

  ngOnInit() {
    this.onChanges();
  }
  
  private onChanges(): void {
    this.ngUnsubscribe.add(
      this.shareSettings.get('privacyLevel')?.valueChanges
        .pipe(
          distinctUntilChanged(),
          switchMap(async value => {
            console.log('switchMap', value, this.shareSettings.get('privacyLevel')?.value);
            const tempFormData = this.shareSettings.value;
            tempFormData.privacyLevel = value;
            await this.savePermissions(tempFormData)
            // console.log(value, this.shareSettings.get('privacyLevel')?.value);
          }),
        )
        .subscribe(async value => {
          console.log('subscribe', value, this.shareSettings.get('privacyLevel')?.value);
        }),
    );
  }

  public updateBulbUsers(options:any[]) {
    this.shareSettings.patchValue({
      bulbUsers: options.map(option => option.id)
    });
  }

  public updateBulbGroups(options:any[]) {
    this.shareSettings.patchValue({
      bulbGroups: options.map(({ id })=> { id })
    });
  }

  public savePermissions(shareSettings:any) {
    console.log(this.shareSettings.value);
    this.HttpService.savePrivacySettings(shareSettings);
  }

  ngOnDestroy(): void { // Don't forget to close possible memory leak
    this.ngUnsubscribe.unsubscribe();
  } 


}
