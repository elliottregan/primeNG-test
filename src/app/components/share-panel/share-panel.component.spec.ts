import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePanelComponent } from './share-panel.component';

describe('SharePanelComponent', () => {
  let component: SharePanelComponent;
  let fixture: ComponentFixture<SharePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharePanelComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
