import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SVGIconModule } from '../../modules/svg-icon/svg-icon.module'

import { ToggleFormComponent } from './toggle-form.component';

describe('ToggleFormComponent', () => {
  let component: ToggleFormComponent;
  let fixture: ComponentFixture<ToggleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SVGIconModule ],
      declarations: [ ToggleFormComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
