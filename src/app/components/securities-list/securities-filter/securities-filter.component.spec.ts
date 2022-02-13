import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesFilterComponent } from './securities-filter.component';

describe('SecuritiesFilterComponent', () => {
  let component: SecuritiesFilterComponent;
  let fixture: ComponentFixture<SecuritiesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritiesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
