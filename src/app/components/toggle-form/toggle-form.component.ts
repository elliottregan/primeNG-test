import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
export class ToggleFormComponent {

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

  addBulbUser(options:any[]) {
    this.shareSettings.patchValue({
      bulbUsers: options.map(option => option.id)
    });
  }

  updateBulbGroups(options:any[]) {
    this.shareSettings.patchValue({
      bulbGroups: options.map(option => option.id)
    });
  }

}
