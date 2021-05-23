import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerOneComponent } from './date-picker-one.component';

describe('DatePickerOneComponent', () => {
  let component: DatePickerOneComponent;
  let fixture: ComponentFixture<DatePickerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
