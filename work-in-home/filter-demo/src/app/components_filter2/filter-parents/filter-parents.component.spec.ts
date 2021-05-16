import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterParentsComponent } from './filter-parents.component';

describe('FilterParentsComponent', () => {
  let component: FilterParentsComponent;
  let fixture: ComponentFixture<FilterParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
